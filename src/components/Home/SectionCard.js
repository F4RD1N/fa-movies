import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const SectionCard = ({title, poster, movieId, type}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  
  return(
   <div>
    <div className="relative aspect-[9/16] mr-2 overflow-hidden rounded">
        {
          !isLoaded && <div className="absolute skeleton"></div>
        }
   <Link to={`/${type && type == 'tv' ? 'tv' : 'movie'}/${movieId}`}>
    <LazyLoadImage
      alt={title}
      src={poster}
      afterLoad={() => setIsLoaded(true)}
      className="absolute object-cover w-full h-full rounded" /></Link>
    </div>
    <h3 className="text-white text-xs py-2 w-11/12">{title}</h3>
   </div>
    )
}

export default SectionCard;