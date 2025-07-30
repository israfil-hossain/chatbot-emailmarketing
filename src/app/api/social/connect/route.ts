import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  const { userId } = auth()
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  
  const { platform, accessToken, accountId, accountName } = await req.json()
  
  await prisma.socialAccount.upsert({
    where: {
      userId_platform: { userId, platform }
    },
    update: {
      accessToken,
      accountId,
      accountName
    },
    create: {
      userId,
      platform,
      accessToken,
      accountId,
      accountName
    }
  })
  
  return NextResponse.json({ success: true })
}