import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { domainId: string } }
) {
  try {
    const { domainId } = params;

    const domain = await client.domain.findUnique({
      where: { id: domainId },
      include: {
        chatBot: {
          select: {
            welcomeMessage: true,
            icon: true,
            background: true,
            textColor: true,
          }
        }
      }
    });

    if (!domain || !domain.chatBot) {
      return NextResponse.json(
        { error: 'Chatbot not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      welcomeMessage: domain.chatBot.welcomeMessage || 'Hello! How can I help you today?',
      icon: domain.chatBot.icon,
      background: domain.chatBot.background || '#3b82f6',
      textColor: domain.chatBot.textColor || '#ffffff',
    });
  } catch (error) {
    console.error('Error fetching chatbot config:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
