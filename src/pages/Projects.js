import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProjectData from "../components/ProjectData";
import ProjectsTitle from "../assets/projects-title.svg";
import { useNavigate, useParams } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="flex flex-col w-full h-full">
      <NavBar />
      <img alt="" className="ml-20 w-1/2" src={ProjectsTitle}></img>
      <div className="flex flex-col w-[90%] self-center p-10 gap-10 my-10 grid grid-cols-4 items-center justify-center border-t border-t-black border-t-[2px]">
        {ProjectData.map((item, index) => (
          <div className = "flex flex-col gap-4 h-[490px]">
              <div className = "w-[300px] "><p>NO. {index} – {item.title}</p></div>
                <button className = "w-[300px] h-[350px]" onClick={()=>navigate(`/PROJECTS/${item.title}`)}>
                  <img key={index} alt="" src={item.image} className = "rounded-lg border-black border-[1px] object-cover w-full h-full hover:rounded-full"/>
                </button>
              <div className = "w-[300px] h-[50px]">
                <img key={index} alt="" src={item.description} className = ""/>
              </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Projects;
