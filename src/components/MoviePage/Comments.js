import CommentsTitlebar from './CommentsTitlebar'
import CommentCard from './CommentCard'
import NewComment from './NewComment'
const Comments = ({data}) => {
  return (
    <section className="mt-11">
     <CommentsTitlebar />
     {
       data && data.map(item => {
         const {id, auther, time, comment} = item
         return(
          <CommentCard
           key={id}
           auther={auther}
           time={time}
           body={comment}/>
         )
       })
     }
     <NewComment />
    </section>
    )
}

export default Comments;