import React from 'react'
import { motion } from "motion/react"
import AboutMe from '../src/components/home-components/about-me-section/AboutMe'
import Education from '../src/components/home-components/my-edu-section/Education'
import WorkExp from '../src/components/home-components/my-work-exp-section/WorkExp'


export default function Home() {
  return (
    <div>
      <AboutMe />
      <Education />
      <WorkExp />
    </div>
  )
}
