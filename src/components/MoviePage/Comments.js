import CommentsTitlebar from './CommentsTitlebar'
import CommentCard from './CommentCard'
import NewComment from './NewComment'
const Comments = () => {
  return (
    <section className="mt-11">
     <CommentsTitlebar />
     <CommentCard 
      auther="FARDIN"
      time="2022/04/05"
      body="perfect :)"/>
     <CommentCard 
      auther="FARDIN"
      time="2022/04/05"
      body="Lorem ipsum dolor sit amet."/>
     <CommentCard 
      auther="FARDIN"
      time="2022/04/05"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus sapien, feugiat eu bibendum vitae, suscipit at tortor"/>
     <CommentCard 
      auther="FARDIN"
      time="2022/04/05"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus sapien, feugiat eu bibendum vitae, suscipit at tortor that i like it so fucking much. ty for your good website♡"/>
      <NewComment />
    </section>
    )
}

export default Comments;