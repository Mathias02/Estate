import { ChevronDownIcon } from 'lucide-react'
import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Categories from './Categories'



const SideMenu = () => {

    const path = usePathname();

  return (
    <div className='px-9'>
         <ul className='capitalize grid items-center gap-2 bg-gray-200 px-9'>
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
    </div>
  )
}

export default SideMenu