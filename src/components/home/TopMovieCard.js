const TopMovieCard = ({name, img, episodeNum, episodeName, rate}) => {
  return (
    <div 
     className="relative bg-secondary h-96 mx-2.5 mx-auto rounded-3xl overflow-hidden ">
     <img src={img} className="w-full h-full object-cover"/>
     <footer className="absolute bottom-0 p-4 z-10">
      <span>
       <span className="text-2xl text-yellow-300">{rate}</span>/<span>10</span>
      </span>
      <h3 className="title">{name}</h3>
      <h4>Episode {episodeNum} <span className="font-bold text-lg text-white">{episodeName}</span></h4>
     </footer>
     <div className="absolute bottom-0 right-0 left-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent"></div>
    </div>
    )
}

export default TopMovieCard;