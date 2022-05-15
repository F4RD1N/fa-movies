const Hero = ({data}) => {
  const { 
    poster,
    nameEn,
    episodeNum,
    episodeName,
    year,
    ganre,
    imdb,
    country,
    director,
    age,
    story,
    trailer,
    pictures
  } = data
 
 return(
   <header>
    <div  className="relative">
     <img src={poster} className="w-full h-96 object-cover object-top"/>
     <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-natural to-transparent"></div>
    </div>
    <div className="px-6 -translate-y-16">
     <ul>
      <li className="font-bold text-2xl text-white mb-1">{nameEn}</li>
      <li className="mb-4">{episodeNum}<span className="text-white font-bold">{episodeName}</span></li>
      <li>
       <ul className="space-x-2">
        <li className="badge">{age}+</li>
        <li className="badge">{year}</li>
        <li className="badge">{ ganre && ganre[1] }</li>
        <li className="badge">{country}</li>
        <li className="badge text-yellow-500">{imdb}</li>
       </ul>
      </li>
     </ul>
    </div>
    <div className="px-6 -translate-y-8">
     <div className="flex justify-center items-center py-3 mb-5 rounded-md bg-primary text-white font-bold hover:saturate-150"><i className="ri-download-line"></i><span className="mx-2">Download</span></div>
     <p className="mb-1"><span className="text-primary">Director:</span> {director}</p>
     <p>{story}</p>
    <div className="mt-8 rounded-md overflow-hidden">
    
     <video controls
      controlsList="nodownload noplaybackrate"
      className="w-full aspect-video"
      onContextMenu={event => event.preventDefault()}
      src={trailer}
      poster={pictures && pictures[2]}
     />
    </div>
    </div>
   </header>
   )
}
export default Hero;