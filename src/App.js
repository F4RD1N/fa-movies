import {Routes,Route, Navigate, useLocation} from 'react-router-dom'
import { ScrollToTop } from 'react-router-scroll-to-top';
import './App.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import MovieInfoContext from './context/MovieInfoContext'
import HomePage from './pages/Home'
import MoviePage from './pages/MoviePage'
import Searchbar from './components/Home/Searchbar'
import Search from './pages/Search'
import AddMovie from './components/AddMovie/AddMovie'

function App() {
  const location = useLocation()
  return (
    <div className="bg-natural text-textSecondary">
     <ScrollToTop />
     <Searchbar />
     <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<Search />} />
      <Route 
        path="movie/:id" 
        element={
            <MovieInfoContext>
              <MoviePage /> 
            </MovieInfoContext>}
      />
      <Route 
        path="tv/:id" 
        element={
            <MovieInfoContext>
              <MoviePage /> 
            </MovieInfoContext>}
      />
      <Route path="add/" element={<AddMovie />} />
      
      <Route path="*" element={<Navigate to="/" />} />
     </Routes>
    </div>
  );
}

export default App;


