import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer font-mono p-3' >
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis, earum, in cupiditate quae soluta eius doloribus distinctio aliquid dolorum molestiae harum obcaecati itaque quidem odit fuga sint expedita neque?
          Voluptas dolorum aliquid omnis aliquam voluptatibus qui tempore debitis fugiat mollitia, soluta dolor autem velit vitae consequatur necessitatibus. Modi neque doloremque fugit reiciendis similique ullam possimus nobis perferendis consequatur maiores.
          Voluptates deleniti aspernatur esse magni sit explicabo, itaque consequuntur earum veniam odio est fugiat. Facilis asperiores ipsum fuga libero aliquid repellat nihil nam tempora, eveniet officia nesciunt reiciendis, voluptatum neque.
          Modi accusamus distinctio nam rerum et illum officiis, provident enim quis odit doloremque aliquid nemo necessitatibus harum qui libero accusantium quas fuga sint esse maxime similique voluptatem! Odio, magnam perspiciatis.
          Ipsam incidunt dignissimos sit odit impedit corporis dolores laudantium ipsum! Voluptatem magni esse incidunt, repudiandae fugit laboriosam sapiente amet similique veritatis dolorum et consequuntur a reiciendis nam? Fugit, earum facere.
        </p>
      </div>

      <div>
        <Link to=''>Home</Link>
        <Link to=''>My Work</Link>
        <Link to=''>About Me</Link>
        <Link to=''>Work Experience</Link>
        <Link to=''>Contact</Link>
      </div>

      <div>
        <p>Subscribe</p>
        <input type="text" />
        <Link to=''>
          <img src="../../public/images/" alt="" />
          <img src="../../public/images/" alt="" />
          <img src="../../public/images/" alt="" />
          <img src="../../public/images/" alt="" />
          <img src="../../public/images/" alt="" />
        </Link>
      </div>
    </div>
  )
}


// free pik - https://contributor.freepik.com/dashboard
// adobe - https://contributor.stock.adobe.com/en/portfolio
