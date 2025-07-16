import { onLoginUser } from "@/actions/auth";
import AccountSwitcher from "@/components/sidebar/account-switcher";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import LayoutControls from "@/components/sidebar/layout-controls";
import ThemeSwitcher from "@/components/sidebar/theme-switcher";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { users } from "@/constants/users";

import { ChatProvider } from "@/context/user-chat-context";
import { getSidebarCollapsible, getSidebarVariant } from "@/lib/layout-preferences";
import { cookies } from "next/headers";
import React, { ReactNode } from "react";


export default async function OwnerLayout({ children }: Readonly<{ children: ReactNode }>) {
  const authenticated = await onLoginUser();
  if (!authenticated) return null;

  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  const sidebarVariant = await getSidebarVariant();
  const sidebarCollapsible = await getSidebarCollapsible();


  return (
    <ChatProvider>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar variant={sidebarVariant} collapsible={sidebarCollapsible} domains={authenticated?.domain}/>
        <SidebarInset>
          <header className="flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex w-full items-center justify-between px-4 lg:px-6">
              <div className="flex items-center gap-1 lg:gap-2">
                <SidebarTrigger className="-ml-1" />
                <Separator
                  orientation="vertical"
                  className="mx-2 data-[orientation=vertical]:h-4"
                />
               
              </div>
              <div className="flex items-center gap-2">
                <LayoutControls
                  variant={sidebarVariant}
                  collapsible={sidebarCollapsible}
                />
                <ThemeSwitcher />
                <AccountSwitcher users={users} />
              </div>
            </div>
          </header>
          <div className="h-screen w-full flex flex-col py-3 pr-10 pl-20 md:px-10">
          {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ChatProvider>
  );
};
