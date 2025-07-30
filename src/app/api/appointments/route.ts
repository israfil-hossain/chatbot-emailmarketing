import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
import { prisma } from '@/lib/prisma'
import { google } from 'googleapis'

export async function POST(req: NextRequest) {
  const { userId } = auth()
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  
  const { title, description, startTime, endTime, attendeeEmail } = await req.json()
  
  // Create appointment in database
  const appointment = await prisma.appointment.create({
    data: {
      userId,
      title,
      description,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      attendeeEmail
    }
  })
  
  // Optional: Create Google Calendar event
  // await createGoogleCalendarEvent(appointment)
  
  return NextResponse.json({ appointment })
}