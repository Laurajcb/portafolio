import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './componets/Navbar';
import { Home } from './componets/Home';
import { AboutMe } from './componets/AboutMe';
import { Skills } from './componets/Skills';
import { ContactMe } from './componets/ContactMe';
import { Container } from '@mui/system';
import { Projects } from './componets/Projects';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Container maxWidth={false} >
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </Container>

    </>
  );
}

export default App;
