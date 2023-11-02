'use client'

import Image from 'next/image'


import Carossel from "@/components/Carossel";
import Featured from "@/components/Featured";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";
import Cart from '@/components/Aboutus';
import Aboutus from '@/components/Aboutus';

export default function Home() {
  return (
    <main className=" h-[100%]  ">
      
        <Aboutus />
        <Carossel />
   
   
  
    </main>
  )
}
