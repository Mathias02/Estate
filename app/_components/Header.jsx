"use client"


import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronDownIcon, Menu } from 'lucide-react'
import Categories from './Categories'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isActive,setIsActive] = useState(false);
  const path =usePathname()



  return (
    <div className='flex items-center justify-between bg-gray-100 px-9'>
        <div className='py-5 ml-5'>
           <Link href={'/'}><Image src={'/contract.png'}  width={50}  height={50}  alt='logo' className='ml-9'/></Link> 
            <p className='text-green-900 mt-1'>MTDM Real Estate</p>
        </div>
        <div className='flex flex-col gap-5'>
            <button onClick={() => setIsActive((prev) => !prev)}>
              <Menu className='md:hidden ml-5 cursor-pointer hover:text-green-600' />
            </button>
        </div>
        <ul className='hidden md:flex gap-5 justify-end capitalize'>
            <li className='hover:text-green-600'>
                <Link href={'/'} className={`${path==='/'? 'text-green-500':''}`}>home</Link>
            </li>
            <li className='flex items-center justify-center hover:text-green-600'>
                    <Popover as Child>
                      <PopoverTrigger className='flex items-center'>Categories<ChevronDownIcon /></PopoverTrigger>
                      <PopoverContent>
                         <Categories />
                      </PopoverContent>
                    </Popover>
            </li>
            <li className='hover:text-green-600'>
                  <Link href={'/single'} className={`${path==='/single'? 'text-green-500':''}`}>single property</Link>
            </li>
            <li className='hover:text-green-600'>
                  <Link href={'/blog'} className={`${path==='/blog'? 'text-green-500':''}`}>blog</Link>
            </li>
            <li className='hover:text-green-600'>
                   <Link href={'/contact'} className={`${path==='/contact'? 'text-green-500':''}`}>contact</Link>
            </li>
        </ul>

      {/* aside navbar */}
        
      {
        isActive && (
          <ul className='md:hidden absolute bg-gray-100 right-2 top-20 p-9 flex flex-col gap-3 text-left rounded-sm z-30'>
                <li className='hover:text-green-600'>
                    <Link href={'/'} className={`${path==='/'? 'text-green-500':''}`}>Home</Link>
                </li>
                <li className='flex items-center justify-center hover:text-green-600 left-0'>
                        <Popover as Child>
                          <PopoverTrigger className='flex items-center gap-3'>Categories<ChevronDownIcon /></PopoverTrigger>
                          <PopoverContent>
                             <Categories />
                          </PopoverContent>
                        </Popover>
                </li>
                <li className='hover:text-green-600'>
                      <Link href={'/single'} className={`${path==='/single'? 'text-green-500':''}`}>Single property</Link>
                </li>
                <li className='hover:text-green-600'>
                      <Link href={'/blog'} className={`${path==='/blog'? 'text-green-500':''}`}>Blog</Link>
                </li>
                <li className='hover:text-green-600'>
                       <Link href={'/contact'} className={`${path==='/contact'? 'text-green-500':''}`}>Contact</Link>
                </li>
            </ul>)
      }
     </div>
  )
}

export default Header