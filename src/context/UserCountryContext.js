import React, { useContext, useEffect, useState, useReducer } from "react";
import { useLocation } from "react-router-dom";
import { userCountryService } from "../services/userCountryService";
import ErrorPage from "../pages/ErrorPage";
export const UserCountryContextProvider = React.createContext();
export const useUserCountry = () => useContext(UserCountryContextProvider);

const initialState = {
  isLoading: true,
  data: "",
  isError: false,
  errMessage: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, isLoading: false, data: action.data };
    case "SET_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errMessage: action.err,
      };
    case "SET_RESET":
      return initialState;
    default:
      return state;
  }
};
const UserCountryContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const location = useLocation();
  useEffect(() => {
    const getUserCountry = () => {
      userCountryService()
        .then((res) =>
          dispatch({ type: "SET_DATA", data: res.data.countryName })
        )
        .catch((err) => dispatch({ type: "SET_ERROR", err: err.message }));
    };
    getUserCountry();
  }, [location.pathname]);

  const contextValue = {
    state,
  };
  return (
    <UserCountryContextProvider.Provider value={contextValue}>
      {!state.isLoading && (state.data === "Iran" ? <ErrorPage /> : children)}
    </UserCountryContextProvider.Provider>
  );
};

export default UserCountryContext;
