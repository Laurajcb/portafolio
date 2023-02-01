import React from 'react';
import { AboutMe } from '../AboutMe';
import { Skills } from '../Skills';
import { ContactMe } from '../ContactMe';
import girlImg from '../../assets/main-img.png';
import { Button } from '@mui/material';
import './Home.css';

function Home() {

  return (
    <>
      <section className='home-section-conatiner scroll-page' id="page-1">
        <div className='home-section-container__left home-left-section'>
          <h2 className='home-section-title'>
            Hi, I'm Laura Callejas!
          </h2>
          <h3 className='home-section-subtitle'>
            Bilingual Software Developer
          </h3>
          <p className='home-section-text'>
            I'm specializing in building and occasionally
            designing exceptional digital experiences.
            <br />
            Currently, focused on building projects that can let me show my skills and that allow me to learn more.
          </p>
          <button className='home-button'>
            <a href="#page-2" className='home-button-more'>
            Learn more >
            </a>
          </button>
        </div>
        <div className='home-right-section'>
          <img
            className='home-section-img'
            alt='-section-img'
            src={girlImg}
          />
        </div>
      </section>
    </>

  )
}

export { Home };
