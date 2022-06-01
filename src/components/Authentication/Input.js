const Input = ({name, type}) => {
  return(
   <div className="mt-1 flex flex-col">
     <label className="mb-1">{name}:</label>
     <input className="commentInput" placeholder={`Enter your ${name}`} type={type}/>
     </div>
    )
}


export default Input