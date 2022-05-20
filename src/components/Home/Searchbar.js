import { useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const Searchbar = () => {
  const navigate = useNavigate()
  const buttonRef = useRef(null)
  
  
  const clickHandler = event => {
    if(buttonRef.current.classList.contains('ri-arrow-left-line')){
      navigate(-1, {replace: true})
    }
    
  }
  return(
    <nav className="searchbarGradient h-16 absolute top-0 left-0 right-0 z-10 p-4 text-white">
     <ul className="flex justify-between items-center text-2xl">
      <li><i className="ri-menu-line"></i></li>
      <li className="appTitle">FaMovie</li>
      <NavLink 
         ref={buttonRef}
         onClick={clickHandler}
         to="/search?query="
         className={({isActive}) => isActive ? 'ri-arrow-left-line' : 'ri-search-line'}>
      </NavLink>
     </ul>
   
    </nav>
    )
}
  
export default Searchbar