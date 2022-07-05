import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const SectionCard = ({title, poster, movieId, type, isDragging}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const location = useLocation()
  return(
   <div>
      {<Link target={location.pathname === '/search' ? '_blank' : ''} rel="noopener noreferrer" to={!isDragging && `/${type && type == 'tv' ? 'tv' : 'movie'}/${movieId}`}>
    <div className="relative aspect-[9/16] mr-2 overflow-hidden rounded">
        {
          !isLoaded && <div className="absolute skeleton"></div>
        }
    <LazyLoadImage
      alt={title}
      src={poster}
      afterLoad={() => setIsLoaded(true)}
      className="absolute object-cover w-full h-full rounded" />
    </div>
    <h3 className="text-white text-xs py-2 w-11/12 hover:underline">{title}</h3>
    </Link>}
   </div>
    )
}

export default SectionCard;