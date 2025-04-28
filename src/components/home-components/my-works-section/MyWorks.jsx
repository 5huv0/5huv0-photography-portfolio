import React from 'react'
import SliderComp from './slider/SliderComp'
import { motion } from "motion/react"

export default function MyWorks() {

  return (
    <div className='flex flex-col'>
      <motion.div className='text-6xl font-extrabold  bg-red-600 w-fit'
      // initial={{
      //   x : 400
      // }}
      // animate={{
      //   x : [0,800,800,0,0],
      //   y: [0,0,300,300,0],
      //   scale: .8,
      // }}
      // transition={{
      //   duration : 1,
      //   ease: 'anticipate'
      // }}
      >
        📷My Works:
      </motion.div>

      <div className='p-9'>
        <SliderComp/>
      </div>
      

    </div>
  )
}
