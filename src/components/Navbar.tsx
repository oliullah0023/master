import Link from 'next/link'
import React from 'react'

import Menu from './Menu'

import Image from 'next/image'
import { links } from '@/constants'


const Navbar = () => {
  const user = false;
  return (
    <nav className=' '>
    <div className=' hidden w-full h-12 md:flex justify-between items-center lg:px-32 md:px-20 border-b-[1px] border-red-500 '>
    <div>
       <Image src='/logo.png' alt='logo' width={60} height={40} />
      </div>
      <div className=' md:flex md:gap-4 uppercase'>
       {
        links.map((link) => (
          <Link href={link.url} key={link.id} >{link.title}</Link>
        ))
       }
      </div>
      
     
    </div>
    <Menu />
    </nav>
  )
}

export default Navbar
