import React from "react";
import { useParams } from "react-router-dom";
import ProjectData from "../components/ProjectData";
const Project = ({}) => {

    const { projectTitle } = useParams()
    const projectItem = ProjectData.find((p) => p.title === projectTitle);
    return (
        <div className="flex flex-col w-full h-full items-center justify-center">
            <div className="flex flex-col w-full gap-4 m-20">
                <div className = "w-3/4 mx-auto border-b-black border-b-[2px]">
                    <img className ="w-3/4" src={projectItem.titleImg}></img>
                </div>
                <div className="w-full flex justify-center"> 
                    <img className="rounded-lg border-black border-[2px]" src={projectItem.largeImg}/>
                </div>
                <div className="w-full flex justify-center">
                    <img className="" src={projectItem.about}></img>
                </div>
            </div>
        </div>
  );
};

export default Project;
