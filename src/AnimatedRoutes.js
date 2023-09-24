import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import React from 'react'
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Project from "./pages/Project";

function AnimatedRoutes({darkMode, setDarkMode}) {
    const location = useLocation();
    return (
      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route path = "/" element = {<Home darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
            <Route path = "/ABOUT" element = {<About darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
            <Route path = "/PROJECTS" element = {<Projects darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
            <Route path = "/EXPERIENCE" element = {<Experience darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
            <Route path = "/PROJECTS/:projectTitle" element = {<Project darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
        </Routes>
      </AnimatePresence>
    );
  
}

export default AnimatedRoutes