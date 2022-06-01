import { useState, useRef, useContext, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Account from '../../icons/account.png'
import UserDetails from '../Authentication/UserDetails'
//Login Context
import { LoginContextProvider } from '../../context/LoginContext'

const Searchbar = () => {
  const navigate = useNavigate()
  const buttonRef = useRef(null)
  const userData = useContext(LoginContextProvider)
  const [openDetails, setOpenDetails] = useState(false)
  const clickHandler = event => {
    if(buttonRef.current.classList.contains('ri-arrow-left-line'))
    {
      navigate(-1, {replace: true})
    }}
    
  const userDetailsHandler = () => {
    !openDetails ? setOpenDetails(true) : setOpenDetails(false)
  }
  return(
    <nav className="searchbarGradient h-16 absolute top-0 left-0 right-0 z-10 p-4 text-white">
    {openDetails && <UserDetails name={userData && userData.displayName} openDetails={setOpenDetails}/>}
     <ul className="flex justify-between items-center text-2xl">
      {
        userData ? <div onClick={userDetailsHandler} className="w-7 invert rounded-full overflow-hidden"><img src={userData.photoURL}/></div>
        : <Link to="/signin" className="w-7 invert rounded-full overflow-hidden"><img src={Account}/></Link>
      }
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