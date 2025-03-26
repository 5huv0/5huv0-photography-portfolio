import React from 'react'

export default function MyWorks() {
  return (
    <div className='flex m-10'>
      <div>
        <p>
          My Works
        </p>
      </div>

      <div className='flex gap-3 items-center justify-center'>
        <div>
          <img src="../../../../public/images/pic1.jpg" alt="" className='size-150'/>
        </div>
        <div>
          <img src="../../../../public/images/pic2.jpg" alt="" className='size-150'/>
        </div><div>
          <img src="../../../../public/images/pic3.jpg" alt="" className='size-150'/>
        </div>
      </div>
    </div>
  )
}
