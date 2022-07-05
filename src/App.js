import { Navigate, useLocation } from "react-router-dom";
import { Routes, Route, topbar } from "react-router-loading";
import { useState, useLayoutEffect, useEffect } from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieInfoContext from "./context/MovieInfoContext";
import SearchContext from "./context/SearchContext";
import DiscoverContext from "./context/DiscoverContext";
import HomePage from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import Searchbar from "./components/Home/Searchbar";
import Search from "./pages/Search";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

//AuthContext
import { useAuthContext } from "./context/AuthContext";

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
    <div className="bg-natural text-textSecondary">
      {showNavbar && <Searchbar />}

      <Routes isLoading={loading}>
        <Route path="/" element={<HomePage />} />
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
              <MoviePage />
            </MovieInfoContext>
          }
          loading
        />
        <Route
          path="tv/:id"
          element={
            <MovieInfoContext>
              <MoviePage />
            </MovieInfoContext>
          }
        />
        <Route path="signin/" element={<LoginPage />} />
        <Route path="signup/" element={<SignupPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
