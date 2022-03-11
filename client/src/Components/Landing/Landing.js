import React from 'react'
import './Landing.css';
import img from "../../Assets/bgimage.png";
import { useNavigate } from "react-router-dom";

const Landing = () => {
    let navigate = useNavigate();
    const handleLogIn = () =>{
        console.log('Login button executed');
        navigate(`/login`);
    }
    const handleSignUp = () =>{
        console.log('SignUp button   executed');
        navigate(`/signup`);
    }
  return (
      <div className='landingContainer'>
    <div className='landingWrapper'>
        <div>
            <h3 className='landingHeader'>WELCOME!</h3>
        </div>
        <div id='textWrapperLanding'>
            <p className='landingText'>Now get certified to watch youtube playlists</p>
        </div>
        <div className='imageWrapper'>
           <img src={img} alt='background landing' className='backgroundImageLanding'/>
        </div>
        <div className='buttonWrapper'>
            <button id='loginButton' onClick={handleLogIn}>Log In</button>
            <button id='signUpButton' onClick={handleSignUp}>Sign Up</button>

        </div>
    </div>
      </div>
  )
}

export default Landing