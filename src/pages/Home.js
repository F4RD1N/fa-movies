import { useEffect, useState, useContext } from 'react'
import { HomeListContext } from '../context/HomeContext'
import Slider from '../components/Home/Slider'
import SearchBar from '../components/Home/Navbar'
import Catagories from '../components/Home/Catagories'
import HorizontalSections from '../components/Home/HorizontalSections'
import LastMovies from '../components/Home/LastMovies'
import Sections from '../components/Home/Sections'
import News from '../components/Home/News'

const Home = () => {
  const {isLoading, data: listData, isError, errorMessage} = useContext(HomeListContext)
  return (
    <>
    <Slider />
   <div className="py-6">
    {/*<div className="px-6">
     <SearchBar />
     <Catagories />
    </div>
      <LastMovies/>*/}
     <div className="px-5">
     {
       !isLoading && listData.map(item => {
         const { id, title, data } = item
         if(item.mode == 'horizontal')
           return (<HorizontalSections 
                     key={id} 
                     title={title}
                     data={data}/>);
         else if(item.mode == 'vertical')
           return (<Sections 
                      key={id} 
                      data={data} 
                      title={title}/>);
       })
     }
     </div>
   </div>
   </>
    )
}
export default Home;