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
          
          
      <div className="absolute bottom-0 left-0 right-0 px-6 flex flex-col">
          <h2 className="text-white text-2xl font-semibold break-all">{title ? title : name }</h2>
          <h3 className="mt-2 text-base truncate w-full">{tagline && tagline.replaceAll('.', '')}</h3>
      <ul className="mt-6 space-x-2 text-textSecondary">
        <li className="badge">{original_language && getFullLanguageName(original_language)}</li>
        <li className="badge">{release_date ? sliceYearFromDate(release_date) : first_air_date && sliceYearFromDate(first_air_date)}</li>
        <li className="badge text-yellow-400">{vote_average ? vote_average : <span className="text-sm">Coming Soon</span>}</li>
        <li className="badge">{genres && genres.length && genres[0].name}</li>
       </ul>
       
       <div className="absolute right-0 bottom-8 mr-5 flex flex-col justify-center items-center space-y-2">
       <div className="w-16 h-16 flex justify-center items-center rounded-full bg-primary text-white font-bold active:saturate-150"><i className="ri-download-line text-2xl"></i></div>
        <span className="text-xs">02:39:52</span>
        </div>

    </div>
    
    
  </header>
    )
}

export default Header