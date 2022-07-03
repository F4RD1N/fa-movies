import { MAIN_IMAGE } from '../../config/Config'
import SectionCard from './SectionCard'
import Titlebar from './Titlebar'
import Slider from "react-slick";

const Sections = ({title, data, type}) => {
  
const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      lazyLoad: true,
      slidesToShow: 9,
      slidesToScroll: 9,
      arrows: false,
      responsive: [
        {
          breakpoint: 1536,
          settings: {
            slidesToShow: 9,
            slidesToScroll: 9,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 7,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5.1,
            slidesToScroll: 5,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4.1,
            slidesToScroll: 4,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 3.1,
            slidesToScroll: 3,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 2.1,
            slidesToScroll: 2,
            infinite: false,
            dots: false
          }
        },
      ]
    };
  return(
    <section className="mb-8">
    <Titlebar title={title}/>
    <Slider {...settings}>
      {
        data && data.length && data.map(item => {
       const { id, poster_path, title, name} = item
      return poster_path && <SectionCard
           key={id}
           poster={MAIN_IMAGE(poster_path)}
           title={title ? title : name}
           movieId={id}
           type={type}
           />
        })
      }
    </Slider>
    </section>
    )
}

export default Sections;