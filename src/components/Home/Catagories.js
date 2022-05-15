import CatagoryCard from "./CatagoryCard"
import Slider from "react-slick";
import actionLogo from '../../icons/Horror.svg'
import comedyLogo from '../../icons/Comedy 2.svg'
import thrillerLogo from '../../icons/Thriller.svg'
import romanticLogo from '../../icons/Novel.svg'
import musicalLogo from '../../icons/Musical.svg'
import shortLogo from '../../icons/Short.svg'
import biographyLogo from '../../icons/Steve Jobs.svg'

const Catagories = () => {
 const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4.2,
      slidesToScroll: 3,
      arrows: false,
    };
  return (
    <section className="mt-10">
    <h2 className="title mb-2">Genres</h2>
    <Slider {...settings}>
     <CatagoryCard icon={actionLogo} name="Action"/>
     <CatagoryCard icon={comedyLogo} name="Comedy"/>
     <CatagoryCard icon={thrillerLogo} name="Thriller"/>
     <CatagoryCard icon={romanticLogo} name="Romantic"/>
     <CatagoryCard icon={musicalLogo} name="Musical"/>
     <CatagoryCard icon={shortLogo} name="Short"/>
     <CatagoryCard icon={biographyLogo} name="Bio"/>
    </Slider>
    </section>
    )
}
export default Catagories;