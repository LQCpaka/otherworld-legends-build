"use client"
import React from 'react'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar'
import { User, LogOut } from "lucide-react"
import LogoMain from './LogoMain'
import { Separator } from './ui/separator'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { USER_DASHBOARD_NAVIGATION, USER_NAVIGATION } from '@/constants'

const SidebarMain = () => {
  const pathName = usePathname();
  const route = useRouter();

  const { setOpenMobile } = useSidebar();
  return (
    <section >
      <Sidebar className='z-[60] bg-[url(/bg.png)]! border-zero' >
        <SidebarHeader className='ml-5 mx-auto my-3 flex flex-row items-center text-base'>
          {/* <SidebarTrigger className='size-svg mr-4' /> */}
          <LogoMain width={150} height={150} />
        </SidebarHeader>
        <Separator className='w-[80%]  mt-1 mx-auto' />
        <SidebarContent className='mt-3 size-svg flex flex-col justify-between'>


          <SidebarGroup>
            <SidebarGroupContent >
              <SidebarGroupLabel className='mx-5 mb-4 border rounded-[10px] bg-gray-300 dark:bg-[#333336] px-6 text-center flex justify-center text-primary text-base font-[400]'>
                Điều hướng
              </SidebarGroupLabel>
              <SidebarMenu>

                {USER_NAVIGATION.map((item) => {
                  const isSelected = pathName === item.url;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild className={cn('', isSelected && 'bg-gray-200 dark:bg-[#333336] rounded-md')}>
                        <Link href={item.url} onClick={() => setOpenMobile(false)} >
                          <item.icon className='size-svg text-gray-400 ml-5 mr-4' />
                          <span className="text-base font-[400]">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
            <SidebarGroupContent className='mt-4'>
              <SidebarGroupLabel className='mx-5 mb-4 border rounded-[10px] bg-gray-300 dark:bg-[#333336] px-6 text-center flex justify-center text-primary text-base font-[400]'>
                Uploader
              </SidebarGroupLabel>
              <SidebarMenu>

                {USER_DASHBOARD_NAVIGATION.map((item) => {
                  const isSelected = pathName === item.url;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild className={cn('', isSelected && 'bg-gray-200 dark:bg-[#333336] rounded-md')}>
                        <Link href={item.url} onClick={() => setOpenMobile(false)}>
                          <item.icon className='size-svg text-gray-400 ml-5 mr-4' />
                          <span className="text-base font-[400]">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}

              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <Separator className='w-[80%] mx-auto' />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>

                <div className='flex items-center cursor-pointer rounded-[5px] p-1 my-1 hover:bg-gray-300 dark:hover:dark:bg-[#333336] transition'>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>LQ</AvatarFallback>
                  </Avatar>
                  <div className='ml-3'>
                    <p className='text-xl font-semibold'>Lê Quốc Cần</p>
                    <p className='text-sm font-normal'>Moder</p>
                  </div>
                </div>

              </DropdownMenuTrigger>
              <DropdownMenuContent side='top' className='md:w-60 w-64 z-[99]'>
                <DropdownMenuLabel>Tài Khoản</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem
                    className='flex gap-1 cursor-pointer'
                    onClick={() => route.push('/profile/[id]')}
                  ><User />Hồ sơ</DropdownMenuItem>
                  <DropdownMenuItem
                    className='flex gap-1 cursor-pointer'
                  ><LogOut />Đăng Xuất</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>

            </DropdownMenu>
          </SidebarGroup>
        </SidebarContent>

      </Sidebar>
    </section>
  )
}

export default SidebarMain

