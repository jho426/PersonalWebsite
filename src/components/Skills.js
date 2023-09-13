import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import BannerScroll from "./BannerScroll";

const Skills = () => {
    const skills = [
        {skill: "JAVA", blurb: "A PROGRAMMING LANGUAGE I USE TO IMPLEMENT OOP DESIGN PRINCIPLES IN MY PROJECTS"},
        {skill: "PYTHON", blurb: "A PROGRAMMING LANGUAGE I USE TO CREATE GAMES AND INTERACTIVE SOFTWARE PROJECTS"}, 
        {skill: "C", blurb: "A PROCEDURAL PROGRAMMING LANGUAGE I USE TO SOLVE PROBLEMS AND ORGANIZE DATA"},
        {skill: "C++", blurb: "A PROGRAMMING LANGUAGE I USE TO BUILD APPLICATIONS AND SOLVE PROBLEMS"}, 
        {skill: "REACT.JS", blurb: "THE FRAMEWORK I USE TO BUILD MY WEBSITES (INCLUDING THIS ONE"},
        {skill: "TAILWIND CSS", blurb: "THE LANGUAGE I USE TO CREATE AESTHETICALLY PLEASING WEBSITES"},
        {skill: "FIGMA", blurb: "THE TOOL I USE TO PLAN OUT ANY DESIGNS, LAYOUTS, OR MOODBOARDS FOR MY PROJECTS"},
        {skill: "PHOTOSHOP", blurb: "THE TOOL I USE TO CREATE UNIQUE GRAPHICS"},
        {skill: "REACT NATIVE", blurb: "THE TOOL I USE TO BUILD MOBILE APPLICATIONS"},


    ]
    return (
        <div className = "flex flex-col w-full h-full">
            <div className = "mt-1 mx-auto0">
                <BannerScroll/>
                <p className = "w-[200px] my-10 ml-[40px]" >A GALLERY ✦ OF MY TECHNICAL SKILLS</p>
                <div className = "flex w-full gap-10 my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 mx-auto items-center justify-center">
                    {skills.map((item) => (
                        <div className = "bg-[#252526] hover:bg-[#594E46] w-[200px] md:w-[250px] lg:w-[250px] h-[200px] rounded-lg text-[#f5f4eb] p-5 text-sm">
                            <h1>{item.skill}</h1>
                            <p>{item.blurb}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills