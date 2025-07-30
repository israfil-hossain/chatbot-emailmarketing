import { client } from './prisma'

export async function checkAITokens(userId: string, requiredTokens: number) {
  const billing = await client.billings.findUnique({
    where: { userId }
  })

  if (!billing) return false

  // Only Enterprise has unlimited tokens now
  if ((billing.plan as string) === 'ENTERPRISE') {
    return true
  }

  // Use bracket notation to access the property for now
  return (billing as any).aiTokens >= requiredTokens
}

export async function consumeAITokens(
  userId: string,
  tokens: number,
  type: string
) {
  const billing = await client.billings.findUnique({
    where: { userId }
  })

  if (!billing) throw new Error('No billing record found')

  // Skip token consumption only for Enterprise
  if ((billing.plan as string) === 'ENTERPRISE') {
    await (client as any).aIUsage.create({
      data: { userId, tokens, type }
    })
    return
  }

  if ((billing as any).aiTokens < tokens) {
    throw new Error('Insufficient AI tokens')
  }

  await client.$transaction([
    client.billings.update({
      where: { userId },
      data: { aiTokens: { decrement: tokens } } as any
    }),
    (client as any).aIUsage.create({
      data: { userId, tokens, type }
    })
  ])
}

// New function for purchasing additional tokens
export async function purchaseTokens(userId: string, tokenAmount: number) {
  const billing = await client.billings.findUnique({
    where: { userId }
  })

  if (!billing) throw new Error('No billing record found')

  await client.billings.update({
    where: { userId },
    data: { aiTokens: { increment: tokenAmount } } as any
  })
}
