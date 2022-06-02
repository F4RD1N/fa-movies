import { useContext } from 'react'
import { HomeListContext } from '../context/HomeContext'
import Slider from '../components/Home/Slider'
import HorizontalSections from '../components/Home/HorizontalSections'
import Sections from '../components/Home/Sections'

//Auth and success alert
import Alert from '../components/Authentication/Alert'
import { useAuthContext } from '../context/AuthContext'

const Home = () => {
  const {
    isLoading, 
    data: listData, 
    isError, 
    errorMessage
  } = useContext(HomeListContext)
  
  const {
    success,
    alertTimer
  } = useAuthContext()
  return (
    <section className="relative overflow-hidden">
    
    
    <div className="absolute text-white top-0 right-0 left-0 mt-10 h-16 z-10 pointer-events-none">
    <Alert text={success} type="success" timer={alertTimer}/>
    </div>
    
    
    <Slider />
   <div className="py-6">
     <div className="px-5">
     {
       !isLoading && listData.map(item => {
         const { id, title, data, type } = item
         if(item.mode == 'horizontal')
           return (<HorizontalSections 
                     key={id} 
                     title={title}
                     type={type}
                     data={data}/>);
         else if(item.mode == 'vertical')
           return (<Sections 
                      key={id} 
                      data={data} 
                      type={type}
                      title={title}/>);
       })
     }
     </div>
   </div>
   </section>
    )
}
export default Home;