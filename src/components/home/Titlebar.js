const Titlebar = ({title}) => {
  return(
        <div className="flex justify-between items-center my-3">
     <h2 className="title">{title}</h2>
     <span className="flex items-center">See all 
      <i className="ri-arrow-right-s-line text-xl"></i>
     </span>
    </div>
    )
}
export default Titlebar