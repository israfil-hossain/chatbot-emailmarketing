'use client';
import useChatSidebar from '@/context/use-chat-sidebar';
import React from 'react'
import { Loader } from '../../loader';
import { Switch } from '../../ui/switch';

type Props = {}

const BreadCrumb = (props: Props) => {
  const { chatRoom, loading, onActivateRealtime, page, onSignOut, realtime } = useChatSidebar()
  return (
    <div className='flex flex-col'>
      <div className='flex gap-5 items-center'>
        <h2 className='text-3xl font-bold capitalize'>
          {page}
        </h2>
        {page === 'conversation' && chatRoom && <Loader loading={loading} className="p-0" >
          <Switch
            defaultChecked={realtime} 
            onClick={(e)=> onActivateRealtime(e)}
            className='data-[state=checked]:bg-primary data-[state=unchecked]:bg-peach'
            />
        </Loader>
        }
      </div>
      <p className='text-gray-500 text-sm'>
        {
          page == 'settings' 
          ? 'Manage your account settings, preferrences and integrations'
          : page == 'integrations' 
          ? "Here's a list of your apps for the integration!"
          : page == "change-password"
          ? 'Reset Your Password'
          : page == 'account'
          ? 'Update your Account Information'
          : page == 'dashboard' 
          ? 'A detailed overview of your metrics, usage, customers and more' 
          : page == 'appointment' 
          ? 'View and edit all your appointments' 
          : page == 'email-marketing' 
          ? 'Send buil emails to your customers'
          : page == "integration" 
          ? 'Connect third-party applications into Flowen-AI'
          : 'Modify domain Settings, Change Chatbot options, enter sales questions and train your bot to do what you want it to.'
        }
      </p>
    </div>
  )
}

export default BreadCrumb