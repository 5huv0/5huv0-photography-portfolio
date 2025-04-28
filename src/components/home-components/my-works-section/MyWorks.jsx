import React from 'react'
import SliderComp from './slider/SliderComp'
import { motion } from "motion/react"

export default function MyWorks() {

  return (
    <div className='flex flex-col'>
      <motion.div className='text-6xl font-extrabold  bg-red-600 w-fit'
      initial={{
        x : 400
      }}
      animate={{
        x : 0,
        scale: .8,
        repeat: Infinity,
        ease: 'anticipate'
      }}
      transition={{
        duration : 1
      }}>
        📷My Works:
      </motion.div>

      <div className='p-9'>
        <SliderComp/>
      </div>
      

    </div>
  )
}
