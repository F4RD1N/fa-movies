import { useState, useRef, useEffect, useContext } from 'react'
import { v4 } from 'uuid'
import SearchList from '../components/Search/SearchList'
import Discover from '../components/Search/Discover'
import PageHandler from '../components/Search/PageHandler'
import { SearchDataContext } from '../context/SearchContext'
import { yearsList } from '../utils/functions'


const Search = () => {
  const [query, setQuery, data, currentYear, setCurrentYear, currentPage, setCurrentPage, totalPages] = useContext(SearchDataContext)
  const inputRef = useRef(null)
  const selectRef = useRef(null)
  const [isFilterClicked, setIsFilterClicked] = useState(false)
  const [years, setYears] = useState([])
  const [isDiscover, setIsDiscover] = useState(false)
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  useEffect(() => {
     setYears(yearsList())
    return () => setYears([])
  }, [])
  return(
    <section className="mt-20 px-5">
    <ul className="mb-5 text-lg flex justify-center items-center space-x-3">
     <li className={`${!isDiscover && 'text-white border-b-4 border-primary'}`}
       onClick={() => setIsDiscover(false)}>Search</li>
     <li className={`${isDiscover && 'text-white border-b-4 border-primary'}`}
       onClick={() => setIsDiscover(true)}>Discover</li>
    </ul>
    {
      !isDiscover ? 
      <>
 <div className="flex">
     <div className="bg-white text-natural rounded flex justify-start items-center px-2 w-10/12">
     <i className="ri-search-line text-2xl"></i>
      <input 
        ref={inputRef}
        onChange={event => setQuery(event.target.value)}
        value={query}
        autoComplete="off"
        className="border-0 outline-0 bg-transparent px-3 py-2 rounded placeholder:text-sm placeholder:text-natural"
        placeholder="movie, series ..."/>
    </div>
      <span
        className="relative block bg-primary text-white w-12 ml-auto rounded flex justify-center items-center text-2xl">
        <i className="ri-calendar-line"></i>
      <select 
         value={currentYear}
         onChange={event => setCurrentYear(event.target.value)}
         className="absolute inset-0 opacity-0" ref={selectRef}>
        <option value="">unset</option>
       {
         years.map(item => {
         return <option key={v4()} value={item}>{item}</option>
         })
       }
      </select>
      </span>
     </div>
     <SearchList data={data}/>
     <PageHandler data={data} page={currentPage} setPage={setCurrentPage} totalPages={totalPages}/>
     </>
    : <Discover />
    }
    </section>
    )
}

export default Search;