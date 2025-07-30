import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/lib/prisma';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(
  request: NextRequest,
  { params }: { params: { domainId: string } }
) {
  try {
    const { domainId } = params;
    const { message, sessionId } = await request.json();

    if (!message || !sessionId) {
      return NextResponse.json(
        { error: 'Message and sessionId are required' },
        { status: 400 }
      );
    }

    // Find or create customer and chat room
    let customer = await client.customer.findFirst({
      where: { domainId },
      include: { chatRoom: true }
    });

    if (!customer) {
      customer = await client.customer.create({
        data: {
          domainId,
          chatRoom: {
            create: {}
          }
        },
        include: { chatRoom: true }
      });
    }

    const chatRoom = customer.chatRoom[0];

    // Save user message
    await client.chatMessage.create({
      data: {
        message,
        role: 'USER',
        chatRoomId: chatRoom.id,
      }
    });

    // Get domain info for context
    const domain = await client.domain.findUnique({
      where: { id: domainId },
      include: {
        chatBot: true,
        helpDesk: {
          select: {
            question: true,
            answer: true
          }
        }
      }
    });

    // Prepare context for AI
    let context = `You are a helpful AI assistant for ${domain?.name || 'this website'}.`;
    
    if (domain?.helpDesk && domain.helpDesk.length > 0) {
      context += '\n\nHere are some frequently asked questions and answers:\n';
      domain.helpDesk.forEach(item => {
        context += `Q: ${item.question}\nA: ${item.answer}\n\n`;
      });
    }

    // Get recent chat history for context
    const recentMessages = await client.chatMessage.findMany({
      where: { chatRoomId: chatRoom.id },
      orderBy: { createdAt: 'desc' },
      take: 10
    });

    const chatHistory = recentMessages.reverse().map(msg => ({
      role: msg.role === 'USER' ? 'user' : 'assistant',
      content: msg.message
    }));

    // Generate AI response
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: context
        },
        ...chatHistory.slice(-5), // Last 5 messages for context
        {
          role: 'user',
          content: message
        }
      ],
      max_tokens: 300,
      temperature: 0.7
    });

    const aiResponse = completion.choices[0].message.content || 'I apologize, but I cannot provide a response at the moment.';

    // Save AI response
    await client.chatMessage.create({
      data: {
        message: aiResponse,
        role: 'ASSISTANT',
        chatRoomId: chatRoom.id,
      }
    });

    return NextResponse.json({
      response: aiResponse,
      sessionId: chatRoom.id
    });

  } catch (error) {
    console.error('Error processing chat message:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}
