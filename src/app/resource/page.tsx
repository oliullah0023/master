import React from 'react'

const Resource = () => {
  return (
    <div className='  md:px-36 py-16 gap-4 w-full flex flex-col justify-center items-center text-center overflow-hidden'>
    <div className=' flex gap-2 mb-4 '>
      <h2 className=' font-bold'>Username or Email:</h2>
      <input type="text" name='name' className=' border border-gray-400 p-1' />
    </div>
    <div className=' flex gap-20 mb-4 '>
      <h2 className=' font-bold'>Password:</h2>
      <input type="text" name='name' className=' border border-gray-400 p-1' />
    </div>
    <div className=' flex gap-16  max-w-2xl'>
      <h2 className=' font-bold'>Comments:</h2>
      <input type="text" name='name' className=' border border-gray-400 p-1' />
    </div>
    <button className=' bg-red-500 hover:bg-slate-400 text-white p-3 mt-5 text-center rounded-md'>Submit</button>
    </div>
  )
}

export default Resource
