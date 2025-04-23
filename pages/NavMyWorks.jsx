import React from 'react'
import SliderComp from '../src/components/home-components/my-works-section/slider/SliderComp'

export default function NavMyWorks() {
  return (
    <div>
      <div className='bg-amber-900'>
        <p className='font-bold text-8xl text-center p-5 m-5'>My works</p>
      </div>
      <div className='mb-20'>
        <SliderComp/>
      </div>
    </div>
  )
}
