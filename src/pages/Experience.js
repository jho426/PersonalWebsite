import React, {useState} from "react";
import {BsFillArrowDownCircleFill} from "react-icons/bs"
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ExperienceData from "../components/ExperienceData";
import ExperienceTitle from "../assets/experience-title.svg";

const Experience = () => {
    const [experienceData, setExperienceData] = useState(ExperienceData);

    const toggleDropDown = (index) => {
        const updatedData = [...experienceData];
        updatedData[index].showDropDown = !updatedData[index].showDropDown;
        setExperienceData(updatedData);
    };

    return (
        <div className="flex flex-col w-full h-full items-center justify-center">
        <NavBar />
        <img src = {ExperienceTitle}></img>
        <div className="flex flex-col w-full gap-4 m-20">
            {ExperienceData.map((item, index) => (
            <div className = "flex flex-col"> 
            <div className="flex flex-row border-b border-b-black mx-20 align-center gap-10">
                <h1 className = "font-sans font-semibold tracking-tighter text-8xl"> {item.title} </h1>
                <button className = "text-7xl hover:text-[#594E46] hover" onClick={()=> toggleDropDown(index)}><BsFillArrowDownCircleFill/></button>
            </div>
                <div className = {`mx-20 flex flex-row transition-all ease-in-out gap-4 ${item.showDropDown? `visible h-[300px]`: `invisible h-[0px]`}`}>
                    <img className = "w-1/2 rounded-lg p-4" src={item.image} alt=""></img>
                    <img className = "w-1/2 p-4" src={item.description} alt=""></img>
                </div>
            </div>
            ))}
        </div>
        <Footer />
        </div>
  );
};

export default Experience;
