export const PRICING_PLANS = {
  FREE: {
    name: 'Free',
    price: 0,
    workspaces: 1,
    emailsPerMonth: 10,
    aiTokens: 20,
    socialPosts: 0,
    features: [
      '1 workspace',
      '10 emails/month', 
      '20 AI tokens',
      'No social integration'
    ],
    stripeId: null
  },
  STARTER: {
    name: 'Starter',
    price: 67,
    workspaces: 3,
    emailsPerMonth: 500,
    aiTokens: 100,
    socialPosts: 15,
    features: [
      '3 workspaces',
      '500 emails/month',
      'AI chatbot',
      '100 AI tokens',
      'Schedule 15 social posts'
    ],
    stripeId: 'price_starter_monthly'
  },
  PRO: {
    name: 'Pro', 
    price: 169,
    workspaces: 5,
    emailsPerMonth: 2200,
    aiTokens: 300,
    socialPosts: -1, // unlimited
    features: [
      '5 workspaces',
      '2,200 emails/month',
      '300 AI tokens',
      'Full chatbot',
      'All social media integration'
    ],
    stripeId: 'price_pro_monthly'
  },
  ENTERPRISE: {
    name: 'Enterprise',
    price: 'Custom',
    workspaces: -1, // unlimited
    emailsPerMonth: -1,
    aiTokens: -1,
    socialPosts: -1,
    features: [
      'Unlimited everything',
      'Dedicated support',
      'Team collaboration',
      'CRM integration',
      'Manual upgrade required'
    ],
    stripeId: 'price_enterprise_monthly'
  }
}

// Token pricing for additional purchases
export const TOKEN_PRICING = {
  pricePerTenTokens: 5, // $5 for 10 tokens
  minimumPurchase: 10,
  maximumPurchase: 1000
}
