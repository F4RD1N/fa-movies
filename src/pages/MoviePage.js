import { useContext, useEffect, useState } from 'react'
import { MainContext } from '../context/ContextData'
import { useParams } from 'react-router-dom'
import Hero from '../components/MoviePage/Hero'
import MoreInfo from '../components/MoviePage/MoreInfo'
import Sections from '../components/Home/Sections'
import Comments from '../components/MoviePage/Comments'
const MoviePage = () => {
  const dataContext = useContext(MainContext)
  const params = useParams()
  const [data, setData] = useState({})
  useEffect(() => {
    dataContext.map(item => {
      if(item.id == params.id) {
        setData(item)
      }
    })
  }, [dataContext])
  return(
     <section className="pb-6">
     <Hero data={data}/>
     <div className="px-6">
      <MoreInfo data={data} />
     <Sections title="Related" />
     <Comments data={data.comments}/>
     </div>
     </section>
    )
}

export default MoviePage;