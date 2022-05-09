const CommentCard = ({auther, time, body}) => {
  return (
    <div className="bg-secondary min-h-24 p-3 rounded-md mb-3">
      <div className="mb-2">
       <span className="mr-4">{auther}</span>
       <span className="text-sm tracking-widest">{time}</span>
      </div>
      <p className="text-white opacity-90">{body}</p>
    </div>
    )
}

export default CommentCard;