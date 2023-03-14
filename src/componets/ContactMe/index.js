import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Stack } from "@mui/material";
import { cyan } from '@mui/material/colors';
import './ContactMe.css'

function ContactMe() {
  const form = useRef();
  const [result, showResult] = useState(false);

  const Result = () => {
    return (
      <p className='contactMe-sent-success'>Your message has been successfully sent, I will contact you soon!</p>
    )
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_im9svd9', 'service_im9svd9', form.current, 'UmKaAQ9Cah4KKB30y')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    showResult(true)
  };


  return (
    <>
      <section className='contactMe-main-container' id='contact-me'>
        <div className='contactMe-container-title'>
          <h2 className='contactMe-title'>Let's build something great together!</h2>
        </div>
        <section>
          <Stack container
            direction={{ xs: "column-reverse", md: "row" }}
          >
            <section className='contact-container-links'>
              <a  href='https://www.linkedin.com/messaging/' className='contact-card-icon'>
                <LinkedInIcon sx={{ color: cyan[500], fontSize: 60 }} />
                <p className='contact-link'>
                  Message Laurajcb
                </p>
              </a>
              <a href='mailto:callejaslaura96@gmail.com' className='contact-card-icon'>
                <MailOutlineIcon sx={{ color: cyan[500], fontSize: 60 }} />
                <p className='contact-link'>Email Laurajcb</p>
              </a>
              <a href='https://wa.me/573232963649' className='contact-card-icon'>
                <WhatsAppIcon sx={{ color: cyan[500], fontSize: 60 }} />
                <p className='contact-link' href='https://wa.me/573232963649'>WhatsApp Laurajcb</p>
              </a>
            </section>
            <form
              className='contact-form'
              ref={form}
              onSubmit={sendEmail}
            >
              <label for='fullname'>Full name</label>
              <input type='text' name='fullname' id='fullname' />

              <label for='email' id='email'>Email</label>
              <input type='email' name='email' />

              <label for='message'>Message</label>
              <textarea
                type='text'
                name='message'
                id='message'
              >
              </textarea>

              <div className='bt-section'>
                <button className='contact-button' type='submit'>Send message</button>
                {
                  result ? <Result /> : null
                }
              </div>
            </form>
          </Stack>
        </section>
      </section>
    </>
  )
}

export { ContactMe };