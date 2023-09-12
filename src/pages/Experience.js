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
        <img draggable={false} src = {ExperienceTitle} className="my-10 lg:w-3/4 lg:my-20"></img>
        <div className="flex flex-col w-full">
            {ExperienceData.map((item, index) => (
            <div className = "flex flex-col"> 
                <div className="flex flex-row rounded-lg p-4 border border-black mx-20 align-center gap-10">
                    <div>
                        <h1 className = "font-sans font-semibold tracking-tighter text-8xl"> {item.title} </h1>
                        <p className="">{item.date}</p>
                    </div>
                    <button className = "mr-0 mx-auto text-3xl border-black border rounded-full px-4 hover:text-[#594E46] my-auto hover" onClick={()=> toggleDropDown(index)}>
                        {item.showDropDown? <p>CLOSE </p>:<p>OPEN</p>}
                    </button>
                </div>
                <div className = {`mx-20 mt-5 flex flex-col transition-all duration-700 ease-in-out gap-4 overflow-y-hidden ${item.showDropDown? `h-[300px]`: `h-[0px]`}`}>
                    <div className = "w-full list-none gap-4 flex flex-row">
                        {(item.tools).map(tool => <li className = "px-4 py-1 border border-black rounded-full"> {tool} </li>)}
                    </div>
                    <img draggable={false} className = "w-full p-4" src={item.description} alt=""></img>
                </div>
           </div>
            ))}
        </div>
        <Footer />
        </div>
  );
};

export default Experience;
