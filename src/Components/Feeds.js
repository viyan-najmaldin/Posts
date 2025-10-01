import React from 'react'
import { Link } from 'react-router-dom'

const Feeds = ({posts}) => {
  return (
    <>
    {posts && posts.length > 0 ?
     posts.map(post => (<li key={post.id}>
      <Link to={`post/${post.id}`}>
      <h3>{post.title}</h3>
      <p>{post.body.length > 26 ? `${post.body.slice(0,26)}...`: post.body}</p>
          </Link>
      </li>)
    ) 
     : <p>No Post</p>}

    {console.log(posts)} 
    
    </>
  )
}

export default Feeds
