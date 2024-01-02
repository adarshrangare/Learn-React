import React from 'react'
import {Link} from 'react-router-dom'
const Post = ({userId,title,body,indPost}) => {
  return (
    <div className='postCard'>
        
        { indPost && <Link to={userId.toString()}><h2>{userId}</h2></Link>}
        <h3>{title}</h3>
        <p>{body}</p>
    </div>
  )
}

export default Post