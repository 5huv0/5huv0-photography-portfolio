import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageData from "../../../../imageData";


export default function SliderComp() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
      return (
        <div className="slider-container bg-[#FEE715] p-6">
          <Slider {...settings} >
          {imageData.map((image) => (
            <div key={image.id}>
              <img
                src={image.src}
                alt={image.alt}
                className="h-80 w-100 object-cover rounded-lg"
              />
            </div>
          ))}
          </Slider>
        </div>
      )
}


            // <div>
            //   <img src="/images/pic1.jpg" alt="" className=' h-100 w-100 object-cover'/>
            // </div>
            // <div>
            //   <img src="/images/pic2.jpg" alt="" className=' h-100 w-100 object-cover'/>
            // </div>
            // <div>
            //   <img src="/images/pic3.jpg" alt="" className=' h-100 w-100 object-cover'/>
            // </div>
            // <div>
            //   <img src="/images/pic4.jpg" alt="" className=' h-100 w-100 object-cover'/>
            // </div>
            // <div>
            //   <img src="/images/pic5.jpg" alt="" className=' h-100 w-100 object-cover'/>
            // </div>
            // <div>
            //   <img src="/images/pic6.jpg" alt="" className=' h-100 w-100 object-cover'/>
            // </div>
            // <div>
            //   <img src="/images/pic7.jpg" alt="" className=' h-100 w-100 object-cover'/>
            // </div>
            // <div>
            //   <img src="/images/pic8.jpg" alt="" className=' h-100 w-100 object-cover'/>
            // </div>
            // <div>
            //   <img src="/images/pic9.jpg" alt="" className=' h-100 w-100 object-cover'/>
            // </div>