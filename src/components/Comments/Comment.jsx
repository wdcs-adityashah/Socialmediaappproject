import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
export default function Comments() {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?userId=${postId}`)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched comments:', data);
        setComments(data);
      })
  }, [postId]);

  return (
    <>
    <Header/>
    <section className="main_albumdetails">
      <div className="container">
    <h2 className='album_heading'>Comment Details for Post ID: {postId}</h2>
    <table className='album_table'>
      <thead>
        <tr>
          <th>Post ID</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        {comments.map(comment => (
          <tr key={comment.id}>
            <td>{comment.id}</td>
            <td>{comment.body}</td>
           
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  </section>
  </>
  );
}
