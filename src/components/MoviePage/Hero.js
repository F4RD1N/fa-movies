
const Hero = () => {
 const cover = "https://i.pinimg.com/originals/13/ce/63/13ce63119e9e7966586e1612b2ccecd6.jpg"
 return(
   <header>
    <div  className="relative">
     <img src={cover} className="w-full h-96 object-cover object-top"/>
     <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-natural to-transparent"></div>
    </div>
    <div className="px-6 -translate-y-16">
     <ul>
      <li className="font-bold text-4xl text-white mb-1">The 100</li>
      <li className="mb-4">Episode 3 <span className="text-white font-bold">Earth Skills</span></li>
      <li>
       <ul className="space-x-2">
        <li className="badge">13+</li>
        <li className="badge">2017</li>
        <li className="badge">Comedy</li>
        <li className="badge">USA</li>
        <li className="badge text-green-500">8.9</li>
       </ul>
      </li>
     </ul>
    </div>
    <div className="px-6 -translate-y-8">
     <div className="flex justify-center items-center py-3 mb-5 rounded-md bg-primary text-white font-bold hover:saturate-150"><i className="ri-download-line"></i><span className="mx-2">Download</span></div>
     <p className="mb-1"><span className="text-primary">Director:</span> Matthias Schweighöfer</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus sapien, feugiat eu bibendum vitae, suscipit at tortor. Cras sodales id quam et rutrum. Duis orci velit, tincidunt vel augue et, pulvinar varius nisl...</p>
    <div className="mt-8 rounded-md overflow-hidden ">
    
     <video controls
      controlsList="nodownload noplaybackrate"
      className="w-full aspect-video"
      onContextMenu={event => event.preventDefault()}
      src="https://hajifirouz12.cdn.asset.aparat.com/aparat-video/2217eb648819a878e51a46d59a978efa44719929-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImNiMTE3NzhkYzU5MWNkOGNjZDAwNmU5MTRkNTA4ZWE0IiwiZXhwIjoxNjUyMTE4MzUyLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.ac94-7c2yoDdHQzxKMtyjQtUxBoOqXuKf0S9A7MOmNM "
      poster="https://wallpapersmug.com/download/1600x900/9f1db3/game-uncharted-4-a-thiefs-end.jpg"
     />
    </div>
    </div>
   </header>
   )
}
export default Hero;