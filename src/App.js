import {Routes,Route, Navigate, useLocation} from 'react-router-dom'
import { useState, useLayoutEffect } from 'react'
import { ScrollToTop } from 'react-router-scroll-to-top';
import './App.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import MovieInfoContext from './context/MovieInfoContext'
import SearchContext from './context/SearchContext'
import DiscoverContext from './context/DiscoverContext'
import { useAuthContext } from './context/AuthContext'
import HomePage from './pages/Home'
import MoviePage from './pages/MoviePage'
import Searchbar from './components/Home/Searchbar'
import Search from './pages/Search'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import AddMovie from './components/AddMovie/AddMovie'
import Loading from './components/Authentication/Loading'

function App() {
  const location = useLocation()
  const [showNavbar, setShowNavbar] = useState(true)
  const { loading } = useAuthContext()
  useLayoutEffect(() => {
    switch(location.pathname) {
      case '/signin':
        return setShowNavbar(false)
      case '/signup':
        return setShowNavbar(false)
      default:
        return setShowNavbar(true)
    }
  }, [location])
  return (
    <div className="bg-natural text-textSecondary">
        <Loading isLoading={loading}/>
     <ScrollToTop />
     {
       showNavbar && <Searchbar />
     }
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route 
        path="/search" 
        element={
            <SearchContext>
             <DiscoverContext>
              <Search /> 
             </DiscoverContext>
            </SearchContext>}
      />
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
      <Route path="signin/" element={<LoginPage />} />
      <Route path="signup/" element={<SignupPage />} />
      <Route path="add/" element={<AddMovie />} />
      
      <Route path="*" element={<Navigate to="/" />} />
     </Routes>
    </div>
  );
}

export default App;


