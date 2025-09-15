import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import BannerScroll from "./BannerScroll";

const Skills = () => {
    const skills = [
        {skill: "JAVA", blurb: "A PROGRAMMING LANGUAGE I USE TO IMPLEMENT OOP DESIGN PRINCIPLES IN MY PROJECTS"},
        {skill: "PYTHON", blurb: "A PROGRAMMING LANGUAGE I USE TO CREATE GAMES AND INTERACTIVE SOFTWARE PROJECTS"}, 
        {skill: "BASH", blurb: "A SCRIPTING LANGUAGE I USE TO AUTOMATE TASKS ON LINUX SYSTEMS"},
        {skill: "YAML", blurb: "A MARKUP LANGUAGE I USE TO WRITE CONFIGURATION FILES"},
        {skill: "C", blurb: "A PROCEDURAL PROGRAMMING LANGUAGE I USE TO SOLVE PROBLEMS AND ORGANIZE DATA"},
        {skill: "C++", blurb: "A PROGRAMMING LANGUAGE I USE TO BUILD APPLICATIONS AND SOLVE PROBLEMS"}, 
        {skill: "REACT.JS", blurb: "THE FRAMEWORK I USE TO BUILD MY WEBSITES (INCLUDING THIS ONE"},
        {skill: "NEXT.JS", blurb: "THE FRAMEWORK I USE TO BUILD SERVER-SIDE RENDERED REACT APPLICATIONS"},
        {skill: "REACT NATIVE", blurb: "THE TOOL I USE TO BUILD MOBILE APPLICATIONS"},
        {skill: "JAVASCRIPT/TYPESCRIPT", blurb: "THE PROGRAMMING LANGUAGE I USE TO BUILD DYNAMIC AND INTERACTIVE WEB APPS"},
        {skill: "TAILWIND/CSS", blurb: "THE LANGUAGE I USE TO CREATE AESTHETICALLY PLEASING WEBSITES"},
        {skill: "DART", blurb: "THE PROGRAMMING LANGUAGE I USE TO BUILD MOBILE APPLICATIONS"},
        {skill: "GO", blurb: "THE PROGRAMMING LANGUAGE I USE TO BUILD WEB SERVICES, APIS, AND MICROSERVICES"},
        {skill: "SQL", blurb: "THE LANGUAGE I USE TO CREATE AND MANIPULATE DATABASES"},
        {skill: "DOCKER", blurb: "THE TOOL I USE TO CONTAINERIZE MY APPLICATIONS"},
        {skill: "FIGMA", blurb: "THE TOOL I USE TO PLAN OUT ANY DESIGNS, LAYOUTS, OR MOODBOARDS FOR MY PROJECTS"},
        {skill: "GIT/GITHUB", blurb: "THE VERSION CONTROL SYSTEM I USE TO MANAGE AND COLLABORATE ON MY PROJECTS"},
        {skill: "BUILDKITE", blurb: "THE TOOL I USE TO AUTOMATE THE BUILD AND DEPLOYMENT OF MY APPLICATIONS"},
        {skill: "SWIFT", blurb: "THE PROGRAMMING LANGUAGE I USE TO BUILD IOS APPLICATIONS"},
        {skill: "KOTLIN", blurb: "THE PROGRAMMING LANGUAGE I USE TO BUILD ANDROID APPLICATIONS"},
    ]
    return (
        <div className = "flex flex-col w-full">
            <BannerScroll/>
            <div className = "mt-1 mx-auto">
                <p className = "w-[220px] my-10 tracking-tighter text-lg md:text-2xl" >A GALLERY ✦ OF MY TECHNICAL SKILLS</p>
                <div className = "flex w-full gap-10  my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto self-center items-center justify-center">
                    {skills.map((item) => (
                        <div className = "bg-[#252526] flex flex-col gap-2 hover:bg-[#594E46] tracking-tighter text-xs md:text-sm w-[150px] md:w-[250px] lg:w-[250px] h-[160px] rounded-lg text-[#f5f4eb] p-5">
                            <h1 className = "font-bold">{item.skill}</h1>
                            <p>{item.blurb}</p>
                        </div>
                    ))}
                </div>
            </div>
            <BannerScroll/>
        </div>
    );
}

export default Skills