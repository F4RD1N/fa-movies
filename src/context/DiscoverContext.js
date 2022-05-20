import React, { useEffect, useReducer, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { discoverService } from '../services/discoverService'
import { queryString } from '../utils/functions'

export const DiscoverDataContext = React.createContext(null)

const initialState = {
  isloading: false,
  data: [],
  isError: false,
  errorMessage: null
}
const reducer = (state, action) => {
  switch(action.type){
    case 'SET_LOADING':
      return {...state, isloading: true}
    case 'SET_DATA': 
      return {...state, isloading: false, data: action.data}
    case 'SET_ERROR':
      return {...state, isloading: false, isError: true, errorMessage: action.error}
    default:
      return state
  }
}
const DiscoverContext = ({children}) => {
  const [queries, setQueries] = useState({})
  const [state, dispatch] = useReducer(reducer, initialState)
  
  
  useEffect(() => {
  const timeout = setTimeout(() => {
    dispatch({type: 'SET_LOADING'})
    
    if(queries.type){
    discoverService(queries.type, queries.genre, queries.language, queries.release)
      .then(res => {
        dispatch({type: 'SET_DATA', data: res.data.results})
      })
    }
  }, 500);
  return () => {
    clearTimeout(timeout);
  };
}, [queries]);
return(
  <DiscoverDataContext.Provider value={[queries, setQueries, state.data, queries.type]}>
   {children}
  </DiscoverDataContext.Provider>
  )
  
}

export default DiscoverContext;