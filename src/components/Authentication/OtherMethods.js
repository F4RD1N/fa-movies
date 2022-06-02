import MethodItem from './MethodItem'
//Icons
import Google from '../../icons/google.svg'
import Yahoo from '../../icons/yahoo.png'
import Github from '../../icons/github.svg'

//AuthContext
import { useAuthContext } from '../../context/AuthContext'


const OtherMethods = () => {
  
const {
  signInUserWithGoogle, 
  signInUserWithGithub, 
  signInUserWithYahoo
  } = useAuthContext()

  return(
         <div className="flex justify-center mt-4"><ul className="flex justify-center space-x-2 items-center w-10/12">
        <MethodItem icon={Google} handler={signInUserWithGoogle}/>
        <MethodItem icon="https://cdn1.iconfinder.com/data/icons/smallicons-logotypes/32/yahoo-512.png" handler={signInUserWithYahoo}/>
        <MethodItem icon={Github} handler={signInUserWithGithub}/>
     </ul></div>
    )
}

export default OtherMethods