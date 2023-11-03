import Price from '@/components/Price'
import { singleProduct } from '@/constants'
import Image from 'next/image'
import React from 'react'

const SingleProduct = () => {
  return (
    <div className=' p-4 md:p-12 h-screen flex flex-col justify-around text-red-500 md:flex-row md:items-center '>
     {
      singleProduct.img &&(
        <div className=' relative w-full h-1/2 md:h-[70%]'>
          <Image src={singleProduct.img} 
           alt=''
           fill
           className=' object-contain'
          />

        </div>

        
      )
     }
          <div className=' flex flex-col gap-4 md:h-[70%] md:justify-center  md:gap-6 xl:gap-8'>
            <h1 className=' text-2xl font-bold'>{singleProduct.title}</h1>
            <p>{singleProduct.desc}</p>
            <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options} />
          </div>
    </div>
  )
}

export default SingleProduct
