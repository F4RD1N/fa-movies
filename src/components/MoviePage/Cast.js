import CastCard from './CastCard'
import Slider from "react-slick";
const Cast = ({data}) => {
 const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1.65,
      slidesToScroll: 1,
      arrows: false,
    };
  return(
    <section className="mt-6">
     <Slider {...settings}>
     {
       data && data.map(item => {
         const {id, name, photo} = JSON.parse(item)
         return(
           <CastCard key={id} avatar={photo} realName={id} charName={name}/>
         )
       })
     }
     </Slider>
    </section>
    )
}
export default Cast;