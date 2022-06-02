import React, { useState, useReducer, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { movieDetailsService } from '../services/movieDetailsService'
import { MOVIE_DETAILS as movieDetails } from '../config/Config'
import { getCurrentPath } from '../utils/functions'
export const MovieDataContext = React.createContext(null)

const initialState = {
  isLoading: false,
  data: [],
  isError: false,
  errorMessage: null
}
const reducer = (state, action) => {
  switch(action.type){
    case 'SET_LOADING': 
      return {...state, isLoading: true};
    case 'SET_DATA':
      return {...state, isLoading: false, data: [...state.data, action.data]};
    case 'SET_ERROR':
      return { ...state, isLoading:false, isError: true, errorMessage: action.error}
    case 'SET_RESET':
      return initialState
    default:
      return state;
  }
}
const MovieInfoContext = ({ children }) => {
  const params = useParams()
  const location = useLocation()
  const currentPath = getCurrentPath(location.pathname)
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type:'SET_LOADING' })
    
    //if path paramater(id) chenges, the state will be reset and will push new data

    movieDetails.map(item => {
      const { id, name, type } = item
      movieDetailsService(currentPath, params.id, type)
        .then(response => {
          const preset = {
            id,
            name,
            currentPath,
            data: response.data
          }
          dispatch({
            type: 'SET_DATA',
            data: preset
          })
        })
    })
    return () => dispatch({type: 'SET_RESET'})
  }, [params])
  return(
    <MovieDataContext.Provider value={ state }>
     { state.data ? state.data.length >= movieDetails.length && children : '' }
    </MovieDataContext.Provider>
    )
}

export default MovieInfoContext;