import React from 'react';
import picture from '../../assets/mePicture.png';
import './AboutMe.css';


function AboutMe() {
  return (
    <>
      <section className='container-aboutMe-section'>
        <img alt='mephoto' src={picture} className='container-aboutMe-img' />
        <div className='aboutMe-div-container'>
          <h2 className='aboutMe-section-title'>About me!</h2>
          <p className='aboutMe-section-text'>
          If you were asked me 5 years ago how I imagined myself in 5 years, I probably would say working as a flight attendant,
          travelling around the world, and sitting in a seat for hours, but after the pandemic the game changed, everybody was looking for a new life, I wasn't the exception; so I started with Platzi,
          that was my opportunity to keep exploring the things and topics I was curious about, so programming was the first thing And that's when it happened; the spark, the instant I clicked play on my 
          first Python tutorial video.
          </p>

          <p className='aboutMe-section-text'>
          Since then, Front-end web development calls to all my passions; it incorporates creativity and problem solving and I'm allowed to break it to improve the code 
          (in a separate Git branch, of course). I love applying responsive design principles and watching my web pages shrink into mobile screens and still look amazing. It's oddly satisfying.
          I think I'm like those web pages; I'm moldable, but I still keep my creative flare intact.
          </p>
        </div>
      </section>
    </>
  )
}


export { AboutMe };