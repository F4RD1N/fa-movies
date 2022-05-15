import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const HorizontalSectionCard = ({name, cover}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <div className="relative h-36 mr-2 overflow-hidden rounded">
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
      <h2 className="text-white text-base mt-6">{name}</h2>
     </div>
      }
    </div>
    )
}

export default HorizontalSectionCard;