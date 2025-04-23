import React from 'react'
import { Link } from 'react-router-dom'

export default function NavEdu() {
  return (
    <div className='p-7 nav-edu'>
       <div>
        <p className='text-6xl font-extrabold text-black text-center m-5'>
        🎓 Education:
        </p>
       </div>
        <div className='flex justify-start'>
            <div className='box  text-black font-bold shadow-lg shadow-black h-auto w-200 p-5 m-4 flex flex-col gap-4'> 
                <p className='font-mono text-2xl font-bold underline'>Secondary School</p>
                <p className='text-orange-600 text-xl'>(2013-2017)</p>
                <p className='text-lg'>I began my educational path at Police Lines Adarsha High School, where I studied in the Science stream from 2013 to 2017. It was during these formative years that I developed a strong foundation in physics, mathematics, and general sciences. The school environment encouraged discipline, critical thinking, and a strong work ethic, which shaped my approach to learning and life.</p>
                <Link to="https://plahst.edu.bd/" className='flex flex-row justify-items-center'> 
                    <p className='font-bold text-green-600 hover:text-red-500'>More About My School >>>></p>
                    <img src="images/police-lines.jpg" alt="" className='size-80 object-contain'/>
                </Link>
             </div>
        </div>
        <div className='flex justify-end'>
            <div className='box  text-black font-bold shadow-lg shadow-black h-auto w-200 p-5 m-4 flex flex-col gap-4'>
                <p className='font-mono text-2xl font-bold underline'>College</p>
                <p className='text-orange-600 text-xl'>(2017-2019)</p>
                <p className='text-lg'>With a growing passion for science and technology, I moved on to Dhaka City College, one of the most reputed colleges in the country, to continue my higher secondary education in the same stream from 2017 to 2019. My time at DCC was instrumental in sharpening my academic focus. Surrounded by brilliant peers and inspiring teachers, I deepened my understanding of scientific principles and became more confident in my abilities. These two years laid the groundwork for my decision to pursue engineering.</p>
                <Link to="https://www.dhakacitycollege.edu.bd/" className='flex flex-row justify-items-center'> 
                    <p className='font-bold text-green-600 hover:text-red-500'>More About My College >>>> </p>
                    <img src="images/college-pic.jpg" alt="" className='size-80 object-contain'/>
                </Link>
            </div>
        </div>
        <div className='flex justify-start'>
            <div className='box  text-black font-bold shadow-lg shadow-black h-auto w-200 p-5 m-4 flex flex-col gap-4'>
                <p className='font-mono text-2xl font-bold underline'>University</p>
                <p className='text-orange-600 text-xl'>(2020-2025)</p>
                <p className='text-lg'>Currently, I am enrolled at Sylhet Engineering College, where I am pursuing a Bachelor of Science in Electrical and Electronic Engineering (EEE), from 2020 onwards. This phase of my academic life has been transformative. The challenging curriculum, hands-on lab work, and exposure to real-world applications have allowed me to not only enhance my technical expertise but also fuel my interest in research, innovation, and problem-solving. I’ve had the opportunity to work on exciting projects and collaborate with like-minded individuals who share the same enthusiasm for engineering and technology.</p>
                <Link to="https://www.sec.ac.bd/" className='flex flex-row justify-items-center'> 
                    <p className='font-bold text-green-600 hover:text-red-500'>More About My Varsity >>>></p>
                    <img src="images/varsity-pic.jpg" alt="" className='size-80 object-contain'/>
                </Link>
            </div>
        </div>
       
    </div>
  )
}
