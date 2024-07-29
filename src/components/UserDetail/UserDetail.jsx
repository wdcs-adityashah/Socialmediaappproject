import React, { useState } from 'react'
import { useEffect } from 'react'
import Header from '../Header/Header';
import './UserDetail.css'
function UserDetail() {
    const [userData, setUserData]= useState({})
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    setUserData(user);
    console.log(userData);
  },[]);
 
  return (
    <div>
        <Header/>
        <section className='userprofile'>
        <div className="container">
          <div className="profile-details">
          <h2>{userData.name} (@{userData.username})</h2>
        <p>Email: <a href={`mailto:${userData.email}`}>{userData.email}</a></p>
        <p>Phone: <a href={`tel:${userData.phone}`}>{userData.phone}</a></p>
        <p>Website: <a href={`http://${userData.website}`} target="_blank" rel="noopener noreferrer">{userData.website}</a></p>
        {userData.address && (
          <>
            <h3>Address</h3>
            <p>{userData.address.suite},{userData.address.street}</p>
            <p>{userData.address.city}, {userData.address.zipcode}</p>
          </>
        )}
        {userData.company && (
          <>
            <h3>Company</h3>
            <p>{userData.company.name}</p>
            <p>{userData.company.catchPhrase}</p>
            <p>{userData.company.bs}</p>
          </>
        )}
      </div>
      </div>
      </section>
    </div>
  )
}

export default UserDetail;