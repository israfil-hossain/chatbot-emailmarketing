import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
import { Resend } from 'resend'
import { prisma } from '@/lib/prisma'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { userId } = auth()
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  
  const { to, subject, html, workspaceId } = await req.json()
  
  // Check email credits
  const billing = await prisma.billings.findUnique({
    where: { userId }
  })
  
  if (!billing || billing.emailCredits <= 0) {
    return NextResponse.json({ error: 'No email credits remaining' }, { status: 402 })
  }
  
  try {
    const { data } = await resend.emails.send({
      from: 'noreply@yourdomain.com',
      to,
      subject,
      html
    })
    
    // Decrement email credits
    await prisma.billings.update({
      where: { userId },
      data: { emailCredits: { decrement: 1 } }
    })
    
    return NextResponse.json({ success: true, messageId: data?.id })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}