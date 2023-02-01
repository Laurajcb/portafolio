import React from 'react';
import Logo from '../../assets/logo2.png';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {

  return (
    <>
      <nav className='navbar-container'>
        <img src={Logo} alt="logo" className='navbar-logo'/>
        <ul className='nav-list-menu'>
          <li className='navbar-item'>
            <a href="#page-1" className='navbar-link' >Home</a>
          </li>
          <li className='navbar-item'>
            <a href="#page-2" className='navbar-link' >About me</a>
          </li>
          <li className='navbar-item'>
            <a href="#page-3" className='navbar-link' >My Skills</a>
          </li>
          <li className='navbar-item'>
            <a href="#page-4" className='navbar-link' >Contact me</a>
          </li>
        </ul>
      </nav>


    </>
  )
}


export { Navbar };