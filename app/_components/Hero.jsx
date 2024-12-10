import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex gap-5 justify-center flex-wrap'>
        <div>
            <h2 className='py-2'>Flats</h2>
            <Image src={'/thaba-apartments.jpg'} width={320} height={200} alt='house1' className='w-full h-52 object-contain'/>
        </div>
        <div>
            <h2 className='py-2'>House</h2>
            <Image src={'/760x470xc.jpg'} width={320} height={200} alt='house1' className='w-full h-52 object-contain'/>
        </div>
        <div>
            <h2 className='py-2'>Business park</h2>
            <Image src={'/Midrand_business_0017.jpg'} width={320} height={200} alt='house1' className='w-full h-52 object-contain' />
        </div>
    </div>
  )
}

export default Hero