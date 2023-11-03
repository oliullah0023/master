'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import {BiArrowBack} from 'react-icons/bi'

const Carossel = () => {
  return (
    <div className='  relative text-white text-[20px] my-12 w-full max-w-[1360px] mx-auto overflow-hidden md:my-20 '>
    <Carousel
       autoPlay={true}
       infiniteLoop={true}
       showStatus={false}
       showIndicators={false}
       showThumbs={false}
       interval={5000}
       renderArrowPrev={(clickHandler, hasPrev) => (
        <div
         onClick={clickHandler}
         className=' absolute bottom-40 z-10 bg-black p-2 right-[31px] md:right-[52px] w-[30px] md:w-[50px] h-[30px] md:h-[50px] hover:opacity-80 flex justify-center items-center'
        >
         <BiArrowBack className="text-sm md:text-lg" />
        </div>
       )}

       renderArrowNext={(clickHandler, hasPrev) => (
        <div
         onClick={clickHandler}
         className=' absolute bottom-40 z-10 bg-black p-2 right-0 md:w-[50px] h-[30px] md:h-[50px] hover:opacity-80 flex justify-center items-center'
        >
         <BiArrowBack className=" rotate-180 text-sm md:text-lg" />
        </div>
       )}
    >
         <div className=' '>
         <Image
      src="/roaming.jpg"
      width={500}
      height={600}
      alt="Picture of the author"
      className=' aspect-[16/10] md:aspect-auto object-cover'
    />
   
    
    </div>
    <div className=' '>
         <Image
      src="/pic1.jpg"
      width={500}
      height={50}
      alt="Picture of the author"
      className=' aspect-[16/10] md:aspect-auto object-cover'
    />
   
    
    </div>
    <div className=' '>
         <Image
      src="/center.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
      className=' aspect-[16/10] md:aspect-auto object-cover'
    />

    
    </div>
    <div className=' '>
         <Image
      src="/vsign.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
      className=' aspect-[16/10] md:aspect-auto object-cover'
    />

    
    </div>
                      
    </Carousel>
    </div>
  )
}

export default Carossel
