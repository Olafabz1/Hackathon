
import React from 'react'
import { HiOutlineUserPlus } from "react-icons/hi2";
import './navbar.css' 

function Navbar() {
  return (
    <div>
      <nav className="navbar">
      <div className="navbar-brand">LOGO</div>
      <ul className='navsection'>
        <li className='nav-item'><a href="http://">Home</a></li>
        <li className='nav-item'><a href="http://">About</a></li>
        <li className='nav-item'><a href="http://">Services</a></li>
        {/* <li className='nav-item'>Register/Login </li> */}
        <button type='submit' className='button'>Register/Login</button>
        <li><HiOutlineUserPlus /> </li>
      </ul>
      <div className="navbar-toggle">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>

     
    </div>
  )
}

export default Navbar;
