import React,{ useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import './Landing.css'
function Landing() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const[loggedIn,setLoggedIn] = useState(null);
    const navigate = useNavigate();
      useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
          navigate('/');
        }
      }, [navigate]);
    const handleSignUp = async(event) => {
        event.preventDefault();
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await res.json();
        console.log(data);
        const findUser = data.find(user=>user.name===name && user.email === email);
        console.log(findUser);
        if(findUser){
            localStorage.setItem('user', JSON.stringify(findUser));
            navigate('/');
            setLoggedIn(true);
            }
        else{
          navigate('/login');
        }
    }

  return (
    <div>
      <Header isLoggedIn={setLoggedIn}/>
      <div className="userdetail">
        <form action="/" className='inputdetails' onSubmit={handleSignUp}>
        <input type="text" name='name' placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <br/>
        <input type="email" name='email' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <button type='submit'>Sign In</button>
        </form>
    </div>
    </div>
  )
}

export default Landing;