import React, { useState, useEffect } from 'react'
import {getJSON} from '../services/getJSON'
export const MainContext = React.createContext()

const ContextData = ({ children }) => {
  const [data, setData] = useState([])
  useEffect(() => {
   getJSON()
    .then(data => setData(data.data))
  }, [])
  
  return(
    <MainContext.Provider value={ data }>
     { children }
    </MainContext.Provider>
    )
}

export default ContextData;