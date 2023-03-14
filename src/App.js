import React from 'react';
import { Navbar } from './componets/Navbar';
import { Welcome } from './componets/Welcome';
import { Home } from './componets/Home';
import { AboutMe } from './componets/AboutMe';
import { Skills } from './componets/Skills';
import { ContactMe } from './componets/ContactMe';
import { Projects } from './componets/Projects';
import './App.css';

function App() {
  return (
    <>
      <Welcome />
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      {/* <Projects /> */}
      <ContactMe />


    </>
  );
}

export default App;
