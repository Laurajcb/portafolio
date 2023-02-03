import React from 'react';
import animation from '../../assets/bubble-gum-workflow.gif';
import imageAbout from '../../assets/imgAboutMe3.png';
import { Paper } from '@mui/material';
import './AboutMe.css';


function AboutMe() {

  return (
    <>
      <section className='container-aboutMe-section' id='about-me'>
        <div className='container-aboutMe-paper' >
          <img alt='mephoto' src={imageAbout} className='container-aboutMe-img' />
          <div className='aboutMe-div-container'>
            <h2 className='aboutMe-section-title'>About me</h2>
            <p className='aboutMe-section-text'>
              Consider myself a curious, creative, and visual person, mix those things and you will get a Front-end web developer. <br /> Web development calls to all my passions; it incorporates creativity and problem solving and I'm allowed to break it to improve the code
              (in a separate Git branch, of course).
              <br /> <br />
              Some of the qualities that you will see when working with me:
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
                Passion for design
              </li>
            </ul>
          </div>

        </div>
      </section>
    </>
  )
}


export { AboutMe };