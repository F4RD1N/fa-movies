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