import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './componets/Navbar';
import { Home } from './componets/Home';
import { AboutMe } from './componets/AboutMe';
import { Skills } from './componets/Skills';
import { ContactMe } from './componets/ContactMe';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/aboutMe' element={<AboutMe />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contactMe' element={<ContactMe />} />
      </Routes>

    </>
  );
}

export default App;
