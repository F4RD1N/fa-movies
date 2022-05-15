const CommentsTitlebar = ({count}) => {
  return (
    <div className="flex justify-between items-center mb-4">
     <h2 className="title">Comments ({count})</h2>
     <span className="block py-2 px-6 border border-primary rounded-md">Leave one</span>
    </div>
    )
}
export default CommentsTitlebar;