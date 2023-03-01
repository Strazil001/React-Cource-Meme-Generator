import React from 'react'
import MemeIcon from '../assets/meme-icon.png'
import './Navbar.css'

export default function() {
  return (
    <div className="nav">
      <div className="nav-logo">
      <img className="nav-img" alt="Funny face icon" src={MemeIcon}/>
      <h1>MEME GENERATOR</h1>
      </div>
      <h2>React Course - Project 3</h2>
    </div>
  )
}
