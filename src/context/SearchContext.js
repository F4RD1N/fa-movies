import React, { useEffect, useReducer, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { searchService } from '../services/searchService'
import { queryString } from '../utils/functions'

export const SearchDataContext = React.createContext(null)

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
const SearchContext = ({children}) => {
  const [query, setQuery] = useState('')
  const [currentYear, setCurrentYear] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [state, dispatch] = useReducer(reducer, initialState)
  const navigate = useNavigate()
  const location = useLocation()
  
  useEffect(() => {
      setCurrentPage(1)
      navigate(`?query=${query}`, {replace: true})
  }, [query])

  
  
  useEffect(() => {
    //currentPage == false && setCurrentPage(1)
  const timeout = setTimeout(() => {
    dispatch({type: 'SET_LOADING'})
    const url = queryString(location.search)
    const path = `language=en-US&query=${url}&include_adult=false&year=${currentYear}&page=${currentPage}`
    if(query){
    searchService(path)
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
    }else dispatch({type: 'SET_RESET'})
  }, 700);
  return () => {
    clearTimeout(timeout);
    dispatch({type: 'SET_RESET'})
  };
}, [location.search, currentYear, currentPage]);
return(
  <SearchDataContext.Provider value={[query, setQuery, state, currentYear, setCurrentYear,currentPage, setCurrentPage, totalPages]}>
   {children}
  </SearchDataContext.Provider>
  )
  
}

export default SearchContext