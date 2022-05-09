const CatagoryCard = ({icon, name}) => {
  return (
    <div className="py-2 w-20 flex flex-col items-center rounded-md bg-secondary">
     <img src={icon} className="svg w-14" />
     <span className="font-bold text-sm">{name}</span>
    </div>
    )
}
export default CatagoryCard;