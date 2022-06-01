import { signOut } from "firebase/auth";
import { auth } from '../../config/Firebase'

import { useNavigate } from 'react-router-dom'
const UserDetails = ({name, openDetails}) => {
  const navigate = useNavigate()
  const logoutHandler = async () => {
    await signOut(auth)
    navigate('/')
    openDetails(false)
  }
  return(
     <div className="absolute w-40 overflow-hidden bg-secondary top-14 left-5 rounded">
      <ul>
        <li className="px-2 h-10 flex flex-col justify-center border-b-2 border-gray-900">{name}</li>
        <li onClick={logoutHandler} className="px-2 hover:bg-red-500 active:bg-red-600  h-10 flex flex-col justify-center">Logout</li>
      </ul>
     </div>
    )
}

export default UserDetails