'use state'
import React, { useEffect, useState } from 'react'
import Image from "next/image";


const data = [
  {
    id:1,
    title:"always fresh & always crispy & always hot",
    image:'/slide1.png'
  },

  {
    id:2,
    title:"the best pizza to share with your family",
    image:'/slide2.png'
  },

  {
    id:3,
    title:"we deliver your order wherever you are in NY",
    image:'/slide3.jpg'
  },
];

const Slider = () => {

  const [currentSlide, setCurrentSlide]= useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev ===data.length -1 ? 0 : prev+1))
    },2000);
    return () => clearInterval(interval)
  },[]);

  return (
    <div className=' flex flex-col md:flex-row gap-8 md:m-24 m-8'>
      {/* text container */}
      <div className=' flex-1 flex flex-col justify-center items-center '>
         <h1 className=' text-3xl font-bold leading-10 text-red-500 uppercase mb-8'>{data[currentSlide].title}</h1>
         <button className=' bg-red-500 text-white p-3 font-semibold'>Order Now</button>
      </div>
      {/* Image container */}
      <div className=' flex-1'>
        <Image
         src={data[currentSlide].image}
         alt=''
         height={500}
         width={500}
         className=' object-cover'
        />
      </div>
    </div>
  )
}

export default Slider
