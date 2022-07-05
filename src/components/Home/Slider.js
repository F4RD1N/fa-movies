import { useEffect } from "react";
import SliderItem from "./SliderItem";
import SliderWrapper from "react-slick";

const Slider = ({ data }) => {
  useEffect(() => {
    data.length = 15;
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4500,
    lazyLoad: true,
    fade: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <div className="relative">
        <SliderWrapper {...settings}>
          {data &&
            data.map((item) => {
              return <SliderItem i key={item.id} itemInfo={item} />;
            })}
        </SliderWrapper>
      </div>
    </section>
  );
};

export default Slider;
