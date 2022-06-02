import { useAuthContext } from '../../context/AuthContext'

const MethodItem = ({icon, handler}) => {
  const {
    error, 
    loading, 
    alertTimer
    } = useAuthContext()
  return(
      <button disabled={loading || alertTimer && true} onClick={handler} className="w-20 h-14 rounded-sm bg-secondary flex justify-center items-center"><img  className="w-10" src={icon}/></button>
    )
}

export default MethodItem