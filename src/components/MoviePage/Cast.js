import { MAIN_AVATAR } from '../../config/Config'
import CastCard from './CastCard'
import Slider from "react-slick";
const Cast = ({data}) => {
   data.length = 10
   
 const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      lazyLoad: true,
      slidesToShow: 1.65,
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
            slidesToShow: 4.7,
            slidesToScroll: 3,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3.2,
            slidesToScroll: 3,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.8,
            slidesToScroll: 2,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1.6,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
      ]
    };
  return(
    <section className="mt-6 mb-8">
     <Slider {...settings}>
      {
        data && data.length && data.map(item => {
          const { profile_path, character, name, order, credit_id} = item
         return profile_path && <CastCard key={order} avatar={MAIN_AVATAR(profile_path)} realName={name} charName={character}/>
        })
      }
     </Slider>
    </section>
    )
}
export default Cast;