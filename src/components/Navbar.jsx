import React from 'react'
import { NavLink, Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='bg-amber-500'>
      <nav>

        <div> {/* This div is for site logo */}
          <Link to='/'>
            <img src="#" alt="" />
          </Link>
        </div>

        <div>
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
