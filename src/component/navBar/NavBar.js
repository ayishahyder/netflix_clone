import React from 'react'
import './NavBar.css'
import avathar from './avatar.svg';
import logo from './logo.svg'
function NavBar() {
  return (
    <div className="navBar">
     <img src={logo} className='logo' alt='netflix'/>
     <div className="spacer"></div>
     <img src={avathar} className='avathar' alt='avathar'/>
    </div>
  )
}

export default NavBar
