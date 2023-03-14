import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { FaFigma } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { SiPlatzi } from 'react-icons/si';
import { BsJournalCode } from 'react-icons/bs';
import { AiOutlineTeam } from 'react-icons/ai';
import './Skills.css';


function Skills() {
  const onBtnClick = () => {
    fetch('DEV-Laura_Callejas_CV-En.pdf')
      .then(response => {
        response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          console.log(fileURL)
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'DEV-Laura_Callejas_CV-En.pdf';
          alink.click();
        })
      })
  }


  return (
    <section className='skills-section-container' id='skills'>
      <hr className='skills-section-container_line' />
      <p className='skills-section-title'>My skills & experience</p>
      <div className='skills-section_content'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={2} sm={2} md={4}>
              <SiJavascript className="grid-icon" />
            </Grid>
            <Grid item xs={2} sm={2} md={4}>
              <SiReact className="grid-icon" />
            </Grid>
            <Grid item xs={2} sm={2} md={4}>
              <SiHtml5 className="grid-icon" />
            </Grid>
            <Grid item xs={2} sm={2} md={4}>
              <SiCss3 className="grid-icon" />
            </Grid>
            <Grid item xs={2} sm={2} md={4}>
              <FaFigma className="grid-icon" />
            </Grid>
            <Grid item xs={2} sm={2} md={4}>
              <FaBootstrap className="grid-icon" />
            </Grid>
            <Grid item xs={2} sm={2} md={4}>
              <SiMysql className="grid-icon" />
            </Grid>
            <Grid item xs={2} sm={2} md={4}>
              <FaPython className="grid-icon" />
            </Grid>
          </Grid>
        </Box>

        <div className='skills-div-container_cards'>
          <div className='skills-div_card'>
            <BsJournalCode className='icon' />
            <p className='skills-div_card_p'>More than 2.800 coding hours.</p>
          </div>
          <div className='skills-div_card'>
            <AiOutlineTeam className='icon' />
            <p className='skills-div_card_p'>Peer learning.</p>
          </div>
          <div className='skills-div_card'>
            <SiPlatzi className='icon' />
            <p className='skills-div_card_p'>More than 18 certified courses by Platzi.</p>
          </div>
        </div>
      </div>
      <div className='skills-section-content_links'>
        <p className='skills-section-text-links'>
          Visit my
          <a className='skills-section-anchor' href='https://www.linkedin.com/in/laurajcb/'> LinkedIn </a>
          profile for more details!
        </p>
        <button
          className='skills-section_btn'
          onClick={onBtnClick}
        >
          Download my CV
        </button>

      </div>

    </section>
  )
}


export { Skills };