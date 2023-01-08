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
    <section className='skills-section-container'>
      <div className='skills-section-content'>
        <p className='skills-section-title'>My skills & experience</p>
        <p className='skills-section-text'>
          My specialities include quickly learning new skills and programming languages, problem-solving,
          domain-driven design, responsive design principles, website optimization, and the Model by Component,by Layer and by Kind methods of organizing code;
          currently learning Bootstrap and Material UI,
          I'm still enthusiastically grabbing onto any other programming languages, frameworks and more.
        </p>
        <p className='skills-section-text-links'>
          Visit my
          <a className='skills-section-anchor' href='https://www.linkedin.com/in/laurajcb/'> LinkedIn </a>
          profile for more details!
        </p>
      </div>
      <section className='skills-section-conatainer-logos'>
        <div className='skills-section-logos'>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xs={6}>
              <Item><img src={jsImg} alt='js-logo' /></Item>
            </Grid>
            <Grid xs={6}>
              <Item><img src={reactImg} alt='react-logo' /></Item>
            </Grid>
            <Grid xs={6}>
              <Item><img src={htmlImg} alt='html-logo' /></Item>
            </Grid>
            <Grid xs={6}>
              <Item><img src={cssImg} alt='css-logo' /></Item>
            </Grid>
            <Grid xs={6}>
            <Grid xs={6}>
              <Item><img src={figmaImg} alt='figma-logo' /></Item>
            </Grid>  
              <Item><img src={mysqlImg} alt='mysql-logo' /></Item>
            </Grid>
            <Grid xs={6}>
              <Item><img src={phytonImg} alt='python-logo' /></Item>
            </Grid>
           
          
          </Grid>
        </div>
      </section>
    </section>
  )
}


export { Skills };