const CommentCard = ({auther, time, body}) => {
  return (
    <div className="bg-secondary min-h-24 p-3 rounded mb-3 max-h-48 overflow-hidden hover:max-h-96 transition-all md:w-2/3 md:mx-auto">
      <div className="mb-2">
       <span className="mr-4">{auther}</span>
       <span className="text-sm tracking-widest">{time}</span>
      </div>
      <p className="text-white opacity-90 break-words">{body}</p>
    </div>
    )
}

export default CommentCard;