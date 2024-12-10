import Image from 'next/image'
import React from 'react'

const Bg = () => {
  return (
    <div className='relative bg-slate-500'>
      <div className='bg-gradient-to-tr from-green-950 w-full h-96 relative'>
        <Image src={'/image.jpg'} width={500} height={200} alt='bgImage' className='object-cover w-full h-full absolute mix-blend-overlay' />
        <div className='p-24'>
          <h1 className='text-3xl lg:text-6xl text-white'>find your <span className='text-green-400'>dream home</span> for your family</h1>
          <h2 className='text-white mt-6 md:text-2xl'>Rent or buy from us at the comfort of your means</h2>
        </div>
      </div>
    </div>
  )
}

export default Bg