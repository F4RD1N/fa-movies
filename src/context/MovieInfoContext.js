import React, { useState, useReducer, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useLoadingContext } from "react-router-loading";
import { movieDetailsService } from "../services/movieDetailsService";
import { MOVIE_DETAILS as movieDetails } from "../config/Config";
import { getCurrentPath } from "../utils/functions";

//Loading Component
import MainLoading from "../components/MainLoading";

export const MovieDataContext = React.createContext(null);

const initialState = {
  isLoading: true,
  data: [],
  isError: false,
  errorMessage: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DONE":
      return { ...state, isLoading: false };
    case "SET_DATA":
      return { ...state, data: [...state.data, action.data] };
    case "SET_ERROR":
      return { ...state, isError: true, errorMessage: action.error };
    case "SET_RESET":
      return initialState;
    default:
      return state;
  }
};
const MovieInfoContext = ({ children }) => {
  const loadingContext = useLoadingContext();
  const params = useParams();
  const location = useLocation();
  const currentPath = getCurrentPath(location.pathname);
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    if (state.data.length > movieDetails.length) {
      dispatch({ type: "SET_RESET" });
      console.log(state.data.length);
    }
    movieDetails.map((item) => {
      const { id, name, type } = item;
      movieDetailsService(currentPath, params.id, type)
        .then((response) => {
          const preset = {
            id,
            name,
            currentPath,
            data: response.data,
          };
          dispatch({
            type: "SET_DATA",
            data: preset,
          });
        })
        .catch((err) => dispatch({ type: "SET_ERROR", error: err }))
        .finally(() => {
          dispatch({ type: "SET_DONE" });
          loadingContext.done();
        });
    });
    return () => dispatch({ type: "SET_RESET" });
  }, [params]);
  return (
    <MovieDataContext.Provider value={state}>
      {!state.isLoading ? (
        state.data && state.data.length >= movieDetails.length && children
      ) : (
        <MainLoading />
      )}
    </MovieDataContext.Provider>
  );
};

export default MovieInfoContext;
