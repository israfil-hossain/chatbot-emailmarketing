import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type Props = {
    size:'max' | 'min' 
    label: string 
    icon: JSX.Element 
    path?: string 
    current?: string
    onSignOut?(): void
}

const MenuItem = ({size,label,icon,path,current,onSignOut}: Props) => {
    switch (size) {
        case 'max':
            return (
                <Link
                onClick={onSignOut} 
                className={cn('flex items-center gap-2 px-1 py-2 rounded-lg my-1',
                    !current ? 'text-gray-500 hover:bg-gray-100'
                    : current == path 
                    ? 'bg-cream font-bold text-black' 
                    : 'text-gray-500'
                )}
                href={path ? `/${path}` : '#'}
                > 
                 {icon} {label}
                </Link>
            )
        case 'min':
            return (
                <Link
                onClick={onSignOut} 
                className={cn('flex items-center justify-center w-full h-full py-2 px-4',
                    !current ? 'text-gray-500 hover:bg-gray-100'
                    : current == path 
                    ? 'bg-white font-bold text-black' 
                    : 'text-gray-500'
                )}
                href={path ? `/${path}` : '#'}
                >
                 {icon}
                </Link> 
            )
        default:
            return null;    
    }
}

export default MenuItem