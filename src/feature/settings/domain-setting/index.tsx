import SettingsForm from '@/components/forms/settings';
import BotTraningForm from '@/components/forms/settings/bot-training';
import InfoBar from '@/components/global/infobar'
import React from 'react'


type Props = {
  domain: any; 
}

const DomainSettingPage = ({domain}: Props) => {
  
  return (
   <>   
    <InfoBar />
    <div className='overflow-y-auto w-full chat-window flex-1 h-0  px-5'>
      <SettingsForm 
        plan={domain?.subscription?.plan} 
        chatBot = {domain?.domains[0]?.chatBot}
        id={domain?.domains[0]?.id} 
        name={domain?.domains[0]?.name}
        />
        <BotTraningForm id={domain.domains[0].id}/>
    </div>
   </>
  )
}

export default DomainSettingPage
