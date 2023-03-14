import React from 'react';
import work from '../../assets/aboutMe.png';
import './AboutMe.css';


function AboutMe() {
  return (
    <>
      <section className='container-aboutMe-section' id='about-me'>
        <div className='container-aboutMe'>
          <div className='aboutMe-div-container'>
            <h2 className='aboutMe-section-title'>About me.</h2>
            <p className='aboutMe-section-text'>
              As a creative problem solver, I thrive on designing and building intuitive and user-friendly interfaces that enhance the user experience,
              I am a team player who enjoys collaborating with designers, developers, and stakeholders to ensure project success. To stay up-to-date with the latest technologies and trends in FrontEnd development, I make it a priority to continually learn and grow.
              <br />
              I look forward to the opportunity to work with you on your next project.
              <br />
              Some of the qualities that you will see when working with me are:
            </p>
            <ul className='aboutMe-list'>
              <li>
                Effective communication.
              </li>
              <li>
                Teamwork.
              </li>
              <li>
                Resolution of the problem.
              </li>
              <li>
                Constant Learning.
              </li>
              <li>
                Passion for design.
              </li>
              <li>
                Gold oriented.
              </li>
              <li>
                Organization.
              </li>
              <li>
                Perseverance.
              </li>
              <li>
                Interest in Helping Others
              </li>
            </ul>
          </div>
          <img alt='mephoto' src={work} className='container-aboutMe-img' />
        </div>
      </section>
    </>
  )
}


export { AboutMe };