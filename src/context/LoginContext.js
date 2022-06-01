import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

//Firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../config/Firebase'

export const LoginContextProvider = React.createContext()

const LoginContext = ({children}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [userData, setUserData] = useState(null)
  
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      console.log(user)
      setUserData(user)
    });
    location.pathname == '/signin' && userData && navigate('/', {replace: true})
  }, [userData])
  return(
    <LoginContextProvider.Provider value={userData}>
      {children}
    </LoginContextProvider.Provider>
    )
}


export default LoginContext