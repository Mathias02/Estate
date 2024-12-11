"use client"

import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi'
import CategoryMap from './CategoryMap'



const Categories = () => {
const [list,setList] = useState([]);

  useEffect(() => {
    GetCategoryList();
  },[])

  const GetCategoryList = () => {
    GlobalApi.GetCategory().then((resp) => {
      setList(resp.categories)
    })
  }


  return (
    <div>
      <CategoryMap list={list}/>
    </div>
  )
}

export default Categories