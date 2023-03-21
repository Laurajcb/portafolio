import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { BsGithub, BsJournalCode } from 'react-icons/bs';
import { SiReact, SiHtml5, SiCss3 } from 'react-icons/si';
import { SiJavascript, SiMysql, SiPlatzi } from 'react-icons/si';
import { FaFigma, FaPython, FaBootstrap } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { AiOutlineTeam } from 'react-icons/ai';
import { RiEnglishInput } from 'react-icons/ri';
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
      <h4 className='skills-section-title'>Skills.</h4>
      <div className='skills-div'>
        <section className='skills_technologies'>
          <div className='skills-div-container_cards'>
            <div className='skills-div_card'>
              <BsJournalCode className='icon' />
              <p className='skills-div_card_p'> + 3.000 coding hours.</p>
            </div>
            <div className='skills-div_card'>
              <AiOutlineTeam className='icon' />
              <p className='skills-div_card_p'>Peer learning.</p>
            </div>
            <div className='skills-div_card'>
              <SiPlatzi className='icon' />
              <p className='skills-div_card_p'>+ 20 Platzi courses certificates.</p>
            </div>
            <div className='skills-div_card'>
              <RiEnglishInput className='icon' />
              <p className='skills-div_card_p'> English Level C1.</p>
            </div>
          </div>
          <section className='skills-section_content' >
            <h4 className='skills-title_tech'>Technologies </h4>
            <div>
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                <Grid container direction="row">
                  <Grid item xs={6} sm={4} md={4}>
                    <BsGithub className="grid-icon" />
                  </Grid>
                  <Grid item xs={6} sm={4} md={4}>
                    <SiJavascript className="grid-icon" />
                  </Grid>
                  <Grid item xs={6} sm={4} md={4}>
                    <SiReact className="grid-icon" />
                  </Grid>
                  <Grid item xs={6} sm={4} md={4}>
                    <SiHtml5 className="grid-icon" />
                  </Grid>
                  <Grid item xs={6} sm={4} md={4}>
                    <SiCss3 className="grid-icon" />
                  </Grid>
                  <Grid item xs={6} sm={4} md={4}>
                    <FaFigma className="grid-icon" />
                  </Grid>
                  <Grid item xs={6} sm={4} md={4}>
                    <TbApi className="grid-icon" />
                  </Grid>
                  <Grid item xs={6} sm={4} md={4}>
                    <FaBootstrap className="grid-icon" />
                  </Grid>
                  <Grid item xs={6} sm={4} md={4}>
                    <SiMysql className="grid-icon" />
                  </Grid>
                  <Grid item xs={6} sm={4} md={4}>
                    <FaPython className="grid-icon" />
                  </Grid>
                </Grid>
              </Box>
            </div>
          </section>
        </section>
        <div className='skills-section-content_links'>
          <a className='skills-section-anchor' href='https://www.linkedin.com/in/laurajcb/'> LinkedIn </a>
          <button className='skills-section_btn' onClick={onBtnClick}>
            Download CV.
          </button>
        </div>
      </div >
    </section >
  )
}


export { Skills };