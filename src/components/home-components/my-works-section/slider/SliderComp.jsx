import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderComp() {

    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
      return (
        <div className="slider-container bg-black gap-3">
          <Slider {...settings} className=''>
            <div>
              <img src="../../../../../public/images/pic1.jpg" alt="" className='h-100 w-150 object-cover'/>
            </div>
            <div>
              <img src="../../../../../public/images/pic2.jpg" alt="" className='h-100 w-150 object-cover'/>
            </div>
            <div>
              <img src="../../../../../public/images/pic3.jpg" alt="" className='h-100 w-150 object-cover'/>
            </div>
            <div>
              <img src="../../../../../public/images/pic4.jpg" alt="" className='h-100 w-150 object-cover'/>
            </div>
            <div>
              <img src="../../../../../public/images/pic5.jpg" alt="" className='h-100 w-150 object-cover'/>
            </div>
            <div>
              <img src="../../../../../public/images/pic6.jpg" alt="" className='h-100 w-150 object-cover'/>
            </div>
            <div>
              <img src="../../../../../public/images/pic7.jpg" alt="" className='h-100 w-150 object-cover'/>
            </div>
            <div>
              <img src="../../../../../public/images/pic8.jpg" alt="" className='h-100 w-150 object-cover'/>
            </div>
            <div>
              <img src="../../../../../public/images/pic9.jpg" alt="" className='h-100 w-150 object-cover'/>
            </div>
          </Slider>
        </div>
      )
}
