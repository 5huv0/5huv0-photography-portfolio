import React from 'react'
import SliderComp from './slider/SliderComp'

export default function MyWorks() {

  return (
    <div className='flex flex-col justify-center text-center'>
      <div className='text-6xl font-extrabold  bg-red-600 w-fit'>
        📷My Works:
      </div>

      <div className='p-3 m-3'>
        <SliderComp/>
      </div>
      

    </div>
  )
}
