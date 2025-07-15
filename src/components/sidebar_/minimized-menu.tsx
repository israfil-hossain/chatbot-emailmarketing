import { SIDE_BAR_MENU } from '@/constants/menu'
import { MenuLogo } from '@/icons/menu-logo'
import React from 'react'
import MenuItem from './menu-item'
import DomainMenu from './domain-menu'
import { LogOutIcon,  MonitorSmartphone } from 'lucide-react'

type Props = {
    onShrink(): void
    current: string
    onSignOut(): void
    domains:
    | {
        id: string
        name: string
        icon: string | null
    }[]
    | null
    | undefined
}

const MinMenu = ({onShrink,current,onSignOut,domains}: Props) => {
  return (
    <div className='py-3 px-4 flex flex-col items-center h-full'>
        <span className='animate-fade-in  delay-300  cursor-pointer'>
            <MenuLogo onClick={onShrink} />
        </span>
        
        <div className='animate-fade-in  delay-300 fill-mode-forwards flex flex-col justify-between h-full pt-10'>
            <div className='flex flex-col items-center'>
                {
                    SIDE_BAR_MENU.map((menu,key)=> (
                        <MenuItem 
                          size="min"
                          {...menu} 
                          key={key}
                          current={current} 
                        />
                    ))
                }
                <DomainMenu domains={domains} />
            </div>
            <div className='flex flex-col'>
                <MenuItem
                    size="min"
                    label='Sign Out'
                    icon={<LogOutIcon />}
                    onSignOut={onSignOut}
                />
                <MenuItem
                    size="min"
                    label='Mobile App'
                    icon={<MonitorSmartphone />} 
                />
            </div>
        </div>
    </div>
  )
}

export default MinMenu; 