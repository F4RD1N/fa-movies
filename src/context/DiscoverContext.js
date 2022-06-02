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
      return {...state, isloading: false, data: action.data, isError: false, errorMessage: null}
    case 'SET_ERROR':
      return {...state, isloading: false, isError: true, errorMessage: action.error}
    case 'SET_RESET':
      return initialState
    default:
      return state
  }
}
const DiscoverContext = ({children}) => {
  const [queries, setQueries] = useState({})
  const [state, dispatch] = useReducer(reducer, initialState)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  
  useEffect(() => {
  const timeout = setTimeout(() => {
    if(queries.type){
    dispatch({type: 'SET_LOADING'})
    discoverService(queries.type, queries.genre, queries.language, queries.release, currentPage)
      .then(res => {
        const results = res.data.results
      
        if(!results.length || (results.length == 1 && results[0].backdrop_path == null)) {
        dispatch({type: 'SET_ERROR', error: 'Nothing Found!'})
        }else {
        dispatch({type: 'SET_DATA', data: results})
        setTotalPages(res.data.total_pages);
        }
      })
       .catch(err => {
        dispatch({type: 'SET_ERROR', error: err.message})
      })
    }
  }, 500);
  return () => {
    clearTimeout(timeout);
    dispatch({type:'SET_RESET'})
  };
}, [queries, currentPage]);
return(
  <DiscoverDataContext.Provider value={[queries, setQueries, state, queries.type, currentPage, setCurrentPage, totalPages]}>
   {children}
  </DiscoverDataContext.Provider>
  )
  
}

export default DiscoverContext;