import {Link} from 'react-router-dom'
import MovieInfo from "./MovieInfo"
import ganreIcon from '../../icons/ganre.svg'
import actorIcon from '../../icons/actor.svg'
import qualityIcon from '../../icons/badge-hd.svg'
import countryIcon from '../../icons/country.svg'
import directorIcon from '../../icons/director.svg'
import storyIcon from '../../icons/story.svg'
import yearIcon from '../../icons/year.svg'
const LastMovieCard = () => {
  const cover = "https://i.pinimg.com/736x/c7/6e/fd/c76efd9493bda833138d5fc5554ad8e6.jpg"
  const movieData = {
    id: 'xx92737492',
    nameEn: "Spiderman: HomeComing",
    nameFa: "مرد عنکبوتی:بازگشت به خانه",
    image: {cover},
    rate: "8.2",
    publish: "2021",
    ganre: "Action, Drama",
    quality: "Bluray",
    country: "USA",
    director: "Matthias Schweighöfer",
    stars: "Matthias Schweighöfer, Nathalie Emmanuel, Ruby O. Fee",
    story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus sapien, feugiat eu bibendum vitae, suscipit at tortor. Cras sodales id quam et rutrum. Duis orci velit, tincidunt vel augue et, pulvinar varius nisl..."
  }
  return(
    <div className=" relative bg-secondary rounded-lg overflow-hidden mb-8">
    
    <div className="absolute top-0 inset-x-0 flex justify-center mx-auto">
      <span 
       className={`text-3xl font-bold bg-natural rounded-b-xl py-3 w-16 flex justify-center items-center ${
         Number(movieData.rate) >= 7 ? 'text-emerald-600' : 'text-yellow-400'
       }`}>
       {movieData.rate}
       </span>
    </div>
     
     <img 
      src={cover}
      className="w-full h-128 object-cover shadow"
      />
      <div className="flex flex-col items-center mt-4">
      <h3 className="text-white text-lg font-bold">{movieData.nameEn}</h3>
      <h4>{movieData.nameFa}</h4>
      </div>
      
      <div className="py-5 px-4">
        <MovieInfo 
        icon={yearIcon} type="Publish Date: " value={movieData.publish}/>
        <MovieInfo 
        icon={ganreIcon} type="Ganre: " value={movieData.ganre}/>
        <MovieInfo 
        icon={qualityIcon} type="Quality: " value={movieData.quality}/>
        <MovieInfo 
        icon={countryIcon} type="Country: " value={movieData.country}/>
        <MovieInfo 
        icon={directorIcon} type="Director: " value={movieData.director}/>
        <MovieInfo 
        icon={actorIcon} type="Stars: " value={movieData.stars}/>
        <span className="w-full h-1 bg-natural block mb-2 rounded-full"></span>
        <div className="text-white">
       <MovieInfo
        icon={storyIcon} value={movieData.story}/>
        </div>
      </div>
      <button
       className="block ml-auto text-white bg-primary rounded-tl-lg font-bold p-4 hover:saturate-150 select-none">
       <Link to={`movie/${movieData.id}`}>
      More/Download
      </Link>
      </button>
    </div>
    )
}

export default LastMovieCard;