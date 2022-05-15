import React, { useState, useReducer, useEffect } from 'react'
import { homeListService } from '../services/homeListService'
import { HOME_LIST_TYPE as homeListType} from '../config/Config'

export const HomeListContext = React.createContext(null)

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
    default:
      return state;
  }
}
const HomeContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type:'SET_LOADING' })
    
    homeListType.map(typeItem => {
      const { id, title, path, page, mode, genre, query, originalLanguage} = typeItem
      homeListService(path, page, genre, query, originalLanguage)
        .then(response => {
          const preset = {
            id, 
            title, 
            mode,
            data: response.data.results
          }
          dispatch({
            type: 'SET_DATA',
            data: preset
          })
        })
        .catch(err => {
          dispatch({
            type: 'SET_ERROR',
            error: err.message
          })
        })
    })
  }, [])
  return(
    <HomeListContext.Provider value={ state }>
    {state.isError && console.log(state.errorMessage)}
     {state.data.length != homeListType.length && <p>Loading . . .</p> }
     { children }
    </HomeListContext.Provider>
    )
}

export default HomeContext;