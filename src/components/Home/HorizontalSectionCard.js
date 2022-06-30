import { useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HorizontalSectionCard = ({ name, cover, movieId, type }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="relative aspect-[16/9] mr-2 overflow-hidden rounded">
      {!isLoaded && <div className="absolute skeleton"></div>}
      <LazyLoadImage
        alt={name}
        src={cover}
        afterLoad={() => setIsLoaded(true)}
        className="absolute object-cover w-full h-full rounded"
      />
      {isLoaded && (
        <div className="absolute bottom-0 w-full cardGradient px-3">
          <Link to={`/${type && type == "movie" ? "movie" : "tv"}/${movieId}`}>
            <h2 className="text-white text-base mt-8 hover:underline inline-block">
              {name}
            </h2>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HorizontalSectionCard;
