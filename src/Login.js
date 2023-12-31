import React from 'react';
import "./Login.css";
import { loginUrl } from './spotify';

function Login() {
  return (
    <div className="login">
        
        <img 
            src="https://logos-world.net/wp-content/uploads/2020/09/Spotify-Logo.png" 
            alt="Spotify Logo"
        />
        {/* login with spotify button */}
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login;