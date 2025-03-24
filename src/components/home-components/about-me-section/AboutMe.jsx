import React from 'react'
import { motion } from "motion/react"

export default function AboutMe() {
  return (
    <div className='flex'>
      <motion.div
      className='bg-amber-600 '
    //   animate={{
    //     x:200,
    //     y:200
    //     }}
    //    transition={{
    //     delay:1,
    //     duration:2
    //     }}
      >
        <img src="../../../../public/images/me1.jpg" alt="" className='size-96 rounded-full '/>
      </motion.div>

      <motion.div
      className='bg-amber-500'
    //   animate={{
    //     x:200,
    //     y:200
    //     }}
    //    transition={{
    //     delay:1,
    //     duration:2
    //     }}
      >
        <h1>
            About Me
        </h1>
        <p>
            Hello My Name is ""Shuvo"". I am 24 years old and have a hobby of photography along side with my Engineering. In my spare time I love to take photo.Mainly I love doing Street , Portrait & Wildlife Photography. I started Photography when I was 18 years old. 
        </p>
      </motion.div>
    </div>
  )
}
