import { useState, useEffect } from 'react'
import { useNavigate, Link} from 'react-router-dom'

//Components
import Input from './Input'
import Alert from './Alert'
import Loading from './Loading'
import OtherMethods from './OtherMethods'

//AuthContext
import { useAuthContext } from '../../context/AuthContext'

const Login  = () => {
  const navigate = useNavigate()
  const {
    signInUser,
    error, 
    loading, 
    alertTimer,
    } = useAuthContext()
  
  const [inputValue, setInputValue] = useState({
    email: null,
    password: null
  })

  const inputHandler = event => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value
    })
  }
  
  const onSubmit = () => {
    console.log(loading)
    if(!loading) {
      const {email, password} = inputValue
      email && password && signInUser(email, password)
    }
  }
  const goBackHandler = () => {
    navigate(-1, {replace: true})
  }
  return(
    <section>
    <div className="mt-5 ml-5">
    <i 
       className="text-2xl text-white ri-arrow-left-line"
       onClick={goBackHandler}></i>
    </div>
    <div 
      className="mt-12 px-12 flex flex-col">
     <h2 className="text-xl text-white text-left mb-4">Login to your Account</h2>
     <Input name="Email" type="email" changeHandler={inputHandler}/>
     <Input name="Password" type="password" changeHandler={inputHandler}/>
     
     <button disabled={loading || alertTimer && true} className="bg-primary text-white text-center rounded py-3 mt-3" onClick={onSubmit}>Sign in</button>
     
     <span className="text-center mt-10">-Or sign in with-</span>
     <span className="flex justify-center"><hr className="border-secondary border-t-4 mt-3 w-10/12"/></span>
    
      <OtherMethods />
     
     <span className="text-center mt-10">Dont have an account?<span className="text-primary underline">
    { !loading && <Link to="/signup"> Sign up</Link> }
     </span>
     </span>
     
    <Alert text={error} type="error" timer={alertTimer}/>
    <Loading />
    </div>
    </section>
    )
}


export default Login