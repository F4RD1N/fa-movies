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
      return {...state, isloading: false, data: action.data}
    case 'SET_ERROR':
      return {...state, isloading: false, isError: true, errorMessage: action.error}
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
        dispatch({type: 'SET_DATA', data: res.data.results})
        setTotalPages(res.data.total_pages)
      })
    }
  }, 500);
  return () => {
    clearTimeout(timeout);
  };
}, [location.search, currentYear, currentPage]);
return(
  <SearchDataContext.Provider value={[query, setQuery, state.data, currentYear, setCurrentYear,currentPage, setCurrentPage, totalPages]}>
   {children}
  </SearchDataContext.Provider>
  )
  
}

export default SearchContext