import { MAIN_BACKDROP } from '../../config/Config'
import { sliceYearFromDate, getFullLanguageName, getAgeLimit } from '../../utils/functions'

const Header = ({data}) => {
  const {
   backdrop_path,
   poster_path,
   title,
   name,
   genres,
   release_date,
   first_air_date,
   vote_average,
   original_language,
   production_countries,
   runtime,
   tagline
 } = data
 
  return(
  <header className="relative h-half">
  
     <img src={backdrop_path ? MAIN_BACKDROP(backdrop_path) : MAIN_BACKDROP(poster_path)} className="w-full h-half object-cover object-top"/>
     
     <div className="absolute bottom-0 w-full h-1/2 sliderGradient"></div>
          
          
      <div className="absolute bottom-0 left-0 right-0 px-6 -translate-y-4 flex flex-col justify-center items-center">
          <h2 className="text-white text-xl font-semibold break-all">{title ? title : name }</h2>
          <h3 className="mt-2 text-sm truncate w-full text-center">{tagline && tagline.replaceAll('.', '')}</h3>
      <ul className="mt-4 space-x-4 text-white flex items-center">
        <li className="badge text-sm">{original_language && getFullLanguageName(original_language)}</li>
        <li className="badge text-sm">{release_date ? sliceYearFromDate(release_date) : first_air_date && sliceYearFromDate(first_air_date)}</li>
        <li className="badge text-3xl text-yellow-500">{vote_average ? vote_average : <span className="text-sm">Not Released</span>}</li>
        <li className="badge text-sm">{genres && genres.length && genres[0].name}</li>
        <li className="badge text-sm">+{genres && genres.length && getAgeLimit(genres[0].name)}</li>
       </ul>
    </div>
    
    
  </header>
    )
}

export default Header