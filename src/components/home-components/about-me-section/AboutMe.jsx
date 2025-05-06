import React from 'react'
import { motion } from "motion/react"

export default function AboutMe() {
  return (
    <div className='flex flex-row items-center m-10 gap-6'>
      <motion.div
      >
        <img src="/images/me1.jpg" alt=""  className="w-150 h-150 object-cover rounded-full border-3 border-[#FEE715]"/>
      </motion.div>

      <motion.div className='font-mono flex flex-col justify-start max-w-2xl gap-8 border p-4 border-[#FEE715]'
      >
        <p className='text-6xl font-extrabold bg-red-600 w-fit'>
        👨‍💻About Me:
        </p>
        <p className='text-2xl'>
            Hello My Name is <span className='font-bold text-red-600 font-sans'>"SHUVO"</span>. I am 24 years old and have a hobby of photography along side with my Engineering. In my spare time I love to take photo.Mainly I love doing Street , Portrait & Wildlife Photography. I started Photography when I was 18 years old. 
        </p>
      </motion.div>
    </div>
  )
}


// Will add - Element scroll linked animation , Scroll-linked animations,Scroll-triggered animations,Split text,Scatter text,Wavy text,Swipe actions,Reveal text effect,Typewriter,usePresenceData,Variants