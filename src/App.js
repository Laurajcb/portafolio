import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './componets/Navbar';
import { Home } from './componets/Home';
import { AboutMe } from './componets/AboutMe';
import { Skills } from './componets/Skills';
import { ContactMe } from './componets/ContactMe';
import { Container } from '@mui/system';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth={false} >
        <Home />
        <AboutMe />
        <Skills />
        <ContactMe />
      </Container>
    </>
  );
}

export default App;
