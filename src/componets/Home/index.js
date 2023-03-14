import React from 'react';
import girlImg from '../../assets/home-img.png';
import { FaArrowDown } from 'react-icons/fa';
import './Home.css';

function Home() {

  return (
    <>
      <section className='home-section-container' id="home">
        <div className='home-section-container_up'>
          <h4 className='home-section_hi'>Hi, I'm</h4>
          <h2 className='home-section_title'>
            Laura Callejas
          </h2>
          <h3 className='home-section-subtitle'>
            Bilingual Software Developer.
          </h3>
        </div>
        <div className='home-section-container_down'>
          <img
            className='home-section-img'
            alt='-section-img'
            src={girlImg}
          />
        </div>
        <button className='home-button'>
          <a href="#about-me" className='home-btn_a'>
            <FaArrowDown />
          </a>
        </button>
      </section>
    </>

  )
}

export { Home };
