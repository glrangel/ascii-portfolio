import './App.css';
import React from 'react';
import Background from './components/Background';
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import AnimatedRoute from "./components/AnimatedRoute";
import myResume from "./static/GabrielRangelResume2024.pdf";

import { easeInOut, motion } from "framer-motion";
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
      <div id="route-name">
        <h1>{useLocation().pathname.split("")}</h1>
      </div>
      {/* <AnimatedRoute text={useLocation().pathname.split("")}/> */}
      <div id="main" class={isDesktop ? "absolute" : "overflow-main mobile-main"}>
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
            <NavLink to={myResume} target="_blank" rel="noopener noreferrer" >resume</NavLink>
          </motion.a>
        </nav>
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
