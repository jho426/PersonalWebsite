import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import PersonalImg from "../assets/personal-img.png";
import AboutDescription from "../assets/about-me.svg";
import AboutTitle from "../assets/about-title.svg";

const About = () => {
    return (
        <div className = "flex flex-col w-full h-full items-center justify-center">
            <NavBar/>
            <div className = "flex flex-row w-full gap-10 my-10">
                <img draggable={false} alt = "" className = "flex w-1/3 justify-center" src = {PersonalImg}/>
                <div className="flex flex-col w-2/3 justify-center items-center gap-4 p-10">
                    <img draggable={false} alt = "" className = "w-90" src = {AboutTitle}/>
                    <img draggable={false} alt = "" className = "w-90" src = {AboutDescription}/>
                </div>
            </div>
            <Skills/>
            <Footer/>
        </div>
    );
}

export default About
