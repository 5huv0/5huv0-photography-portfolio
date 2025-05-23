import React from 'react'
import { motion } from "motion/react"

export default function Education() {
  return (
    <motion.div 
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 1.9 }}
    className='flex flex-row items-center m-10 gap-6'>
      <motion.div className='font-mono flex flex-col justify-start max-w-4xl gap-8 border p-6 border-[#FEE715]'
      
      >
        <p className='text-6xl font-extrabold  bg-red-600 w-fit'>📖Education:</p>
        <p className='text-2xl'>
          <ul >
            <li className='p-2'>
            ✏️ <span className='underline bg-green-800 text-3xl'>School</span>: Police Lines Adarsha High School(2013-2017)
            </li>
            <li className='p-2'>
            🏫 <span className='underline bg-green-800 text-3xl'>College</span>: Dhaka City College(2017-2019)
            </li>
            <li className='p-2'>
            🎓 <span className='underline bg-green-800 text-3xl'>University</span>: Sylhet Engineering College(2020-2025)
            </li>
          </ul>
          
        </p>
      </motion.div>

      <motion.div>
        <img src="/images/edu.jpg" alt="" className='w-140 h-140 object-fit rounded-full border-3 border-[#FEE715]'/>
      </motion.div>
    </motion.div>
  )
}
