import SearchBar from './Navbar'
import Catagories from './Catagories'
import TopMovies from './TopMovies'
import LastMovies from './LastMovies'
import Sections from './Sections'
import News from './News'
const Home = () => {
  return (
   <div className="py-6">
    <div className="px-6">
     <SearchBar />
     <Catagories />
    </div>
     <TopMovies />
     <div className="px-6">
      <LastMovies />
     <Sections title="Popular"/>
     <Sections title="Most Viewed"/>
     <News />
     </div>
   </div>
    )
}
export default Home;