import React  from 'react';
//import { Link } from 'react-router-dom';
import GirlImg from '../../assets/main-img.png';
import './Home.css';

function Home() {

  return (
    <section className='home-section-conatiner'>
      <div className='home-left-section'>
        <h2 className='home-section-title'>Hi, I'm Laurajcb!</h2>
        <h3 className='home-section-subtitle'>Bilingual Sofware Developer</h3>
        <p className='home-section-text'>
          I'm a Frontend Developer specializing in building and occasionally designing exceptional digital experiences.
          <br />Currently, focused on building projects that can let me show my skills.
        </p>
        <button className='home-button-more'>
        Learn more >
        </button>
      </div>
      <div className='home-right-section'>
        <img
          className='home-section-img'
          alt='-section-img'
          src={GirlImg}
        />
      </div>
    </section>
  )
}

export { Home };