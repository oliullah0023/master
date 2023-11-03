import Link from 'next/link'
import {FaFacebookF,FaInstagram,FaLinkedinIn} from 'react-icons/fa'
import {RiTwitterXLine} from 'react-icons/ri'
import Offer from './Offer'

const Footer = () => {
  return (

    <footer className=' '>
      <Offer />
    <div className=' bg-black p-8 flex justify-between items-center px-10 md:px-28'>
      <div className=' text-white'>
        <h5>Copyrights &#169; 2014-2023 All rights reserved by <span className=' text-red-600 font-bold'>Master Academy</span></h5>
      </div>
      <div className=' flex gap-2'>
      <div className=' text-white bg-red-500 rounded-full p-2'>
        <Link href='https://www.facebook.com/masteracademybd?mibextid=ZbWKwL'>
       <FaFacebookF />
       </Link>
       </div>

       <div className=' text-white bg-red-500 rounded-full p-2'>
        <Link href='https://www.facebook.com/masteracademybd?mibextid=ZbWKwL'>
       <RiTwitterXLine />
       </Link>
       </div>

       <div className=' text-white bg-red-500 rounded-full p-2'>
        <Link href='https://www.facebook.com/masteracademybd?mibextid=ZbWKwL'>
       <FaInstagram />
       </Link>
       </div>

       <div className=' text-white bg-red-500 rounded-full p-2'>
        <Link href='https://www.facebook.com/masteracademybd?mibextid=ZbWKwL'>
       <FaLinkedinIn />
       </Link>
       </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer
