import React from 'react'
import { NavLink, Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='bg-yellow-300'>
      <nav className='flex justify-between'>

        <div className=''> {/* This div is for site logo */}
          <Link to='/'>
            <img src="../../public/images/logo-1.png" alt="" className='size-20 rounded-full'/>
          </Link>
        </div>

        <div className='flex gap-10'>
          <NavLink to="">o</NavLink>
          <NavLink to="">p</NavLink>
          <NavLink to="">w</NavLink>
          <NavLink to="">e</NavLink>
          <NavLink to="">r</NavLink>
        </div>

      </nav>
    </div>
  )
}
