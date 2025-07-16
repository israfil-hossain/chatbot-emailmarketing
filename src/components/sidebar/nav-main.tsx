"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { PlusCircleIcon, MailIcon, ChevronRight, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { type NavGroup, type NavMainItem } from "@/navigation/sidebar/sidebar-items";
import AppDrawer from "../drawer";
import { Loader } from "../loader";
import { useDomain } from "@/hooks/sidebar/use-domain";
import FormGenerator from "../forms/form-generator";
import UploadButton from "../upload-button";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface NavMainProps {
  readonly items: readonly NavGroup[];
  domains:
  | {
    id: string;
    name: string;
    icon: string;
  }[]
  | null
  | undefined;
}

const IsComingSoon = () => (
  <span className="ml-auto rounded-md bg-gray-200 px-2 py-1 text-xs dark:text-gray-800">Soon</span>
);

const NavItemExpanded = ({
  item,
  isActive,
  isSubmenuOpen,
}: {
  item: NavMainItem;
  isActive: (url: string, subItems?: NavMainItem["subItems"]) => boolean;
  isSubmenuOpen: (subItems?: NavMainItem["subItems"]) => boolean;
}) => {
  return (
    <Collapsible key={item.title} asChild defaultOpen={isSubmenuOpen(item.subItems)} className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          {item.subItems ? (
            <SidebarMenuButton
              disabled={item.comingSoon}
              isActive={isActive(item.url, item.subItems)}
              tooltip={item.title}
            >
              {item.img &&
                <Image
                  src={item.img}
                  alt="logo"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
}
              {
                item.icon && <item.icon />
              }
              <span>{item.title}</span>
              {item.comingSoon && <IsComingSoon />}
              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          ) : (
            <SidebarMenuButton
              asChild
              aria-disabled={item.comingSoon}
              isActive={isActive(item.url)}
              tooltip={item.title}
            >
              <Link href={item.url}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
                {item.comingSoon && <IsComingSoon />}
              </Link>
            </SidebarMenuButton>
          )}
        </CollapsibleTrigger>
        {item.subItems && (
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.subItems.map((subItem) => (
                <SidebarMenuSubItem key={subItem.title}>
                  <SidebarMenuSubButton aria-disabled={subItem.comingSoon} isActive={isActive(subItem.url)} asChild>
                    <Link href={subItem.url}>
                      {subItem.icon && <subItem.icon />}
                      <span>{subItem.title}</span>
                      {subItem.comingSoon && <IsComingSoon />}
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        )}
      </SidebarMenuItem>
    </Collapsible>
  );
};

const NavItemCollapsed = ({
  item,
  isActive,
}: {
  item: NavMainItem;
  isActive: (url: string, subItems?: NavMainItem["subItems"]) => boolean;
}) => {
  return (
    <SidebarMenuItem key={item.title}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton
            disabled={item.comingSoon}
            tooltip={item.title}
            isActive={isActive(item.url, item.subItems)}
          >
            {item.title.includes(".") ? (
              <Image
                src={item.img}
                alt="logo"
                width={20}
                height={20}
                className="rounded-full"
              />
            ) : (
              item.icon && <item.icon />
            )}

            <span>{item.title}</span>
            <ChevronRight />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-50 space-y-1" side="right" align="start">
          {item.subItems?.map((subItem) => (
            <DropdownMenuItem key={subItem.title} asChild>
              <SidebarMenuSubButton
                key={subItem.title}
                asChild
                className="focus-visible:ring-0"
                aria-disabled={subItem.comingSoon}
                isActive={isActive(subItem.url)}
              >
                <Link href={subItem.url}>
                  {subItem.icon && <subItem.icon className="[&>svg]:text-sidebar-foreground" />}
                  <span>{subItem.title}</span>
                  {subItem.comingSoon && <IsComingSoon />}
                </Link>
              </SidebarMenuSubButton>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  );
};

export function NavMain({ items, domains }: NavMainProps) {
  const path = usePathname();
  const { state, isMobile } = useSidebar();

  const isItemActive = (url: string, subItems?: NavMainItem["subItems"]) => {
    if (subItems?.length) {
      return subItems.some((sub) => path.startsWith(sub.url));
    }
    return path === url;
  };

  const isSubmenuOpen = (subItems?: NavMainItem["subItems"]) => {
    return subItems?.some((sub) => path.startsWith(sub.url)) ?? false;
  };

  const { register, onAddDomain, loading, errors, isDomain, setValue } = useDomain();

  const domainItems: NavMainItem[] = (domains || []).map((domain) => ({
    title: domain.name,
    url: `/settings/${domain.name.split('.')[0]}`,
    img: domain.icon
  }))

  return (
    <>

      {items.map((group) => (
        <SidebarGroup key={group.id}>
          {group.label && <SidebarGroupLabel>{group.label}</SidebarGroupLabel>}
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
              {group.items.map((item) =>
                state === "collapsed" && !isMobile ? (
                  <NavItemCollapsed key={item.title} item={item} isActive={isItemActive} />
                ) : (
                  <NavItemExpanded key={item.title} item={item} isActive={isItemActive} isSubmenuOpen={isSubmenuOpen} />
                ),
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
      <SidebarGroup>
        <SidebarGroupContent className="flex flex-col gap-2">
          <SidebarMenu>
            <SidebarMenuItem className="flex items-center gap-2">
              <SidebarMenuButton
                tooltip="Create Domain"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
              >
                <AppDrawer description='add in your do main address to integrate your chatbot' title="Add your business domain"
                  onOpen={<div className='flex justify-between w-full items-center space-x-5 cursor-pointer '>
                    <PlusCircleIcon />
                    <span>Add Domain</span>
                  </div>
                  }>
                  <Loader loading={loading}>
                    <form className='mt-3 w-6/12 flex flex-col gap-3 '
                      onSubmit={onAddDomain}
                    >
                      <FormGenerator
                        inputType="input"
                        register={register}
                        label="Domain"
                        name='domain'
                        errors={errors}
                        placeholder="mydomain.com"
                        type="text"
                      />
                      <UploadButton
                        register={register}
                        label="Upload Icon"
                        errors={errors}
                        setValue={setValue}
                      />
                      <Button type="submit" className="w-full">
                        Add Domain
                      </Button>
                    </form>
                  </Loader>
                </AppDrawer>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      {domainItems.length > 0 && (
        <SidebarGroup>
          <SidebarGroupLabel>My Domains</SidebarGroupLabel>
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
              {domainItems.map((item) =>
                state === "collapsed" && !isMobile ? (
                  <NavItemCollapsed key={item.title} item={item} isActive={isItemActive} />
                ) : (
                  <NavItemExpanded key={item.title} item={item} isActive={isItemActive} isSubmenuOpen={isSubmenuOpen} />
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      )}

    </>
  );
}
