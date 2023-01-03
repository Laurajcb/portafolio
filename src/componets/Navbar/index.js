import React from 'react';
import Logo from '../../assets/noBg.png';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <>
      <nav className='navbar-container'>
        <img src={Logo} alt="logo" className='navbar-logo'></img>
        <ul className='nav-list-menu'>
          <li className='navbar-item'>
            <Link to='/' className="nav-link active" aria-current="page">Home</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/aboutMe' className="nav-link active" aria-current="page">About me</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/skills' className="nav-link active" aria-current="page">My Skills</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/contactMe' className="nav-link active" aria-current="page">Contact me</Link>
          </li>
        </ul>
      </nav>
      <hr className='navbar-line'></hr>
    </>
  )
}


export { Navbar };