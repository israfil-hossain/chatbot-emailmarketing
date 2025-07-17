import {
    IconBell,
  IconCreditCard,
  IconKey,
  IconPalette,
  IconUser,
} from '@tabler/icons-react'


export const sidebarSettingItems = [
  {
    title: 'Account',
    icon: <IconUser size={18} />,
    href: '/settings',
  },
  {
    title: 'Change Password',
    icon: <IconKey size={18} />,
    href: '/settings/change-password',
  },
  {
    title: 'Appearance',
    icon: <IconPalette size={18} />,
    href: '/settings/appreance',
  },
  {
    title: 'Notifications',
    icon: <IconBell size={18} />,
    href: '/settings/notifications',
  },
  {
    title: 'Billing',
    icon: <IconCreditCard size={18} />,
    href: '/settings/billing',
  },
]