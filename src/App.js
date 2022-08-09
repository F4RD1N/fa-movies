import { Navigate, useLocation } from "react-router-dom";
import { Routes, Route, topbar } from "react-router-loading";
import { useState, useLayoutEffect, useEffect } from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieInfoContext from "./context/MovieInfoContext";
import SearchContext from "./context/SearchContext";
import DiscoverContext from "./context/DiscoverContext";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Searchbar from "./components/Home/Searchbar";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

//AuthContext
import { useAuthContext } from "./context/AuthContext";
import SocialMedia from "./components/SocialMedia/SocialMedia";

function App() {
  const { loading } = useAuthContext();

  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  useLayoutEffect(() => {
    switch (location.pathname) {
      case "/signin":
        return setShowNavbar(false);
      case "/signup":
        return setShowNavbar(false);
      default:
        return setShowNavbar(true);
    }
  }, [location]);

  useEffect(() => topbar.config({ barColors: { 1.0: "rgb(96,99,232)" } }), []);

  return (
    <div className="bg-natural text-textSecondary relative">
      {showNavbar && <Searchbar />}

      <Routes isLoading={loading}>
        <Route path="/" element={<Home />} />
        <Route
          path="/search"
          element={
            <SearchContext>
              <DiscoverContext>
                <Search />
              </DiscoverContext>
            </SearchContext>
          }
        />
        <Route
          path="movie/:id"
          element={
            <MovieInfoContext>
              <Movie />
            </MovieInfoContext>
          }
          loading
        />
        <Route
          path="tv/:id"
          element={
            <MovieInfoContext>
              <Movie />
            </MovieInfoContext>
          }
        />
        <Route path="signin/" element={<Login />} />
        <Route path="signup/" element={<Signup />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <SocialMedia />
    </div>
  );
}

export default App;
