import React from 'react';
import { AboutMe } from '../AboutMe';
import { Skills } from '../Skills';
import { ContactMe } from '../ContactMe';
import girlImg from '../../assets/main-img.png';
import { Button } from '@mui/material';
import { FaArrowDown } from 'react-icons/fa';


import './Home.css';

function Home() {

  return (
    <>
      <section className='home-section-conatiner scroll-page' id="home">
        <div className='home-section-container__up'>
          <h4 className='home-section_hi'>Hi, I'm</h4>
          <h2 className='home-section_title'>
            Laura Callejas
          </h2>
          <h3 className='home-section-subtitle'>
            Bilingual Software Developer.
          </h3>

          <div className='separator'></div>

        </div>
        <div className='home-right-section'>
          <img
            className='home-section-img'
            alt='-section-img'
            src={girlImg}
          />
        </div>
        <button className='home-button'>
          <a href="#page-2" className='home-button-more'>
          < FaArrowDown />
          </a>
        </button>
      </section>
    </>

  )
}

export { Home };
