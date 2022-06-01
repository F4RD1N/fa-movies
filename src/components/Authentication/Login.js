//Components
import Input from './Input'
import MethodItem from './MethodItem'

//Icons
import Google from '../../icons/google.svg'
import Facebook from '../../icons/facebook.svg'
import Github from '../../icons/github.svg'

//Firebase
import {
  GoogleAuthProvider, 
  GithubAuthProvider, 
  signInWithRedirect } from "firebase/auth";
  
import { auth } from '../../config/Firebase'

const Login  = () => {
  
  const googleHandler = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  
  const githubHandler = () => {
    const provider = new GithubAuthProvider();
    signInWithRedirect(auth, provider)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  return(
    <section 
      className="mt-28 px-8 flex flex-col">
     <h2 className="text-xl text-white text-left mb-4">Login to your Account</h2>
     <Input name="Email" type="text"/>
     <Input name="Password" type="password"/>
     
     <div className="bg-primary text-white text-center rounded py-3 mt-3">Sign in</div>
     
     <span className="text-center mt-10">-Or sign in with-</span>
     <span className="flex justify-center"><hr className="border-secondary border-t-4 mt-3 w-10/12"/></span>
     
     <div className="flex justify-center mt-4"><ul className="flex justify-center space-x-2 items-center w-10/12">
        <MethodItem icon={Google} handler={googleHandler}/>
        <MethodItem icon={Facebook}/>
        <MethodItem icon={Github} handler={githubHandler}/>
     </ul></div>
     
     <span className="text-center mt-10">Dont have an account?<span className="text-primary underline">  Sign up</span></span>
    </section>
    )
}


export default Login