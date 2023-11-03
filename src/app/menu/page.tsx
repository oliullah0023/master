'use client'

import { menu } from "@/constants"
import Image from "next/image"
import Link from "next/link"



const MenuPage = () => {
  return (
   <div className="  lg:px-20 xl:px-40 h-[calc(100vh-6rem)] flex flex-col md:flex-row  items-center overflow-hidden md:mx-36 md:mb-8 md:mt-0 mx-6">
    <div className=" ">
    <Image src='/resource1.jpg' alt="" width={1100} height={500} />
    </div>
   </div>
  )
}

export default MenuPage
