import { onLoginUser } from '@/actions/auth';
import SideBar from '@/components/sidebar';
import { ChatProvider } from '@/context/user-chat-context';
import React from 'react'

type Props = {
    children: React.ReactNode; 
}

const OwnerLayout = async (props: Props) => {
  const authenticated = await onLoginUser()
  if (!authenticated) return null; 
  return (
   <ChatProvider>
    <div className="flex h-screen w-full">
      <SideBar />
    </div>
   </ChatProvider>
  )
}

export default OwnerLayout