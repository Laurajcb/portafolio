import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Paper, Stack } from "@mui/material";
import { cyan } from '@mui/material/colors';
import './ContactMe.css'

function ContactMe() {
  return (
    <>
      <section className='contactMe-main-container' id='page-4'>
        <div className='contactMe-container-title'>
          <h2 className='contactMe-title'>Let's build something great together!</h2>
        </div>
        <section>
          <Stack container
            direction="row"
          >
            <section className='contact-container-links'>
              <div className='contact-card-icon'>
                <LinkedInIcon sx={{ color: cyan[500], fontSize: 70 }} />
                <p className='contact-p'>Message Laurajcb</p>
              </div>
              <div className='contact-card-icon'>
                <MailOutlineIcon sx={{ color: cyan[500], fontSize: 70 }} />
                <p className='contact-p'>Email Laurajcb</p>
              </div>
              <div className='contact-card-icon'>
                <WhatsAppIcon sx={{ color: cyan[500], fontSize: 70 }} />
                <p className='contact-p'>WhatsApp Laurajcb</p>
              </div>
            </section>
            <form className='contact-form' >
              <label>Full name</label>
              <input type='text' name='fullname'/>

              <label>Email</label>
              <input type='text' name='email' />

              <label>Message</label>
              <input type='text' name='message' />

              <button className='contact-button' type='submit'>Send message</button>
            </form>
          </Stack>
        </section>
      </section>
    </>
  )
}

export { ContactMe };