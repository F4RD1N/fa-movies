const CastCard = ({avatar, realName, charName}) => {
  return(
     <div className="flex p-2 rounded-md bg-secondary mr-2">
     <img src={avatar} className="w-20 h-20 rounded-md object-cover"/>
     <ul className="ml-2 flex flex-col justify-between">
      <li className="text-md text-white font-semibold">{realName}</li>
      <li className="text-sm">{charName}</li>
     </ul>
     </div>
    )
}
export default CastCard;