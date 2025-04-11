'use client'

import React, { useState } from 'react'
import ProductSidebar from './ProductsSideBar'
import { BiFilterAlt } from "react-icons/bi";

export default function Filters() {
  const [filtered,setFiltered]  = useState(false)
  return (
    <>
    {filtered && <div className='fixed inset-0 z-50 bg-black/50' onClick={()=>setFiltered(false)}>
    <ProductSidebar/></div>}
    <button onClick={()=>setFiltered(true)}>
    <BiFilterAlt size={25} className='text-white'/>
    </button>
    </>
  )
}
