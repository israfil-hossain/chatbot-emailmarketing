import SettingsForm from '@/components/forms/settings';
import InfoBar from '@/components/global/infobar'
import React from 'react'


type Props = {
  domain: any; 
}

const DomainSettingPage = ({domain}: Props) => {
  
  return (
   <>   
    <InfoBar />
    <div className='overflow-y-auto w-full chat-window flex-1 h-0'>
      <SettingsForm 
        plan={domain?.subscription?.plan} 
        chatBot = {domain?.domains[0]?.chatBot}
        id={domain?.domains[0]?.id} 
        name={domain?.domins[0]?.name} 
        />
    </div>
   </>
  )
}

export default DomainSettingPage