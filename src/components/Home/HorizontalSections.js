import { MAIN_IMAGE } from '../../config/Config'
import HorizontalSectionCard from './HorizontalSectionCard'
import Titlebar from './Titlebar'
import Slider from "react-slick";
const HorizontalSections = ({data, title}) => {
  
 const settings = {
      dots: false,
      infinite: false,
      initialSlide: 1,
      speed: 500,
      lazyLoad: true,
      slidesToShow:1.4,
      slidesToScroll: 1,
      arrows: false,
    };
  return(
    <section className="mb-14">
    <Titlebar title={title}/>
    <Slider {...settings}>
     {data && data.length && data.map(item => {
       const { id, backdrop_path, poster_path, title, name} = item
       return(
           <HorizontalSectionCard
             key={id}
             name={title ? title : name}
             cover={backdrop_path ? MAIN_IMAGE(backdrop_path) : MAIN_IMAGE(poster_path)}
           />
       )
     })}
    </Slider>
    </section>
    )
}
export default HorizontalSections;