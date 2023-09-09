import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import React from 'react'
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Project from "./pages/Project";

function AnimatedRoutes() {
    const location = useLocation();
    return (
      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/ABOUT" element = {<About/>}/>
            <Route path = "/PROJECTS" element = {<Projects/>}/>
            <Route path = "/EXPERIENCE" element = {<Experience/>}/>
            <Route path = "/PROJECTS/:projectTitle" element = {<Project/>}/>
        </Routes>
      </AnimatePresence>
    );
  
}

export default AnimatedRoutes