import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const HorizontalSectionCard = ({name, cover, movieId, type}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <Link to={`/${type && type == 'movie' ? 'movie' : 'tv'}/${movieId}`}>
    <div className="relative aspect-[16/9] mr-2 overflow-hidden rounded">
        {
          !isLoaded && <div className="absolute skeleton"></div>
        }
    <LazyLoadImage
      alt={name}
      src={cover}
      afterLoad={() => setIsLoaded(true)}
      className="absolute object-cover w-full h-full rounded" />
      { 
        isLoaded && <div className="absolute bottom-0 w-full cardGradient px-3">
      <h2 className="text-white text-base mt-8">{name}</h2>
     </div>
      }
    </div>
    </Link>
    )
}

export default HorizontalSectionCard;