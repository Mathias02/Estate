import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronDownIcon, Menu } from 'lucide-react'

const Header = () => {
  return (
    <div className='flex items-center justify-between bg-gray-100 px-9'>
        <div className='py-5 ml-5'>
           <Link href={'/'}><Image src={'/contract.png'}  width={50}  height={50}  alt='logo' className='ml-3'/></Link> 
            <p className='text-green-600'>Your home</p>
        </div>
        
        <ul className='hidden md:flex gap-5 justify-end capitalize'>
            <li className='hover:text-green-600'>
                <Link href={'/'} className='text-green-500'>home</Link>
            </li>
            <li className='flex items-center justify-center hover:text-green-600'>
                 <Link href={'/'}>
                    <Popover as Child>
                      <PopoverTrigger className='flex'>Categories<ChevronDownIcon /></PopoverTrigger>
                      <PopoverContent>Place content for the popover here.</PopoverContent>
                    </Popover>
                 </Link>
            </li>
            <li className='hover:text-green-600'>
                  <Link href={'/single'}>single property</Link>
            </li>
            <li className='hover:text-green-600'>
                  <Link href={'/blog'}>blog</Link>
            </li>
            <li className='hover:text-green-600'>
                   <Link href={'/contact'}>contact</Link>
            </li>
        </ul>
        <Menu className='md:hidden ml-5 cursor-pointer hover:text-green-600' />
    </div>
  )
}

export default Header