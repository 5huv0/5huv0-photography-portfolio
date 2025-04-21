import React from 'react'
import { Link } from 'react-router-dom'

export default function NavAboutMe() {
  return (
    <div>
      <div className='text-center flex flex-col items-center'>
        <p className='font-mono text-yellow-400 text-xl m-4'>A BIT ABOUT ME</p>
        <p className='font-mono text-orange-400 text-9xl font-bold m-4'>Who Am I?</p>
        <img src="/images/me3.jpg" alt="" className='size-250 object-cover rounded-full border-yellow-300 m-4 border-2'/>
        <p className='font-mono text-yellow-300 p-24'>
        Hello My Name is <span className='font-bold text-red-600 font-sans'>"SHUVO"</span>.
        I’m a 24-year-old photography enthusiast with a background in engineering. While my academic and professional journey has been deeply rooted in the world of science and technology, my heart has always found a home in the art of photography. What began as a simple curiosity when I was 18 years old has now grown into one of the most defining aspects of who I am.
        Photography, for me, is more than just capturing moments—it's about telling stories, preserving emotions, and sharing unique perspectives. I specialize in Street Photography, where I look for raw, unfiltered slices of life. I also find joy in Portrait Photography, capturing the depth of human emotion through expressions, and in Wildlife Photography, where patience meets the unpredictable beauty of nature. Each genre challenges me in a different way and teaches me to see the world through a constantly evolving lens.
        Over the years, I’ve worked on honing my technical skills, learning about lighting, composition, and post-processing. At the same time, I’ve learned to trust my instinct and develop a creative voice that reflects my personal vision. I’ve had the privilege of leading the photography group “Running Framing,” which I founded, and also hold a senior position in the SECPA Photography Club, where I collaborate with other passionate photographers and participate in workshops and exhibitions.
        Outside of photography and engineering, I’m always exploring creative outlets—whether it’s design, editing, or simply finding inspiration in travel and nature. I believe that art and technology can coexist beautifully, and I try to blend both in my approach to life and work. My goal is to keep evolving, keep learning, and keep capturing the beauty in the ordinary.
        Thank you for taking the time to get to know me. I hope my work resonates with you, and I’d love for you to follow along as I continue this creative journey.
        </p>
      </div>
      <p className='font-bold text-4xl bg-red-600 text-center p-4 m-4'>Things I Like To Shoot Most:  </p>

      <div className='flex items-center align-middle justify-center gap-7 text-center font-mono font-bold p-4'>
        <div className='box-border size-80 p-4 bg-yellow-400 text-black rounded-2xl flex flex-col justify-center items-center'>
          <img src="/images/pic13.jpg" alt="" className='size-60'/>
          <p>Wild Life</p>
          <Link to="#" className='hover:underline hover:bg-red-500'>See More</Link>
        </div>
        <div className='box-border size-80 p-4 bg-yellow-400 text-black rounded-2xl flex flex-col justify-center items-center'>
          <img src="/images/pic4.jpg" alt="" className='size-60'/>
          <p>Street</p>
          <Link to="#" className='hover:underline hover:bg-red-500'>See More</Link>
        </div>
        <div className='box-border size-80 p-4 bg-yellow-400 text-black rounded-2xl flex flex-col justify-center items-center'>
          <img src="/images/pic10.jpg" alt="" className='size-60'/>
          <p>Portrait</p>
          <Link to="#" className='hover:underline hover:bg-red-500'>See More</Link>
        </div>
        <div className='box-border size-80 p-4 bg-yellow-400 text-black rounded-2xl flex flex-col justify-center items-center'>
          <img src="/images/pic9.jpg" alt="" className='size-60'/>
          <p>Slow Shutter</p>
          <Link to="#" className='hover:underline hover:bg-red-500'>See More</Link>
        </div>
      </div>
    </div>
  )
}
