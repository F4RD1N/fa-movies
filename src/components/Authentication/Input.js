const Input = ({name, type, changeHandler}) => {
  return(
   <div className="mt-1 flex flex-col">
     <label className="mb-1">{name}:</label>
     <input className="commentInput" placeholder={`Enter your ${name}`} type={type} onChange={changeHandler} name={name.toLowerCase()} maxLength={name == 'Name' ? 20 : 100} autoComplete="off"/>
     </div>
    )
}


export default Input