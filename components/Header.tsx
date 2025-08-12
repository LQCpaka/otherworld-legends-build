"use client"

import Link from 'next/link'
import React from 'react'
import LogoMain from './LogoMain'
import { Separator } from './ui/separator'
import { CircleUserIcon } from 'lucide-react'
import { ThemeColorToggle } from './ThemeColorToggle'
import { SidebarTrigger } from './ui/sidebar'

const Header = () => {
  return (
    <section className='sticky top-0 z-50'>
      <header className='py-4 px-3 flex items-center justify-between gap-5 z-50  backdrop-blur-xs '>
        <div className='flex items-center'>
          <SidebarTrigger className='hover:bg-transparent transition-colors mr-5 p-2 size-svg' />
          <Link href='/'>
            <LogoMain />
          </Link>
        </div>

        <ul className='flex align-middle items-baseline justify-between'>
          <li className='flex flex-row justify-center items-center  gap-2'>
            <ThemeColorToggle />
            <Separator orientation='vertical' className='h-5 dark:bg-gray-800' />
            <Link href="/sign-in">
              <div className='md:p-2 p-2 flex items-center font-normal bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent text-dark transition-colors duration-300 border-[0.2px] rounded-xl  '>
                <CircleUserIcon className='mr-0  transition-colors duration-300 md:mr-2 text-sm' strokeWidth={1.2} />
                <p className='text-sm hidden transition-colors duration-300 md:block'>Đăng Nhập</p>
              </div>
            </Link>
          </li>
        </ul>
      </header>
      <Separator className='' />
    </section>
  )
}

export default Header
