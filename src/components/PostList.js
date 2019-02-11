import React, {useState, useEffect} from 'react'

const PostList = props => {
  const {subreddit} = props;

  return (
    <div className="post-list">

      <div className="post-card">
        <div className="post-title">
          <h3>What food has made you wonder,"How did our ancestors discover that this was edible?"</h3>
        </div>
        <div className="post-comments">
          <p>
            Not exactly relevant as it’s not something you eat, but I always thought about tobacco…
          </p>
          <p>
            Olives. Not for oil but for eating. You can't just pick and eat them, some how someone…
          </p>
          <p>
            Kiviak - 500 Whole Auks (small bird) stuffed into a seal skin made
          </p>
          <p className="read-more"><a>Read more...</a></p>
        </div>
      </div>

    </div>
  )
}

export default PostList
