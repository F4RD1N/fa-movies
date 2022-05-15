import {Routes,Route, Navigate} from 'react-router-dom'
import { ScrollToTop } from 'react-router-scroll-to-top';
import './App.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import HomePage from './pages/Home'
import MoviePage from './pages/MoviePage'
import AddMovie from './components/AddMovie/AddMovie'
function App() {
  return (
    <div className="bg-natural text-textSecondary">
     <ScrollToTop />
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="movie/:id" element={<MoviePage />} />
      <Route path="add/" element={<AddMovie />} />
      
      <Route path="*" element={<Navigate to="/" />} />
     </Routes>
    </div>
  );
}

export default App;


