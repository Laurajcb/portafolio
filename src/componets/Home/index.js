import React from 'react';
import { AboutMe } from '../AboutMe';
import { Skills } from '../Skills';
import { ContactMe } from '../ContactMe';
import girlImg from '../../assets/main-img.png';
import './Home.css';

function Home() {

  return (
    <>
      <section className='home-section-conatiner'>
        <div className='home-section-container__left home-left-section'>
          <h2 className='home-section-title'>
            Hi, I'm Laurajcb!
          </h2>
          <h3 className='home-section-subtitle'>
            Bilingual Software Developer
          </h3>
          <p className='home-section-text'>
            I'm a Frontend Developer specializing in building and occasionally
            designing exceptional digital experiences.
            <br />
            Currently, focused on building projects that can let me show my skills and that allow me to learn more.
          </p>
          <button className='home-button-more'>
            Learn more >
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
      <AboutMe />
      <Skills />
      <ContactMe />
    </>

  )
}

export { Home };
