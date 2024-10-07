import './App.css';
import React from 'react';
import Background from './components/Background';
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
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
        <motion.a whileHover={{ rotate: '-2deg'}} transition={{duration: 1}}>
          <NavLink to="/home" >home</NavLink>
        </motion.a>
        <motion.a whileHover={{ rotate: '-2deg'}} transition={{duration: 1}}>
          <NavLink to="/portfolio" >portfolio</NavLink>
        </motion.a>
        <motion.a whileHover={{ rotate: '-2deg'}} transition={{duration: 1}}>
          <NavLink to="/contact" >contact</NavLink>
        </motion.a>
        <motion.a whileHover={{ rotate: '-2deg'}} transition={{duration: 1}}>
          <NavLink to="https://www.gabrielrangel.dev/static/Resume-da887049675c4b7669fbbc4e34d22c11.pdf" target="_blank" rel="noopener noreferrer" >resume</NavLink>
        </motion.a>
      </nav>
      <div id="main">
        <AnimatePresence>
          <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Home />} />
          </Routes >
        </AnimatePresence>
      </div>
      <Background />
    </div>
  );
};

export default App;
