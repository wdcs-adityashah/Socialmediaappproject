import React, { useState,useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Dashboard.css';
function Dashboard() {
    const [userData, setUserData]= useState({});
    const [albumCount, setAlbumCount] = useState(0);
    const [postCount, setPostCount] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      console.log(user);
      if (user && user!==null) {
        navigate('/');
        setUserData(user);
        fetchAlbumCount(user.id);
        fetchPostCount(user.id);
      } else {
        navigate('/login');
      }
    }, [navigate]);
    const fetchAlbumCount = async (id) => {
      const albumResponse = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);
      const albumData = await albumResponse.json();
      setAlbumCount(albumData.length);
    };
    const fetchPostCount = async (id) => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
      const data = await response.json();
      setPostCount(data.length);
    };

  return (
    <>
        <Header />
          <section className='logindetails'>
          <div className="container">
          <Link to={`/userdetail/${userData.id}`}>
          <h1>Welcome User {userData.name}</h1>
        </Link>
            <div className='userinfo'>
              <div className="album">
                <Link to={`/albums/${userData.id}`}><h2>Albums</h2></Link>
                <p>Total Albums: {albumCount}</p>
              </div>
              <div className="post">
                <Link to={`/posts/${userData?.id}`}><h2>Posts</h2></Link>
                <p>Total Posts: {postCount}</p>
              </div>
            </div>
            </div>
          </section>
    </>
  )
}

export default Dashboard

