import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./landing.css"
const Landing = () => {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    // 👇️ navigate to /contacts
    navigate('/register');
  };
  return (
    <div className='main'>
        <div className="tittle">
            <span>FOREX TYCOON GROWERS LIMITED</span>
            <p>We grow small forex accounts </p>
        </div>
        <div className="text">
            <p>We are a team of forex traders trying to grow small forex account for </p> 
            <p>our client all over the world </p>
            <p>If you want to grow with us then join us Today</p>
        </div>
        <div className="get_started">
            <button className='btngetstarted' onClick={navigateToRegister} >Get Started</button>
        </div>
    </div>
  )
}

export default Landing