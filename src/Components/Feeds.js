import React from 'react'
import { Link } from 'react-router-dom'

const Feeds = ({posts}) => {
  return (
    <>
    {posts && posts.length > 0 ?
     posts.map(post => (<li key={post.id}>
      <Link to={`post/${post.id}`}>
         
      <h3>{post.title} </h3> 
      <p>{post.body.length > 46 ? `${post.body.slice(0,46)}...`: post.body}</p>
         <span className='datee'>{post.datetime}</span>
          </Link>
      </li>)
    ) 
     : <p>No Post</p>}

    {console.log(posts)} 
    
    </>
  )
}

export default Feeds
