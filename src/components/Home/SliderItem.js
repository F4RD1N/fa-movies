import { MAIN_BACKDROP } from '../../config/Config'
import { 
  sliceYearFromDate, 
  getFullLanguageName, 
  getAgeLimit,
  getGenresNameById
} from '../../utils/functions'
import { Link } from 'react-router-dom'

const SliderItem = ({itemInfo}) => {
   const {
     id,
     backdrop_path,
     title,
     name,
     genre_ids,
     release_date,
     vote_average,
     original_language,
     first_air_date
   } = itemInfo
  return(
    <Link to={`movie/${id}`} className="block h-header">
     <div className="absolute z-20 bottom-0 w-full h-32 px-4 flex flex-col items-center">
     <h2 className="text-white text-xl font-semibold">{title ? title : name }</h2>
      <ul className="mt-4 space-x-4 text-white flex items-center">
        <li className="badge text-xs">{original_language && getFullLanguageName(original_language)}</li>
        <li className="badge text-xs">{release_date ? sliceYearFromDate(release_date) : first_air_date && sliceYearFromDate(first_air_date)}</li>
        <li className="badge text-3xl text-yellow-500">{vote_average && vote_average}</li>
        <li className="badge text-xs">{genre_ids && genre_ids.length && getGenresNameById(genre_ids[0])}</li>
        <li className="badge text-xs">+{genre_ids && genre_ids.length && getAgeLimit(getGenresNameById(genre_ids[0]))}</li>
       </ul>
     </div>
      <img src={MAIN_BACKDROP(backdrop_path)} className="w-full h-full object-cover object-top"/>
     <div className="absolute bottom-0 w-full sliderGradient"></div>
    </Link>
    )
}

export default SliderItem;