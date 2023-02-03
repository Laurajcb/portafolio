import React from 'react';
import Logo from '../../assets/logo2.png';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {

  return (
    <>
      <nav className='navbar-container'>
        <img src={Logo} alt="logo" className='navbar-logo' />
        <ul className='nav-list-menu'>
          <li className='navbar-item'>
            <a href="#home" className='navbar-link' >Home</a>
          </li>
          <li className='navbar-item'>
            <a href="#about-me" className='navbar-link' >About me</a>
          </li>
          <li className='navbar-item'>
            <a href="#skills" className='navbar-link' >My Skills</a>
          </li>
          <li className='navbar-item'>
            <a href="#projects" className='navbar-link' >Projects</a>
          </li>
          <li className='navbar-item'>
            <a href="#contact-me" className='navbar-link' >Contact me</a>
          </li>
        </ul>
      </nav>


    </>
  )
}


export { Navbar };