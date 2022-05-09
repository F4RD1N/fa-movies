import TopMovieCard from './TopMovieCard'
import Titlebar from './Titlebar'
import Slider from "react-slick";
const TopMovies = () => {
 const cover = "https://i.pinimg.com/originals/13/ce/63/13ce63119e9e7966586e1612b2ccecd6.jpg"
 const settings = {
      dots: false,
      infinite: true,
      initialSlide: 2,
      autoplay: true,
      autoplaySpeed: 2200,
      speed: 500,
      pauseOnFocus: true,
      slidesToShow:1,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
      centerPadding: '50px'
    };
  return(
    <section className="mt-7">
    <div className="px-6">
    <Titlebar title="Top Movies"/>
    </div>
    <div className="px-2">
    <Slider {...settings}>
    <TopMovieCard 
     name="The 100"
     img={cover}
     episodeNum="3"
     episodeName="Earth Skills"
     rate="7.2"
    />
    <TopMovieCard 
     name="The 100"
     img={cover}
     episodeNum="3"
     episodeName="Earth Skills"
     rate="7.2"
    />
    <TopMovieCard 
     name="The 100"
     img={cover}
     episodeNum="3"
     episodeName="Earth Skills"
     rate="7.2"
    />
    <TopMovieCard 
     name="The 100"
     img={cover}
     episodeNum="3"
     episodeName="Earth Skills"
     rate="7.2"
    />
    <TopMovieCard 
     name="The 100"
     img={cover}
     episodeNum="3"
     episodeName="Earth Skills"
     rate="7.2"
    />
    </Slider>
    </div>
    </section>
    )
}
export default TopMovies;