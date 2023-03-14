import React from 'react';
import { useState } from 'react';
import Logo from '../../assets/logo-pink.png';
import { HiMenuAlt3 } from 'react-icons/hi';
import '../Navbar/Navbar.css';


function Navbar() {
  const [toggle, setTtoggle] = useState(false);

  return (
    <>
      <nav className='navbar-container '>
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

        <div className="mobile-menu">
          <button className='hamb-menu_btn' onClick={() => setTtoggle(!toggle)}>
            <HiMenuAlt3 className='hamb-menu_icon' />
          </button>
          {
            toggle && (
              <ul className='hamb-menu_list' onClick={() => setTtoggle(!toggle)}>
                <li>
                  <a href="#home" className='nav-movile_link'>Home</a>
                </li>
                <li>
                  <a href="#about-me" className='nav-movile_link' >About me</a>
                </li>
                <li>
                  <a href="#skills" className='nav-movile_link' >My Skills</a>
                </li>
                <li>
                  <a href="#projects" className='nav-movile_link'>Projects</a>
                </li>
                <li>
                  <a href="#contact-me" className='nav-movile_link'>Contact me</a>
                </li>
              </ul>
            )
          }
        </div>

      </nav>
    </>
  )
}


export { Navbar };