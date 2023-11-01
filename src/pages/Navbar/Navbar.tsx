import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
export default function Navbar() {
  return (
    <div>
        
       <div>
        <div className="">
        <div className="navbar">
        <p className="logo" style={{"color":"white","fontWeight":"bold"}}>Anwar</p>
       <ul>
          <Link to="/" >
            <li><span className='navTitle'>HOME</span></li>
          </Link>
          <Link to="/about">
            <li><span className='navTitle'>About me</span></li>
          </Link>
          <Link to="/skill">
            <li><span className='navTitle'>Skills</span></li>
           </Link>
        </ul>
       </div>
       </div>
       </div>
       </div>
   
  )
}
