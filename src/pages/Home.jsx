import React from 'react'
import { FaBalanceScale } from "react-icons/fa";

function Home() {
  return (
    <div className='w-full min-h-screen bg-[#F3F4F6] flex  items-center  justify-center'>
        
        <div className=' w-[60%] min-h-[650px]   '>            
           <h1 className='text-[#2563EB] text-center  flex items-center justify-center gap-4 text-7xl font-extrabold '>
           <FaBalanceScale className='bg-white rounded-full w-[40px] h-[40px] shadow-xl'/> FairAI+</h1>
           <h5 className='text-lg p-2 text-center text-[#4B5563] tracking-tight'>Detect and reduce bias in hiring decisions using AI</h5>
           <div className=' mt-16 p-5 pt-5 shadow-md rounded-xl bg-white'>
              <h2 className='text-3xl text-[#2563EB] font-semibold '>Problem Statement</h2>
              <p className='pt-2 text-lg  text-[#4B5563]'>Hiring systems often show bias, unfairly favoring some candidates over others based on factors like gender.</p>
           </div>
           <div className=' mt-16 p-5 pt-5 shadow-md rounded-xl bg-white'>
              <h2 className='text-3xl text-[#2563EB] font-semibold'>Solution</h2>
              <p className='pt-2 text-lg  text-[#4B5563]'>FairAI+ analyzes hiring data to detect bias and provide a fairness score with clear insights.</p>
           </div>

           <div className='flex items-center justify-center mt-20'>
              <a href='/upload' className=' flex items-center justify-center bg-[#2563EB] text-white font-semibold rounded-full text-2xl w-[250px] h-[70px] shadow-2xl hover:shadow-md'>Start Analysis</a>
           </div>

        </div>
      
    </div>
  )
}

export default Home