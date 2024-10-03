import './App.css';
import React from 'react';
import Background from './components/Background';
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { Switch, Routes, Route, NavLink, useLocation, Link} from "react-router-dom";


const App = () => {
  return (
    <div id="app-container"> 
      <div id="title">
        <h1 style={{color: "grey"}}>gabriel rangel</h1>
        <h1 style={{color: "#179ff4"}}>fullstack web developer </h1>
        <h2>test</h2>
      </div>
      <nav id="navbar"> 
          <Link to="/home">home</Link>
          <Link to="/portfolio">portfolio</Link>
          <Link to="/contact">contact</Link>
          <Link to="/resume">resume</Link>
      </nav>
      <main>
        <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
        </Routes >
      </main>
      <Background />
    </div>
  );
};

export default App;
