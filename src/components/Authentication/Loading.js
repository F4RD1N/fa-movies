import { useState, useEffect } from 'react'
import { authErrorCodes, alertTypes } from '../../utils/functions'
const Loading = ({isLoading}) => {

  return(
    <>
     { isLoading &&
     <div className="loadingAnimate z-30">
     </div>
       
     }
     </>
    )
}

export default Loading