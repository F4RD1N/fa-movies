import { useState, useEffect, useRef } from 'react'
const Searchbar = () => {
  const [SearchbarActive, setSearchbarActive] = useState(false)
  const searchInput = useRef(null)
  useEffect(() => {
    SearchbarActive && searchInput.current.focus()
  },[SearchbarActive])
  return(
    <nav className="searchbarGradient h-16 absolute top-0 left-0 right-0 z-10 p-4 text-white">
     <ul className={`${SearchbarActive ? 'hidden' : ''} flex justify-between items-center text-2xl`}>
      <li><i className="ri-menu-line"></i></li>
      <li className="appTitle">FaMovie</li>
      <li
       onClick={() => setSearchbarActive(true)}
      ><i className="ri-search-line"></i></li>
     </ul>
     
     <ul className={`${!SearchbarActive ? 'hidden' : ''} flex justify-between items-center text-2xl`}>
      <li
      onClick={() => setSearchbarActive(false)}
      ><i className="ri-arrow-left-line"></i></li>
      <li className="flex justify-center items-center">
        <input
         ref={searchInput}
         className="w-full outline-0 border-0 p-2 text-base placeholder:text-white bg-transparent"
         placeholder="looking for a movie?"/>
      </li>
      <li><i className="ri-settings-3-line"></i></li>
     </ul>
    </nav>
    )
}
  
  /*
  return (
    <div className="bg-secondary rounded-md overflow-hidden">
    <div className="flex justify-between items-center px-3 py-2">
     <button className="text-lg"><i className="ri-search-line"></i></button>
     <input 
      className="border-0 outline-0 bg-transparent placeholder:text-sm w-4/5"
      placeholder="Find your movie..."
      maxLength="40"
     />
     <button className="text-lg"><i className="ri-equalizer-line"></i></button>
     </div>
    </div>
    )
}
*/
export default Searchbar