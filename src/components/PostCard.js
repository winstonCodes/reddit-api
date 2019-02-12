import React, {useState, useEffect} from 'react'

const PostCard = props => {
  const {post} = props;

  const initialCommentState = [];

  const [comments, setComments] = useState(initialCommentState)

  useEffect(()=>{
    fetch(post.commentsUrl+".json")
    .then(response => response.json())
    .then(response => setComments(response[1].data.children))
  }, [post])

  const commentsArray = comments.map((comment, i)=>{
    if (i<3){
      const charCount = 164;
      let displayComment = comment.data.body.slice(0, charCount)
      if (displayComment.length < comment.data.body.length) {
        displayComment = displayComment+"...";
      }
      return(
        <p key={i}>{displayComment}</p>
      )
    }
  })

  return(
    <div className="post-card" >
      <div className="post-title">
        <h3>{post.title}</h3>
      </div>
      <div className="post-comments">
        {commentsArray}
        <p className="read-more"><a href={post.commentsUrl}>Read more...</a></p>
      </div>
    </div>
  )
}

export default PostCard
