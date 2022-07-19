import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getCurrentPath, sliceTitle } from "../utils/functions";
import { MovieDataContext } from "../context/MovieInfoContext";
import { ScrollToTop } from "react-router-scroll-to-top";
import Header from "../components/MoviePage/Header";
import Hero from "../components/MoviePage/Hero";
import MoreInfo from "../components/MoviePage/MoreInfo";
import Sections from "../components/Home/Sections";
import Comments from "../components/MoviePage/Comments";
import Footer from '../components/Footer/Footer'

const MoviePage = () => {
  const location = useLocation();
  const currentPath = getCurrentPath(location.pathname).replaceAll("/", "");

  const { data, isLoading } = useContext(MovieDataContext);
  const [movieData, setMovieData] = useState({
    mainDetails: {},
    credits: [],
    reviews: [],
    similar: [],
    videos: [],
    recommendations: [],
  });
  const { mainDetails } = movieData;
  const movieTitle = mainDetails.title
    ? mainDetails.title
    : mainDetails.original_title
    ? mainDetails.original_title
    : mainDetails.name;

  useEffect(() => {
    data.map((item) => {
      switch (item.name) {
        case "mainDetails":
          return setMovieData((prevState) => {
            return { ...prevState, mainDetails: item.data };
          });
        case "credits":
          return setMovieData((prevState) => {
            return { ...prevState, credits: item.data.cast };
          });
        case "reviews":
          return setMovieData((prevState) => {
            return { ...prevState, reviews: item.data.results };
          });
        case "similarMovies":
          return setMovieData((prevState) => {
            return { ...prevState, similar: item.data.results };
          });
        case "videos":
          return setMovieData((prevState) => {
            return { ...prevState, videos: item.data.results };
          });
        case "recommendations":
          return setMovieData((prevState) => {
            return { ...prevState, recommendations: item.data.results };
          });
        default:
          return item;
      }
    });
  }, []);
  return (
    <>
      <ScrollToTop />
      <section className="pb-6">
        <Header data={movieData.mainDetails} />
        <Hero data={movieData.mainDetails} trailer={movieData.videos[0]} />
        <div className="px-6">
          <MoreInfo data={movieData.credits} />
          <Sections
            title={`Similar with "${movieTitle && sliceTitle(movieTitle)}"`}
            data={movieData.similar}
            type={currentPath && currentPath}
          />
          {movieData.recommendations.length > 2 && (
            <Sections
              title="Recommended"
              data={movieData.recommendations}
              type={currentPath && currentPath}
            />
          )}
          <Comments data={movieData.reviews} />
        </div>
        
      </section>
      {
          !isLoading && <Footer />
        }
    </>
  );
};

export default MoviePage;
