import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Offer = () => {
  return (
    <div className=' bg-red-500 flex flex-col md:flex-row md:justify-between  justify-center items-center px-10 md:px-28 py-4 '>
    
     <div className=' cursor-pointer'>
      <h1 className=' text-white font-bold text-xl mb-1 mt-3'>Usefull Links</h1>
      
      <p>Publications</p>
      <p>Videos</p>
      <p>Vlogs</p>
      <p>Testimonials</p>
     </div>

     <div>
      <h1 className=' text-white font-bold text-xl mb-1 mt-3'>Contact</h1>
      <Link href='contact'>
      <p>Contact Us</p></Link>
      <Link href='contact' >
      <p>Fees</p></Link>
      <Link href='contact' >
      <p>Privacy policy</p></Link>
      <Link href='contact' >
      <p>Sitemap</p></Link>
      
     </div>

     <div>
      <h1 className=' text-white font-bold text-xl mb-1 mt-3'>Usefull Links</h1>
      <p>Franchise</p>
      <p>Feedback</p>
      <p>Rules and regulations</p>
      
     </div>
     
    </div>
  )
}

export default Offer
