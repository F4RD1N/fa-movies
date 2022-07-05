import React, { useState, useReducer, useEffect } from "react";
//import { useLoadingContext } from "react-router-loading";
import { homeListService } from "../services/homeListService";
import { HOME_LIST_TYPE as homeListType } from "../config/Config";
import { setOrderArrayById } from "../utils/functions";
//Loading Component
import MainLoading from "../components/MainLoading";

export const HomeListContext = React.createContext(null);

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
      return {
        ...state,
        data: setOrderArrayById([...state.data, action.data]),
      };
    case "SET_ERROR":
      return { ...state, isError: true, errorMessage: action.error };
    case "SET_RESET":
      return initialState;
    default:
      return state;
  }
};
const HomeContext = ({ children }) => {
  // const loadingContext = useLoadingContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    homeListType.map((typeItem) => {
      const {
        id,
        title,
        path,
        page,
        mode,
        genre,
        query,
        originalLanguage,
        type,
      } = typeItem;
      homeListService(path, page, genre, query, originalLanguage)
        .then((response) => {
          const preset = {
            id,
            title,
            mode,
            type,
            data: response.data.results,
          };
          dispatch({
            type: "SET_DATA",
            data: preset,
          });
        })
        .catch((err) => {
          dispatch({
            type: "SET_ERROR",
            error: err.message,
          });
        })
        .finally(() => {
          dispatch({ type: "SET_DONE" });
          // loadingContext.done()
        });
    });
    return () => dispatch({ type: "SET_RESET" });
  }, []);
  return (
    <HomeListContext.Provider value={state}>
      {!state.isLoading ? children : <MainLoading />}
    </HomeListContext.Provider>
  );
};

export default HomeContext;
