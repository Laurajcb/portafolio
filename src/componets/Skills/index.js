import React from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem';
import jsImg from '../../assets/js.png';
import mysqlImg from '../../assets/mysql.png';
import phytonImg from '../../assets/python.png';
import cssImg from '../../assets/css.png';
import htmlImg from '../../assets/html-5.png';
import figmaImg from '../../assets/figma.png';
import reactImg from '../../assets/react.png';
import './Skills.css';


function Skills() {
  return (
    <section className='skills-section-container scroll-page' id='page-3'>
      <section className='skills-section-conatainer-logos'>
        <div className='skills-section-logos'>
          <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
            <Grid xs={6}>
              <img src={jsImg} alt='js-logo' />
            </Grid>
            <Grid xs={6}>
              <img src={reactImg} alt='react-logo' />
            </Grid>
            <Grid xs={6}>
              <img src={htmlImg} alt='html-logo' />
            </Grid>
            <Grid xs={6}>
              <img src={cssImg} alt='css-logo' />
            </Grid>
            <Grid xs={6}>
              <img src={figmaImg} alt='figma-logo' />
            </Grid>
            <Grid>
              <img src={mysqlImg} alt='mysql-logo' />
            </Grid>
            <Grid xs={6}>
              <img src={phytonImg} alt='python-logo' />
            </Grid>
          </Grid>
        </div>
      </section>
      <div className='skills-section-content'>
        <p className='skills-section-title'>My skills & experience</p>
        <p className='skills-section-text'>
          I have acquired my knowledge in platzi and Holberton, a Bootcamp that prepares you with real projects, peer programming and more than 1500 hours of code,
          in addition to this I have dedicated hours of study to learn frameworks on my own.
          <br /> My specialities include quickly learning new skills and programming languages, problem-solving,
          domain-driven design, responsive design principles, website optimization, and the Model by Component, by Layer and by Kind methods of organizing code;
          currently learning Bootstrap and Material UI.
          <br />
          I'm still enthusiastically grabbing onto any other programming languages, frameworks and more.
        </p>
        <p className='skills-section-text-links'>
          Visit my
          <a className='skills-section-anchor' href='https://www.linkedin.com/in/laurajcb/'> LinkedIn </a>
          profile for more details!
        </p>
      </div>
    </section>
  )
}


export { Skills };