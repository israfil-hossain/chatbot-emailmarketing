import BreadCrumb from '@/components/infobar/bread-crumb'
import SidebarNav from '@/components/sidebar/sidebar-nav'
import { sidebarSettingItems } from '@/navigation/sidebar/sidebar-setting-items'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const SettingLayout = ({children}: Props) => {
  return (
     <>
         <BreadCrumb />
            <div className='flex flex-1 flex-col space-y-2 overflow-hidden md:space-y-2 lg:flex-row lg:space-y-0 lg:space-x-12 pt-10'>
                <aside className='top-0 lg:sticky lg:w-1/5'>
                    <SidebarNav items={sidebarSettingItems} />
                </aside>
                <div className='flex w-full overflow-y-hidden p-1'>
                    {children}
                </div>
            </div>
           
        </>
  )
}

export default SettingLayout