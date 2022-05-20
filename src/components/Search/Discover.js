import {useState, useEffect, useContext} from 'react'
import { DiscoverDataContext } from '../../context/DiscoverContext'
import { GENRES_ID } from '../../config/Config'
import { yearsList } from '../../utils/functions'
import { v4 } from 'uuid'
import SearchList from './SearchList'


const Discover = () => {
  const [genresList, setGenresList] = useState([])
  const [years, setYears] = useState([])
  const [queries, setQueries, data, type] = useContext(DiscoverDataContext)
  const [discoverData, setDiscoverData] = useState({
    type: 'movie',
    genre: '',
    language: '',
    release: ''
  })
  useEffect(() => {
    setYears(yearsList())
    for(const items in GENRES_ID) {
      setGenresList(prevState => [...prevState, {id: GENRES_ID[items], name: items}])
    }
  }, [])
  
  const inputHandler = event => {
    setDiscoverData({
      ...discoverData,
      [event.target.name]: event.target.value
    })
  }
  const sendQueryiesHandler = () => {
    setQueries(discoverData)
  }
  return (
    <section>
    <div className="bg-secondary text-white h-60 px-3 py-2">
     <label>Type:</label>
     <select name="type" onChange={inputHandler} value={discoverData.type} className="ml-2 p-1 rounded border-0 outline-0 bg-transparent">
     <option value="movie">Movie</option>
     <option value="tv">Tv</option>
     </select>
     <br /> <br />
     <label>Genre:</label>
     <select name="genre" onChange={inputHandler} value={discoverData.genre} className="ml-2 p-1 rounded border-0 outline-0 bg-transparent">
      <option value="">didnt set</option>
      {
        genresList.map(item => {
         return <option key={v4()} value={item.id}>{item.name}</option>
        })
      }
     </select>
     <br /> <br />
      <label>Language:</label>
           <select name="language" onChange={inputHandler} value={discoverData.lang} className="ml-2 p-1 rounded border-0 outline-0 bg-transparent">
      <option value="en">English</option>
      <option value="fa">Persian</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
      <option value="ru">Russian</option>
      <option value="ko">Korean</option>
     </select>
     <br /> <br />
     <label>Release Date:</label>
     <select name="release" onChange={inputHandler} value={discoverData.release} className="ml-2 p-1 rounded border-0 outline-0 bg-transparent">
      <option value="">didnt set</option>
             {
         years.map(item => {
         return <option key={v4()} value={item}>{item}</option>
         })
       }
     </select>
     <span onClick={sendQueryiesHandler} className="block w-fit p-2 rounded bg-primary ml-auto active:bg-red-500">Request</span>
    </div>
    <SearchList data={data} type={type} />
    </section>
    )
}

export default Discover;