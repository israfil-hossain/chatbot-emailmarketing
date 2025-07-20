export const dynamic = "force-dynamic"

import { onGetCurrentDomainInfo } from '@/actions/settings'
import DomainSettingPage from '@/feature/settings/domain-setting'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
  params: { domain: string }
}

const Page = async ({ params }: Props) => {
  const domain = await onGetCurrentDomainInfo(params?.domain)
  if (!domain) redirect('/dashboard')
  return (
    <DomainSettingPage domain={domain} />
  )
}

export default Page