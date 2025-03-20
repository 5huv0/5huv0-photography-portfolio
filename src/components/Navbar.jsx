import React from 'react'
import { Link , Navlink} from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to='/'></Link>
        <Navlink to='/'></Navlink>
        <Navlink to='/'></Navlink>
        <Navlink to='/'></Navlink>
        <Navlink to='/'></Navlink>
        <Navlink to='/'></Navlink>
      </nav>
    </div>
  )
}
