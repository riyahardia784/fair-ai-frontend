import React from 'react'
import { FaBalanceScale } from "react-icons/fa";

function Nav() {
  return (
    <div className='w-full h-[50px]  p-2 flex items-center justify-between'>
        <div className='flex items-center justify-betweeen gap-2'>
            <FaBalanceScale className='bg-white rounded-full w-[40px] h-[40px] shadow-xl text-[#2563EB]'/>
            <h1 className='text-[#2563EB]  text-3xl font-extrabold '>FairAI+</h1>

        </div>
        <div className='flex items-center justify-betweeen gap-10 pr-5'>
           <a href="/" className=' text-lg font-semibold  text-[#4B5563]'>Home</a>
           <a href="/upload" className=' text-lg font-semibold  text-[#4B5563]'>Upload</a>
           
        </div>

    </div>
  )
}

export default Nav