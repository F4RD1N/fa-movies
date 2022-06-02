import { useState, useEffect } from 'react'
import { authErrorCodes, alertTypes } from '../../utils/functions'
const Alert = ({text, type, timer}) => {
  return(
    <>
     {
     timer && text && <div className={`${alertTypes(type)} alertAnimate`}>
       {text && authErrorCodes(text)}
     </div>
     }
     </>
    )
}

export default Alert