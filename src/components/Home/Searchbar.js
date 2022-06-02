import { useState, useRef, useContext, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Account from '../../icons/account.png'
import UserDetails from '../Authentication/UserDetails'
//Login Context
import { useAuthContext } from '../../context/AuthContext'

const Searchbar = () => {
  const navigate = useNavigate()
  const buttonRef = useRef(null)
  const {user} = useAuthContext()
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
    <nav className="searchbarGradient h-16 absolute top-0 left-0 right-0 z-20 p-4 text-white">
    {openDetails && <UserDetails name={user && user.displayName} openDetails={setOpenDetails}/>}
     <ul className="flex justify-between items-center text-2xl">
      {
        user ? <div onClick={userDetailsHandler} className="w-7 invert rounded-full overflow-hidden">{user.photoURL ? <img src={user.photoURL}/> : <div className="w-7 h-7 bg-red-500 flex justify-center items-center text-base  ">{user.displayName && user.displayName.slice(0,1)}</div>}</div>
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