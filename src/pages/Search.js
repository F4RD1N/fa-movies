import { useEffect, useState, useRef, useReducer } from 'react'
import { searchService } from '../services/searchService'

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
const Search = () => {
  const inputRef = useRef(null)
  const  [query, setQuery] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  
  useEffect(() => {
  const timeout = setTimeout(() => {
    dispatch({type: 'SET_LOADING'})
    const path = `language=en-US&query=${query}&page=1&include_adult=false`
    if(query){
    searchService(path)
      .then(res => {
        dispatch({type: 'SET_DATA', data: res.data.results})
      })
    }
  }, 600);
  return () => {
    clearTimeout(timeout);
  };
}, [query]);
  return(
    <section className="mt-20 px-5">
    <div className="flex">
     <div className="bg-white text-natural rounded flex justify-start items-center px-2 w-10/12">
     <i className="ri-search-line text-2xl"></i>
      <input 
        ref={inputRef}
        onChange={event => setQuery(event.target.value)}
        value={query}
        className="border-0 outline-0 bg-transparent px-3 py-2 rounded placeholder:text-sm placeholder:text-natural"
        placeholder="movie, series ..."/>
    </div>
      <span className="block bg-primary text-white w-12 ml-auto rounded flex justify-center items-center text-2xl">
        <i className="ri-filter-line"></i>
      </span>
     </div>
    </section>
    )
}

export default Search;