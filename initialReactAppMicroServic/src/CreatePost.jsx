import React, { useState } from 'react'
import axios from 'axios'
import PostList from './PostList';
export default function CreatePost() {
    const [title, setTitle] = useState('');
    const  handleCreatePost = async ()=>{
        await axios.post('http://localhost:4000/posts',{title}).then((res)=>{
            console.log(res)

        }
        ).catch((err)=>{
            console.log(err)
        })


    }
  return (
    <div className='container' >
        <h1>Create Post</h1>
        <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />


        <button onClick={handleCreatePost} >Post</button>

        <hr />
        <h2  >All Posts</h2>
        <hr />
        <PostList/>

    </div>
  )
}
