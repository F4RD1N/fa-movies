import CastCard from './CastCard'
import Slider from "react-slick";
const Cast = () => {
  const img = "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNTk1MTg2MTkw/matt-leblanc-9376287-1-402.jpg"
  
 const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1.9,
      slidesToScroll: 1,
      arrows: false,
    };
  return(
    <section className="mt-6">
     <Slider {...settings}>
     <CastCard avatar={img} realName="Leonardo Dicaperio" charName="Alexander"/>
     <CastCard avatar={img} realName="Matt LeBlanc" charName="joey"/>
     <CastCard avatar={img} realName="Matt LeBlanc" charName="joey"/>
     <CastCard avatar={img} realName="Matt LeBlanc" charName="joey"/>
     </Slider>
    </section>
    )
}
export default Cast;