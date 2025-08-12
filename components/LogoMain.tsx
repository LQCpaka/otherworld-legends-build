import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const LogoMain =
  ({ width, height }:
    { width?: number, height?: number, isWhite?: boolean, className?: string }) => {
    return (
      <Image src="/logo_en.png" alt='logo' height={width ? width : 100} width={height ? height : 100} />
    )
  }

export default LogoMain
