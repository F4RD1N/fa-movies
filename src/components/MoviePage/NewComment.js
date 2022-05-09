const NewComment = () => {
  return(
    <section className="mt-9">
    <h2 className="title mb-5">Leave a Comment</h2>
    <textarea 
     className="commentInput h-40 resize-none"
     placeholder="Write your comment"/>
    <input 
     className="commentInput h-15"
     placeholder="Your Name"/>
    <input 
     className="commentInput h-15"
     placeholder="Your Email"/>
          <div className="flex justify-center items-center py-3 mb-5 rounded-md bg-primary text-white font-bold hover:saturate-150"><span className="mx-2">Leave</span></div>
    </section>
    )
}

export default NewComment;