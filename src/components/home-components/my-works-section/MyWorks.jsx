import React from 'react'
import SliderComp from './slider/SliderComp'
import { motion } from "motion/react"

export default function MyWorks() {

  return (
    <div className='flex flex-col'>
      <motion.div className='text-6xl font-extrabold  bg-red-600 w-fit'
      >
        📷My Works:
      </motion.div>

      <div className='p-9'>
        <SliderComp/>
      </div>
      

    </div>
  )
}
