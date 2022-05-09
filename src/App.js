import {Routes,Route, Navigate} from 'react-router-dom'
import { ScrollToTop } from 'react-router-scroll-to-top';
import './App.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Home from './components/home/Home'
import MoviePage from './components/MoviePage/MoviePage'
function App() {
  return (
    <div className="bg-natural text-textSecondary">
     <ScrollToTop />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<MoviePage />} />
      
      
      <Route path="*" element={<Navigate to="/" />} />
     </Routes>
    </div>
  );
}

export default App;


