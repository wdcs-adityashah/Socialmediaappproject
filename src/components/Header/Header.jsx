import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ isLoggedIn }) {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate('/login');
    } else {
      setUserData(user);
    }
  }, [navigate]);

  return (
    <header>
      <div className="container">
        <div className="main_header">
          <Link to={'/'}>
            <div className="logo">
              <img src="../images/headphone_logo-removebg-preview.png" alt="header_logo" />
            </div>
          </Link>
          {!isLoggedIn && (
            <div className="navbar">
              <div className="navbaritems">
                <Link to={`/albums/${userData.id}`}><h2>Albums</h2></Link>
                <Link to={`/posts/${userData.id}`}><h2>Posts</h2></Link>
              </div>
              <div className="navbar_btn">
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
