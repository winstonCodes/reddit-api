import React, {useState, useEffect} from 'react'

import PostCard from './PostCard'

const PostList = props => {
  const {subreddit} = props;

  const initialPostState = [];

  const [posts, setPosts] = useState(initialPostState);

  useEffect(() => {
    if(subreddit){
      console.log("run")
      var childArray;
      fetch(`https://www.reddit.com/r/${subreddit}/top/.json`)
      .then(data => data.json())
      .then(data => {
        childArray = data.data.children
        let postArray = []
        for (let i=0; i<5; i++){
          postArray.push({
            title: childArray[i].data.title,
            commentsUrl: childArray[i].data.url
          })
        }
        console.log(postArray)
        setPosts(postArray)
      })
    }
  }, [subreddit])

  const postCards = posts.map((post, i) => (
    <PostCard key={i} post={post} />
  ))
  return (
    <div className="post-list">

      {postCards}

    </div>
  )
}

export default PostList

// TODO: Error handling for non-existent sub reddit
// TODO: Error handling media posts
// TODO: handle pictures/ non "self" posts
// TODO: how to tell if self post by response
// TODO: list of common subreddits to the side
// TODO: fix title height (or slice) for long titles
// TODO: add mobile sass
// TODO: add comments to code
