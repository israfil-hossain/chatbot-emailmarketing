import { onGetCurrentDomainInfo } from '@/actions/settings'
import DomainSettingPage from '@/feature/settings/domain-setting'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
  params: { domain: string }
}

const Page = async ({ params }: Props) => {
  const { domain } = await params
  const domainInfo = await onGetCurrentDomainInfo(domain)
  console.log("domain infro ", domainInfo); 
  if (!domainInfo) redirect('/dashboard')
  return (
    <DomainSettingPage domain={domainInfo} />
  )
}


export default Page
