import './App.css';
import React from 'react';
import Background from './components/Background';
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Switch, Routes, Route, NavLink, useLocation, Link} from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import MediaQuery from 'react-responsive';
// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
// import * as rdd from 'react-device-detect';
// rdd.isMobile = true;



const App = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1000px)' });
const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
  return (
    <div id="app-container"> 
      <div id={isDesktop ? "title" : "mobile-title"}>
        <h1 style={{color: "grey", fontSize: isMobile && "xx-large"}}>gabriel rangel</h1>
        <h1 style={{color: "#179ff4", fontSize: isMobile && "x-large"}}>fullstack web developer </h1>
      </div>
      <div id="main" class={isDesktop ? "absolute" : "overflow-main"}>
        <AnimatePresence>
          <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Home />} />
          </Routes >
        </AnimatePresence>
      </div>
      <nav id={isDesktop ? "navbar" : "mobile-navbar"} class={isDesktop && "absolute"}>
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
      <Background />
    </div>
  );
};

export default App;
