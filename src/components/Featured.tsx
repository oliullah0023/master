'use client'
import { featuredProducts } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className=' w-screen m-8 md:my-24 lg:my-36  overflow-x-scroll text-red-500'>
      {/* wrapper */}
      <div className=' w-max flex'>
        {
          featuredProducts.map((item)=> (
            <div key={item.id} 
            className=' w-screen flex flex-col items-center justify-around h-[60vh] cursor-pointer p-6 hover:bg-fuchsia-50 transition-all duration-300  md:w-[50vw] xl:w-[33vw] xl:h-[90vh]   '
             
             >
              {/* image container */}
              {item.img &&(
              <div className=' relative flex-1 w-full  hover:rotate-[60deg] transition-all duration-300 '>
                <Image src={item.img} alt='' fill  className=' object-contain'/>
              </div>)}

              {/* text container */}

              <div className=' flex-1 flex flex-col'>
                <h1 className=' text-xl font-bold uppercase xl:text-2xl'>{item.title} </h1>
                <p className=' p-4 xl:p-8'>{item.desc} </p>
                <span className=' text-xl font-bold'>${item.price}</span>
                <button className="bg-red-500 text-white p-1 w-28 mt-8 rounded-md object-contain">
                Add to Cart
              </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Featured
