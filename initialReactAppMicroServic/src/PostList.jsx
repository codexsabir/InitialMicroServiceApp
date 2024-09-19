import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function PostList() {
    const [posts, setPosts] = useState({});
    const fetchPosts = async ()=>{
        await axios.get('http://localhost:4000/posts').then((res)=>{
            console.log(res)
            setPosts(res.data)
        }
        ).catch((err)=>{
            console.log(err)
        }
        )
    }
    const renderPosts = Object.values(posts).map((post)=>{
        return (
            <div className='card' style={{width:'30%', marginBottom:'20px'}} key={post.id}>
                <div className='card-body'>
                   <ol>
                          <li>{post.title}</li>
                   </ol>
                </div>
            </div>

        )
    }
    )
    useEffect(()=>{
       fetchPosts()
    },[])
  return (
    <div className='container' >

        {renderPosts}


    </div>
  )
}
