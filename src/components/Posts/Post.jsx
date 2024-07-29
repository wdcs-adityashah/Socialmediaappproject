import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import Header from '../Header/Header';
import {Table} from 'react-bootstrap'
function Post() {
    const {id} = useParams();
    const [posts,setPosts] = useState([]);
    const [commentcount,setCommentCount] = useState(0);
    const {postId} = useParams();
    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(response=>response.json())
      .then(data=>{
        setPosts(data);
      })
    },[id])
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/comments?userId=${postId}`)
        .then(response => response.json())
        .then(data => {
          console.log('Fetched comments:', data);
          setCommentCount(data.length);
        })
    }, [postId]);
  return (
    <div>
        <Header/>
        <div className="container">
      <h2 className='album_heading'>Post details for UserId:{id}</h2>
      <Table className='album_table' bordered hover dark>
        <thead>
            <tr>
                <th>Post Id</th>
                <th>User Id</th>
                <th>Title</th>
                <th>Comments:{commentcount}</th>
            </tr>
        </thead>
        <tbody>
      {posts.map(post=>(
       <tr key={post.id}>
         <td>{post.id}</td>
         <td>{post.title}</td>
         <td>{post.body}</td>
         <td>
                <Link to={`/comments/${post.id}`}>
                  <button>View More</button>
                </Link>
              </td>
       </tr>
      ))}   
      </tbody>
      </Table>
      </div>
    </div>
  )
}

export default Post