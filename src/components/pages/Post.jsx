import React, { useState } from 'react'
import './Post.css'
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const Post = ({posts, setPosts}) => {
  const [postTitle, setPostTitle] = useState('')
  const [postContent, setPostContent] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async () =>{
    
    const datetime = format(new Date(), 'MMMM dd') 
    const id = posts.length ? parseInt(posts[posts.length -1].id) + 1 : 1
    const img = 'https://picsum.photos/seed/picsum/450/300'

    const newPost = {id:id, title:postTitle, img:img, body:postContent, date:datetime, heartcount:0, heart:false}
    const allPost = [...posts, newPost]
    setPosts(allPost)
    
  navigate('/home')
  }

  return (
    <div className='Post'>
      <form className='postform' onSubmit={(e) => e.preventDefault()}>
        <h2>New Post</h2>
        <label htmlFor="title">Title:</label>
        <input 
          type="text"
          id='title'
          placeholder='Enter The Title'
          autoFocus
          required
          value={postTitle}
          onChange={(e)=>setPostTitle(e.target.value)}
        />
        <label htmlFor="content">Content:</label>
        <textarea 
          name="textarea" 
          id="content"
          placeholder='Enter The Content Of The Post'
          required
          autoFocus
          value={postContent}
          onChange={(e)=>setPostContent(e.target.value)}
          >
        </textarea>
        <button type='Submit' onClick={(e)=>handleSubmit()}>Post</button>
      </form>
    </div>
  )
}

export default Post