const CommentsTitlebar = ({ count, inputRef }) => {
  return (
    <div
      className="flex justify-between items-center mb-4 md:1/2 cursor-pointer select-none"
      onClick={() => inputRef.current.focus()}
    >
      <h2 className="title">Comments ({count})</h2>
      <span className="block py-2 px-6 border border-primary rounded-md">
        Leave one
      </span>
    </div>
  );
};
export default CommentsTitlebar;
