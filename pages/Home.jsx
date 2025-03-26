import React from 'react'
// import { motion } from "motion/react"
import AboutMe from '../src/components/home-components/about-me-section/AboutMe'
import Education from '../src/components/home-components/my-edu-section/Education'
import WorkExp from '../src/components/home-components/my-work-exp-section/WorkExp'
import MyWorks from '../src/components/home-components/my-works-section/MyWorks'


export default function Home() {
  return (
    <div className='home-page'>
      <AboutMe />
      <Education />
      <WorkExp />
      <MyWorks />
    </div>
  )
}
