import { useRef } from "react";
import { sliceFullYear } from "../../utils/functions";
import CommentsTitlebar from "./CommentsTitlebar";
import CommentCard from "./CommentCard";
import NewComment from "./NewComment";
const Comments = ({ data }) => {
  const inputRef = useRef(null)
  return (
    <section className="mt-11">
      <CommentsTitlebar count={data && data.length && data.length} inputRef={inputRef}/>
      {data && data.length ? (
        data.map((item) => {
          const { author, content, created_at, id } = item;

          return (
            <CommentCard
              key={id}
              auther={author}
              time={sliceFullYear(created_at)}
              body={content}
            />
          );
        })
      ) : (
        <center>there is no Comments :(</center>
      )}
      <NewComment inputRef={inputRef}/>
    </section>
  );
};

export default Comments;
