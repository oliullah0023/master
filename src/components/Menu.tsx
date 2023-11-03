'use client'
import { links } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'



const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div className='flex justify-between items-center md:hidden m-2 '>
     <Image src='/logo.png' alt='logo' height={50} width={50} />

      
      <div className=' flex justify-between items-center'>
        {/* long way */}
        {/* {
          !open ? 

          (<Image src='/open.png' alt='' width={20} height={20} onClick={() => setOpen(true)} />) : (

          <Image src='/close.png' alt='' width={20} height={20} onClick={() => setOpen(false)} />) 
          } */}

          {/* shortcut */}
          <Image 
          src={open ? '/close.png' : '/open.png'} 
           alt=''
           width={30}
           height={30}
           onClick={()=> setOpen(!open)}
           className=' cursor-pointer'
          />

          {
            open && (
              <div className=' flex flex-col gap-8 items-center justify-center bg-red-500 w-full h-[calc(100vh-6rem)] absolute left-0 top-24  text-3xl text-white z-10'>
                {
                  links.map((link) =>  (
                    <Link href={link.url} key={link.id} onClick={() => setOpen(false)}>{link.title}</Link>
                  ))
                }
               
              </div>
            )
          }
     </div>
    </div>
  )
}

export default Menu
