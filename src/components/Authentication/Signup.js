import { useState } from 'react'
import { Link } from 'react-router-dom'

//Components
import Input from './Input'
import Alert from './Alert'
import Loading from './Loading'
import OtherMethods from './OtherMethods'

//AuthContext
import { useAuthContext } from '../../context/AuthContext'


const Signup  = () => {
  const {
    registerUser, 
    error, 
    loading, 
    alertTimer
    } = useAuthContext()
  const [inputValue, setInputValue] = useState({
    name: null,
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
    const {name, email, password} = inputValue
    name && email && password && registerUser(name, email, password)
  }
  return(
    <section 
      className="mt-16 px-12 flex flex-col">
     <h2 className="text-xl text-white text-left mb-4">Create a new Account</h2>
     <Input name="Name" type="text" changeHandler={inputHandler}/>
     <Input name="Email" type="text" changeHandler={inputHandler}/>
     <Input name="Password" type="password" changeHandler={inputHandler}/>
     
     <button disabled={loading || alertTimer && true} className="bg-primary text-white text-center rounded py-3 mt-3" onClick={onSubmit}>Register</button>
     
     <span className="text-center mt-10">-Or sign up with-</span>
     <span className="flex justify-center"><hr className="border-secondary border-t-4 mt-3 w-10/12"/></span>
     
     <OtherMethods />
     
     <span className="text-center mt-10">have an account?<span className="text-primary underline"><Link to="/signin"> Login</Link></span></span>
     
    <Alert text={error} type="error" timer={alertTimer}/>
     <Loading isLoading={loading}/>
    </section>
    )
}


export default Signup