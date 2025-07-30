import { NextRequest } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe'
import { client as prisma } from '@/lib/prisma'
import { PRICING_PLANS } from '@/constants/pricing'
import { Plans, $Enums } from '@prisma/client'

function getPlanFromPriceId(priceId: string): string {
  const planEntry = Object.entries(PRICING_PLANS).find(([_, config]) => 
    config.stripeId === priceId
  )
  return planEntry ? planEntry[0] : 'FREE'
}

export async function POST(req: NextRequest) {
  const body = await req.text()
  const headersList = await headers()
  const signature = headersList.get('stripe-signature')!

  const event = stripe.webhooks.constructEvent(
    body,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET!
  )
  
  switch (event.type) {
    case 'customer.subscription.created':
    case 'customer.subscription.updated':
      const subscription = event.data.object
      await updateUserSubscription(subscription)
      break
      
    case 'customer.subscription.deleted':
      await cancelUserSubscription(event.data.object.customer as string)
      break
  }
  
  return new Response('OK')
}

async function updateUserSubscription(subscription: any) {
  const user = await prisma.user.findFirst({
    where: { stripeId: subscription.customer }
  })
  
  if (!user) return
  
  const plan = getPlanFromPriceId(subscription.items.data[0].price.id)
  const planConfig = PRICING_PLANS[plan as keyof typeof PRICING_PLANS]
  
  await prisma.billings.upsert({
    where: { userId: user.id },
    update: {
      plan: plan as Plans,
      aiTokens: planConfig.aiTokens === -1 ? 999999 : planConfig.aiTokens,
      emailCredits: planConfig.emailsPerMonth,
      workspaceLimit: planConfig.workspaces,
      stripeSubscriptionId: subscription.id,
      currentPeriodEnd: new Date(subscription.current_period_end * 1000)
    } as any,
    create: {
      userId: user.id,
      plan: plan as Plans,
      aiTokens: planConfig.aiTokens === -1 ? 999999 : planConfig.aiTokens,
      emailCredits: planConfig.emailsPerMonth,
      workspaceLimit: planConfig.workspaces,
      stripeSubscriptionId: subscription.id,
      currentPeriodEnd: new Date(subscription.current_period_end * 1000)
    } as any
  })
}

async function cancelUserSubscription(customerId: string) {
  const user = await prisma.user.findFirst({
    where: { stripeId: customerId }
  })
  
  if (!user) return
  
  await prisma.billings.update({
    where: { userId: user.id },
    data: {
      plan: 'FREE' as $Enums.Plans,
      aiTokens: 0,
      emailCredits: 0,
      workspaceLimit: 1,
      stripeSubscriptionId: null,
      currentPeriodEnd: new Date()
    } as any
  })
}
