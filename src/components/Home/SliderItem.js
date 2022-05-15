const SliderItem = ({image, name, year, country, imdb, ageLimit, genre}) => {

  return(
    <div>
     <div className="absolute z-20 bottom-0 w-full h-32 px-4 flex flex-col items-center">
     <h2 className="text-white text-xl font-semibold">{name}</h2>
      <ul className="mt-4">
        <li className="badge text-xs">{country}</li>
        <li className="badge text-xs">{year}</li>
        <li className="badge text-3xl text-yellow-500">{imdb}</li>
        <li className="badge text-xs">{genre}</li>
        <li className="badge text-xs">{ageLimit}</li>
       </ul>
     </div>
      <img src={image} className="w-full h-136 object-cover object-top"/>
     <div className="absolute bottom-0 w-full sliderGradient"></div>
    </div>
    )
}

export default SliderItem;