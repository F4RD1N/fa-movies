import { MAIN_BACKDROP } from '../../config/Config'
import { sliceYearFromDate, getFullLanguageName, getAgeLimit } from '../../utils/functions'
const Hero = ({data}) => {
 const {
   backdrop_path,
   poster_path,
   title,
   name,
   genres,
   overview,
   release_date,
   first_air_date,
   vote_average,
   original_language,
   production_countries,
   runtime,
   tagline
 } = data
 
 return(
   <header>
    <div  className="relative">
     <img src={backdrop_path ? MAIN_BACKDROP(backdrop_path) : MAIN_BACKDROP(poster_path)} className="w-full h-136 object-cover object-top"/>
     <div className="absolute bottom-0 w-full h-1/2 sliderGradient"></div>
    </div>
    <div className="px-6 -translate-y-16 flex flex-col justify-center items-center">
          <h2 className="text-white text-xl font-semibold break-all">{title ? title : name }</h2>
          <h3 className="mt-2 text-sm truncate w-full text-center">{tagline && tagline.replaceAll('.', '')}</h3>
      <ul className="mt-4">
        <li className="badge text-xs">{original_language && getFullLanguageName(original_language)}</li>
        <li className="badge text-xs">{release_date ? sliceYearFromDate(release_date) : first_air_date && sliceYearFromDate(first_air_date)}</li>
        <li className="badge text-3xl text-yellow-500">{vote_average ? vote_average : <span className="text-sm">Coming Soon</span>}</li>
        <li className="badge text-xs">{genres && genres.length && genres[0].name}</li>
        <li className="badge text-xs">+{genres && genres.length && getAgeLimit(genres[0].name)}</li>
       </ul>
       
       
       
      
       
       
       
    </div>
    <div className="px-6 -translate-y-8">
     <div className="flex justify-center items-center py-3 mb-5 rounded bg-primary text-white font-bold hover:saturate-150"><i className="ri-download-line"></i><span className="mx-2">Download</span></div>
     <p className="mb-1"><span className="text-primary">Director:</span> Fardin Tasou</p>
     <p>{overview}</p>
    <div className="mt-8 rounded overflow-hidden">
    
     <video controls
      controlsList="nodownload noplaybackrate"
      className="w-full aspect-video"
      onContextMenu={event => event.preventDefault()}
      src=""
      poster=""
     />
    </div>
    </div>
   </header>
   )
}
export default Hero;