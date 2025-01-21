import './NavBar.css';
import logo from './logo.png';
import { data, Link } from "react-router";
import {auth, provider} from '../../config';
import { signInWithPopup } from 'firebase/auth';
import { useEffect, useState } from 'react';
import Home from '../Home/Home'

function NavBar() {
  const [email, setEmail] = useState('');
  const [displayPhoto, setDisplayPhoto] = useState('');

  const handleClick =()=> {
    signInWithPopup(auth, provider).then((data)=> {
      setEmail(data.user.email)
      setDisplayPhoto(data.user.photoURL)
      localStorage.setItem("email", data.user.email)
      localStorage.setItem("displayPhoto", data.user.photoURL)
    })
  }

  useEffect(() => {
    setEmail(localStorage.getItem('email'))
    setDisplayPhoto(localStorage.getItem('displayPhoto'))
  })

  return (
    <div className="NavBar">
        <Link to="/"><img src = {logo} /></Link>
        <Link to="/"><h2>Home</h2></Link>
        <Link to="/test-prep"><h2>Test Preparation</h2></Link>
        <Link to="/visa"><h2>Visa Interview</h2></Link>
        <h2>About Us</h2>
        {displayPhoto? <img id="userPhoto" src={displayPhoto} />:
          <h2 onClick={handleClick}>LogIn/Register</h2>
        }
    </div>
  );
}

export default NavBar;
