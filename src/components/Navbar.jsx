import React from 'react'
import { Link , Navlink} from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to='/'>logo here</Link>
        <Navlink to='/'>about me</Navlink>
        <Navlink to='/'>my work</Navlink>
        <Navlink to='/'>work experience</Navlink>
        <Navlink to='/'>education</Navlink>
        <Navlink to='/'>contact</Navlink>
      </nav>
    </div>
  )
}
