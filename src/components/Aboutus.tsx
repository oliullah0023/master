'use client'

import Image from "next/image"

const Aboutus = () => {
  return (
    <div className="  my-6  mx-6 md:mx-36 overflow-hidden ">

      <div className=" flex  justify-center">
       
      </div>
      <div className=' gap-2 '>
      <h1 className=" absolute text-4xl  font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center top-50 items-center flex md:text-8xl">Master Academy</h1>
        <Image src='/group1.jpg' alt="" width={1550} height={500} />

       </div>
       <div className=" flex flex-col md:flex-row md:justify-between gap-6">
       <div className=" my-5">
        <div>
          
        <h1 className=" text-amber-700 text-2xl font-bold border-l-4  border-spacing-4 border-amber-700"> Our Goal</h1>
        </div>

        <p className=" mt-3">Master Academy&apos;s aims at transforming lives by offering the right education and career guidance for students with help of a capable team of professional consultants. We offer students an opportunity to identify the right universities thereby facilitating their lifelong learning. We aim to enable students to achieve their dreams and reach their potential through unparalleled academic excellence. In addition to that, we also want to play our active roles in contributing to our society. We aim to be the epitome of social awareness by making sure that our students can go abroad and contribute to their own community. Even when they come back, they expedite the process of socio-economic development of our very own society. Be it the active contribution to the country’s own GDP or the flow of remittance in the country, we make sure that we can have a sustainable impact on the society and give back to the community that we represent and are proud of being a part of. We aspire to be the high-esteemed hallmark of honesty, courage and fair play along with the teamwork of our people and our ability to respond effectively to the positive and productive changes taking place in all aspects of life including communication, skills, technology and environment.</p>
       </div>


       <div className=" my-5">
        <h1 className=" text-amber-700 text-2xl font-bold border-l-4  border-amber-700">About Us</h1>

        <p className=" mt-3">Master Academy&apos;s aims at transforming lives by offering the right education and career guidance for students with help of a capable team of professional consultants. We offer students an opportunity to identify the right universities thereby facilitating their lifelong learning. We aim to enable students to achieve their dreams and reach their potential through unparalleled academic excellence. In addition to that, we also want to play our active roles in contributing to our society. We aim to be the epitome of social awareness by making sure that our students can go abroad and contribute to their own community. Even when they come back, they expedite the process of socio-economic development of our very own society. Be it the active contribution to the country’s own GDP or the flow of remittance in the country, we make sure that we can have a sustainable impact on the society and give back to the community that we represent and are proud of being a part of. We aspire to be the high-esteemed hallmark of honesty, courage and fair play along with the teamwork of our people and our ability to respond effectively to the positive and productive changes taking place in all aspects of life including communication, skills, technology and environment.</p>
       </div>
       
       </div>
    </div>
  )
}

export default Aboutus
