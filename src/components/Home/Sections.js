import { MAIN_IMAGE } from '../../config/Config'
import SectionCard from './SectionCard'
import Titlebar from './Titlebar'
import Slider from "react-slick";

const Sections = ({title, data}) => {
const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      lazyLoad: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false
    };
  return(
    <section className="mb-8">
    <Titlebar title={title}/>
    <Slider {...settings}>
      {
        data && data.length && data.map(item => {
       const { id, poster_path, title, name} = item
       return(
         <SectionCard
           key={id}
           poster={MAIN_IMAGE(poster_path)}
           title={title ? title : name}
           movieId={id}
           />
       )
        })
      }
    </Slider>
    </section>
    )
}

export default Sections;