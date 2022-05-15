import { useState, useEffect } from 'react'
import SliderItem from './SliderItem'
import SliderWrapper from "react-slick";

const Slider = () => {

const image1 = 'https://coolhdwall.com/storage/202105/spider-man-no-way-home-4k-phone-wallpaper-2160x3840.jpg'
const image2 = 'https://www.xtrafondos.com/wallpapers/resoluciones/22/personajes-de-sonic-2_2560x1440_9528.jpg'
const image3 = 'https://www.namava.ir/mag/wp-content/uploads/2021/12/Khatoon.jpg'
  const settings = {
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4500,
      lazyLoad: true,
      fade: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return(
    <section>
    <div  className="relative">
     <SliderWrapper {...settings}>
      <SliderItem 
         image={image1} 
         name="Spider Man: No Way Home"
         imdb="8.4"
         year="2022"
         country="USA"
         ageLimit="13+"
         genre="Action"
         />
      <SliderItem 
         image={image2} 
         name="Sonic: The Hedgehog 2"
         imdb="9.3"
         year="1977"
         country="USA"
         ageLimit="5+"
         genre="Fantasy"
         />
      <SliderItem 
         image={image3} 
         name="Khatoon"
         imdb="7.2"
         year="1400"
         country="IRAN"
         ageLimit="16+"
         genre="Family"
         />
     </SliderWrapper>
    </div>
    </section>
    )
}

export default Slider;