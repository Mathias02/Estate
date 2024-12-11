import Image from 'next/image'
import React from 'react'

const CategoryMap = ({list}) => {
  return (
    <div>
        {list.map((item,index) => {
            return(
                <ul key={index} className='flex gap-5 items-center hover:bg-green-50 cursor-pointer'>
                    <li><Image src={item.icon?.url} width={65} height={65} alt='iconImage' /></li>
                    <li>{item.name}</li>
                </ul>
            )
        })}
    </div>
  )
}

export default CategoryMap