import React from 'react'
// import { motion } from "motion/react"

export default function AboutMe() {
  return (
    <div className='flex flex-row items-center m-10 gap-6'>
      <div className=''>
        <img src="../../../../public/images/me3.jpg" alt=""  className="w-150 h-150 object-cover rounded-full border-3 border-[#FEE715]"/>
      </div>

      <div className='font-mono flex flex-col justify-start max-w-2xl gap-8 border p-4 border-[#FEE715]'>
        <p className='text-5xl font-extrabold underline bg-red-600 w-fit'>
            About Me:
        </p>
        <p className='text-2xl'>
            Hello My Name is <span className='font-bold text-red-600 font-sans'>"SHUVO"</span>. I am 24 years old and have a hobby of photography along side with my Engineering. In my spare time I love to take photo.Mainly I love doing Street , Portrait & Wildlife Photography. I started Photography when I was 18 years old. 
        </p>
      </div>
    </div>
  )
}
