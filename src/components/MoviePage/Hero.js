import { MAIN_BACKDROP } from '../../config/Config'

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
   <section>
    <div className="px-6">
     <div className="flex justify-center items-center py-3 mb-5 rounded bg-primary text-white font-bold active:saturate-150"><i className="ri-download-line"></i><span className="mx-2">Download</span></div>
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
   </section>
   )
}
export default Hero;
