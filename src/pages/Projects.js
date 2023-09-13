import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProjectData from "../components/ProjectData";
import ProjectsTitle from "../assets/projects-title.svg";
import { useNavigate, useParams } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (windowWidth > 768) {
      setMenuOpen(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    const updateSize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  });

  return (
    <div className="flex flex-col w-full h-full">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {(!menuOpen || windowWidth > 768) && (
        <>
      <img draggable={false} alt="" className="lg:ml-20 lg:w-1/2 mx-auto md:w-3/4 md:px-auto" src={ProjectsTitle}></img>
      <div className="flex flex-col w-[90%] mx-auto p-10 lg:gap-x-20 lg:my-10 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 items-center justify-center border-t border-t-black border-t-[2px]">
        {ProjectData.map((item, index) => (
          <div className = "flex flex-col h-[490px]">
              <div className = "w-[280px] mb-3"><p>NO. {index} – {item.title}</p></div>
                <button className = "w-[280px] h-[350px] border-black border-[1px] rounded-lg overflow-hidden" onClick={()=>navigate(`/PROJECTS/${item.title}`)}>
                  <img draggable={false} key={index} alt="" src={item.image} className = "hover:scale-110 object-cover w-full h-full ease-in-out transition-all duration-200"/>
                </button>
              <div className = "w-[280px] h-[50px] mt-2">
                <img draggable={false} key={index} alt="" src={item.description} className = ""/>
              </div>
          </div>
        ))}
      </div>
      <Footer/>
      </>)}
    </div>
  );
};

export default Projects;
