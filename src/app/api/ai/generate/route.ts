import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
import { checkAITokens, consumeAITokens } from '@/lib/ai-usage'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: NextRequest) {
  const { userId } = auth()
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  
  const { type, prompt, context } = await req.json()
  
  // Estimate tokens needed (rough calculation)
  const estimatedTokens = Math.ceil(prompt.length / 4) + 500
  
  const hasTokens = await checkAITokens(userId, estimatedTokens)
  if (!hasTokens) {
    return NextResponse.json({ error: 'Insufficient AI tokens' }, { status: 402 })
  }
  
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: getSystemPrompt(type)
        },
        {
          role: 'user', 
          content: prompt
        }
      ],
      max_tokens: 500
    })
    
    const content = completion.choices[0].message.content
    const tokensUsed = completion.usage?.total_tokens || estimatedTokens
    
    await consumeAITokens(userId, tokensUsed, type)
    
    return NextResponse.json({ content, tokensUsed })
  } catch (error) {
    return NextResponse.json({ error: 'AI generation failed' }, { status: 500 })
  }
}

function getSystemPrompt(type: string) {
  const prompts = {
    EMAIL_TEMPLATE: 'You are an expert email marketer. Create engaging email templates.',
    SOCIAL_POST: 'You are a social media expert. Create engaging social media posts.',
    CONTENT_GENERATION: 'You are a content creator. Generate high-quality content.',
    CHATBOT_RESPONSE: 'You are a helpful AI assistant for customer support.'
  }
  
  return prompts[type as keyof typeof prompts] || prompts.CONTENT_GENERATION
}