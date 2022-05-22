import { MAIN_IMAGE } from '../../config/Config'
import HorizontalSectionCard from './HorizontalSectionCard'
import Titlebar from './Titlebar'
import Slider from "react-slick";
const HorizontalSections = ({data, title, type}) => {
  
 const settings = {
      dots: false,
      infinite: false,
      initialSlide: 1,
      speed: 500,
      lazyLoad: true,
      slidesToShow:1.4,
      slidesToScroll: 1,
      arrows: false,
   responsive: [
        {
          breakpoint: 1536,
          settings: {
            slidesToShow: 4.5,
            slidesToScroll: 3,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3.5,
            slidesToScroll: 3,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2.7,
            slidesToScroll: 2,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.2,
            slidesToScroll: 2,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1.3,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
      ]
    };
  return(
    <section className="mb-14">
    <Titlebar title={title}/>
    <Slider {...settings}>
     {data && data.length && data.map(item => {
       const { id, backdrop_path, poster_path, title, name} = item
       return backdrop_path && <HorizontalSectionCard
             key={id}
             name={title ? title : name}
             cover={backdrop_path ? MAIN_IMAGE(backdrop_path) : MAIN_IMAGE(poster_path)}
             movieId={id}
             type={type}
           />
     })}
    </Slider>
    </section>
    )
}
export default HorizontalSections;