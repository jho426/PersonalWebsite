import React, {useState} from "react";
import { useParams } from "react-router-dom";
import ProjectData from "../components/ProjectData";
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import {motion} from "framer-motion";

const Project = ({}) => {
    const navigate = useNavigate();
    const { projectTitle } = useParams()
    const projectItem = ProjectData.find((p) => p.title === projectTitle);
    const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
    const [hoveredBack, setHoveredBack] = useState(false);
    const [hoveredNext, setHoveredNext] = useState(false);

    const index = (ProjectData.indexOf(projectItem) + 1 < ProjectData.length? ProjectData.indexOf(projectItem) + 1 : 0);
    const nextProjectItem = ProjectData[index];

    return (
        <div className="flex flex-col w-full h-full items-center justify-center">
            <div className="flex flex-col w-full gap-4 mx-20 my-10">
                <div className = "w-full flex">
                    <button className = "px-2 ml-10 border-black border-[1px] rounded-full" onClick={()=>navigate(`/PROJECTS`)} onMouseEnter={()=> setHoveredBack(true)} onMouseLeave={()=> setHoveredBack(false)}>
                        {hoveredBack? <p>✦ BACK</p> : <p>⟡ BACK</p>}
                    </button>
                    <button className = "px-2 border-black border-[1px] rounded-full ml-auto mr-10" onClick={()=>navigate(`/PROJECTS/${nextProjectItem.title}`)} onMouseEnter={()=> setHoveredNext(true)} onMouseLeave={()=> setHoveredNext(false)}>
                        {hoveredNext? <p>NEXT: {nextProjectItem.title} ✦</p> : <p>NEXT: {nextProjectItem.title} ⟡</p>}
                    </button>
                </div>
                <div className = "w-3/4 mx-auto">
                    <div className = "w-full mx-auto border-b-black border-b-[2px] py-5">
                        <img draggable={false} className ="w-3/4" src={projectItem.titleImg}></img>
                    </div>
                    <div className = "flex flex-row gap-4 mx-auto my-5">
                        {(projectItem.tools).map((item, index) => (
                            <div className = "border px-2 border-black rounded-full">{item}</div>
                        ))}
                    </div>
                    <motion.div className = "w-full flex justify-center mb-5 mx-auto" initial= {{width:"30%"}}  animate= {{width:"90%"}} transition={transition}>
                        <motion.img className = "rounded-lg border-black border-[2px]" src={projectItem.largeImg} draggable="false"/>
                    </motion.div>
                    <div className="w-full mx-auto flex">
                        <img draggable={false} className="" src={projectItem.about}></img>
                    </div>
                    <div className="w-full gap-4 flex flex-row my-5 border-y border-black border-y-[2px] py-5">
                        {(projectItem.links).map((item, index) => (
                            <a href = {item.link} target="_blank">
                                <div className = "px-2 flex flex-row hover:underline">{item.name}</div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
  );
};

export default Project;
