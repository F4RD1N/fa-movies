import SectionCard from './SectionCard'
import Titlebar from './Titlebar'
import Slider from "react-slick";

const Sections = ({title}) => {
const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false
    };
  return(
    <section className="pt-6">
    <Titlebar title={title}/>
    <Slider {...settings}>
     <SectionCard />
     <SectionCard />
     <SectionCard />
     <SectionCard />
     <SectionCard />
     <SectionCard />
     <SectionCard />
    </Slider>
    </section>
    )
}

export default Sections;