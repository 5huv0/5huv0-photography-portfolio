import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer font-mono p-3 flex flex-row justify-around' >
      <div className='text-center font-extrabold p-3' style={{color: "#101820"}}> {/* This div is for quotes */}
        <p>
        "Every picture tells a story, capturing emotions that words cannot."<br />
        "Through the lens, I turn fleeting moments into forever memories."<br />
        "Chasing light, capturing life—one frame at a time."<br />
        "Moments fade, but photographs make them eternal."<br />
        </p>
      </div>

      <div className='flex flex-col justify-center text-center'>{/* This div is for links */}
        <Link to='/' className='hover:bg-red-600'>Home</Link>
        <Link to='/' className='hover:bg-red-600'>My Work</Link>
        <Link to='/' className='hover:bg-red-600'>About Me</Link>
        <Link to='/' className='hover:bg-red-600'>Work Experience</Link>
        <Link to='/' className='hover:bg-red-600'>Contact</Link>
      </div>

      <div className=''>{/* This div is for linkings */}
        <p>Subscribe</p>
        <input type="text" placeholder='@ Your gmail here @' className='outline-yellow-300 text-center'/>
        <div className='flex gap-4 p-3'>
          <Link to='/' className='bg-yellow-300 rounded-full'>
            <img src="../../public/images/fb-logo.png" alt="" />
          </Link>
          <Link to='/' className='bg-yellow-300 rounded-full'>
            <img src="../../public/images/insta-logo.png" alt="" />
          </Link>
          <Link to='https://contributor.stock.adobe.com/en/portfolio' className='bg-yellow-300 rounded-full'>
            <img src="../../public/images/adobe-logo.png" alt="" />
          </Link>
          <Link to='https://contributor.freepik.com/dashboard' className='bg-yellow-300 rounded-full'>
            <img src="../../public/images/camera-logo.png" alt="" />
          </Link>
          <Link to='/' className='bg-yellow-300 rounded-full'>
            <img src="../../public/images/gmail-logo.png" alt="" />
          </Link>
        </div>
        
      </div>

    </div>
  )
}

// free pik - https://contributor.freepik.com/dashboard
// adobe - https://contributor.stock.adobe.com/en/portfolio
