import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom' 
import { getCurrentPath } from '../utils/functions'
import {MovieDataContext} from '../context/MovieInfoContext'
import { ScrollToTop } from 'react-router-scroll-to-top';
import Hero from '../components/MoviePage/Hero'
import MoreInfo from '../components/MoviePage/MoreInfo'
import Sections from '../components/Home/Sections'
import Comments from '../components/MoviePage/Comments'

const MoviePage = () => {
  const location = useLocation()
  const currentPath = getCurrentPath(location.pathname).replaceAll('/','')

  const { data } = useContext(MovieDataContext)
  const [movieData, setMovieData] = useState({
    mainDetails: {},
    credits: [],
    reviews: [],
    similar: []
  })
  
  useEffect(() => {
     data.map(item => {
           switch(item.name) {
           case 'mainDetails':
             return setMovieData(prevState => {
               return {...prevState, mainDetails: item.data}
             })
           case 'credits':
             return setMovieData(prevState => {
               return {...prevState, credits: item.data.cast}
             })
           case 'reviews':
             return setMovieData(prevState => {
               return {...prevState, reviews: item.data.results}
             })
           case 'similarMovies':
             return setMovieData(prevState => {
               return {...prevState, similar: item.data.results}
             })
           default:
             return item
         }
     })
  }, [])
  return(
    <>
    <ScrollToTop />
     <section className="pb-6">
       <Hero data={movieData.mainDetails}/>
       <div className="px-6">
         <MoreInfo  data={movieData.credits}/>
         <Sections title="Similar Movies" data={movieData.similar} type={currentPath && currentPath}/>
       <Comments data={movieData.reviews}/>
       </div>
     </section>
    </>
    )
}

export default MoviePage;