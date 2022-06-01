const MethodItem = ({icon, handler}) => {
  return(
      <li onClick={handler} className="w-20 h-14 rounded-sm bg-white flex justify-center items-center"><img  className="w-10" src={icon}/></li>
    )
}

export default MethodItem