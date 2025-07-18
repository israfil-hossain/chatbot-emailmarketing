import {
  Home,
  ChartPie,
  Grid2X2,
  ChartLine,
  ShoppingBag,
  BookA,
  Forklift,
  Mail,
  MessageSquare,
  Calendar,
  Kanban,
  HeartHandshake,
  ReceiptText,
  Users,
  Lock,
  Fingerprint,
  Cable,
  SquareArrowUpRight,
  Settings,
  type LucideIcon,
  CalendarDays,
  User,
  Palette,
  Bell,
} from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  img?: any
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  img?: any;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
}

export interface SidebarMenuItem {
  title: string; 
  url: string; 
  icon?:LucideIcon; 
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}


export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Dashboards",
    items: [
      {
        title: "Dashboards",
        url: "/dashboard",
        icon: Home,
        // subItems: [
        //   { title: "Default", url: `/dashboard`, icon: ChartPie },
        //    { title: "CRM", url: `/dashboard`, icon: Grid2X2, comingSoon: true },
        //   { title: "Analytics", url: `/dashboard/analytics`, icon: ChartLine, comingSoon: true },
        //   { title: "eCommerce", url: `/dashboard/e-commerce`, icon: ShoppingBag, comingSoon: true },
        //    { title: "Academy", url: `/dashboard/academy`, icon: BookA, comingSoon: true },
        //    { title: "Logistics", url: `/dashboard/logistics`, icon: Forklift, comingSoon: true },
        // ],
      },
    ],
  },
  {
    id: 2,
    label: "Pages",
    items: [

      {
        title: "Conversations",
        url: "/conversation",
        icon: MessageSquare,
        comingSoon: false,
      },
      {
        title: "Integrations",
        url: "/integrations",
        icon: Cable,
        comingSoon: false,
      },
      {
        title: "Settings",
        url: "/settings",
        icon: Settings,
        comingSoon: false,
      },
      {
        title: "Appointment",
        url: "/appointment",
        icon: CalendarDays,
        comingSoon: false,
      },
      {
        title: "Email Marketing",
        url: "/email-marketing",
        icon: Mail,
        comingSoon: false,
      },

    ],
  },
  {
    id: 3,
    label: "User Setting",
    items: [
      {
        title: "Users",
        url: "#",
        icon: Users,
        subItems: [
          {
            title: "Users",
            url: "/users",
            icon: Users,
            comingSoon: true,
          },
          {
            title: "Roles",
            url: "/roles",
            icon: Lock,
            comingSoon: true,
          },
          {
            title: "Auth",
            url: "/auth",
            icon: Fingerprint,
            comingSoon: true,
          },
          {
            title: "Others",
            url: "/others",
            icon: SquareArrowUpRight,
            comingSoon: true,
          },
        ],
      },
    ],
  },
];

export const sidebarNavItems: SidebarMenuItem[] = [
  {
    title: "Profile",
    icon: User,
    url: "/settings",
  },
  {
    title: "Appearance",
    icon: Palette,
    url: "/settings/appearance",
  },
  {
    title: "Notifications",
    icon: Bell,
    url: "/settings/notifications",
  },
];
