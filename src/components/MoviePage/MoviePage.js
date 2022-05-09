import Hero from './Hero'
import MoreInfo from './MoreInfo'
import Sections from '../home/Sections'
import Comments from './Comments'
const MoviePage = () => {
  return(
     <section className="pb-6">
     <Hero />
     <div className="px-6">
      <MoreInfo />
     <Sections title="Related" />
     <Comments />
     </div>
     </section>
    )
}

export default MoviePage;