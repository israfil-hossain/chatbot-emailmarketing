import React from 'react'
import BreadCrumb from './bread-crumb'
import { Card } from '../../ui/card'
import { Headphones, Star, Trash } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar'

type Props = {}

const InfoBar = (props: Props) => {
  return (
    <div className='flex w-full justify-between items-center py-1 mb-8 px-5'>
        <BreadCrumb />
        <div className='flex gap-3 items-center'>
            <div>
                <Card className='rounded-xl flex flex-row  gap-3 py-3 px-4 text-ghost'>
                    <Trash /> 
                    <Star />
                </Card>
            </div>
            {/* <Avatar>
                <AvatarFallback className='bg-primary text-white'>
                    <Headphones />
                </AvatarFallback>
            </Avatar> */}
          
        </div>
    </div>
  )
}

export default InfoBar