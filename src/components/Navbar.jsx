import React from 'react'
// import { motion } from "motion/react"
import { NavLink, Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='nav font-mono p-3'>
      <nav className='flex justify-between'>

        <div className=''> {/* This div is for site logo */}
          <Link to='/'>
            <img src="../../public/images/logo-2.png" alt="" className='size-18 rounded-full'/>
          </Link>
        </div>

        <div className='flex flex-wrap gap-10 nv-link items-center p-5 font-mono font-extrabold'> {/* This div is for nav links */}
          <NavLink to="/" className='transition delay-150 duration-300 ease-in hover:-translate-y-1 hover:scale-130 hover:underline'>My Work</NavLink>
          <NavLink to="/" className='transition delay-150 duration-300 ease-in hover:-translate-y-1 hover:scale-130 hover:underline'>Work Experience</NavLink>
          <NavLink to="/" className='transition delay-150 duration-300 ease-in hover:-translate-y-1 hover:scale-130 hover:underline'>Education</NavLink>
          <NavLink to="/" className='transition delay-150 duration-300 ease-in hover:-translate-y-1 hover:scale-130 hover:underline'>About Me</NavLink>
          <NavLink to="/" className='transition delay-150 duration-300 ease-in hover:-translate-y-1 hover:scale-130 hover:underline'>Contact</NavLink>
        </div>

      </nav>
    </div>
  )
}
