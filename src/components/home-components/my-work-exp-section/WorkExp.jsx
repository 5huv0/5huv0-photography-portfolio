import React from 'react'

export default function WorkExp() {
  return (
    <div className='flex flex-row gap-6 items-center m-10'>
      <div>
        <img src="images/me3.jpg" alt="" className='h-150 w-150 border border-[#FEE715] object-fit rounded-full'/>
      </div>

      <div className='font-mono flex flex-col justify-start max-w-3xl gap-8 border p-6 border-[#FEE715'>
        <p className='text-6xl font-extrabold  bg-red-600 w-fit '>📷My Work Experience:</p>
        <p className='text-2xl'>
        <ul>
          <li className='p-2'>
          📸 <span className='underline bg-green-800 text-3xl'>Founder</span>: Running Framing(2016 – Present)
          </li>
          <li className='p-2'>
          🎓 <span className='underline bg-green-800 text-3xl'>Senior Member</span>: SECPA Photography Club(2023–Present)
          </li>
        </ul>
        </p>
      </div>
    </div>
  )
}
