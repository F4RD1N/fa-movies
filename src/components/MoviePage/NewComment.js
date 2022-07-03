const NewComment = ({ inputRef }) => {
  return (
    <section className="mt-9 md:w-2/3 md:mx-auto">
      <h2 className="title mb-5">Leave a Comment</h2>
      <textarea
        className="commentInput h-40 resize-none"
        placeholder="Write your comment"
        ref={inputRef}
      />
      <input className="commentInput h-15" placeholder="Your Name" />
      <input className="commentInput h-15" placeholder="Your Email" />
      <button
        disabled
        className="flex w-full justify-center items-center py-3 mb-5 rounded-md bg-primary text-white font-bold"
      >
        <span className="mx-2">
          Post <span className="text-xs">( not available yet! )</span>
        </span>
      </button>
    </section>
  );
};

export default NewComment;
