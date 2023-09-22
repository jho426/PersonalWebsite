import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import PersonalImg from "../assets/personal-img.png";
import MoreAboutTitle from "../assets/more-about-title.svg";
import AboutTitle from "../assets/about-title.svg";

const About = () => {
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
    <div className="flex flex-col w-screen h-screen items-center overflow-x-hidden">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {(!menuOpen || windowWidth > 768) && (
        <>
          <div className="flex flex-col md:flex-row lg:flex-row w-full sm:gap-5 md:gap-10 lg:gap-10 my-10">
            <img
              draggable={false}
              alt=""
              className="flex mx-auto w-3/4 transition-transform transform scale-100 hover:scale-110 hover:transition-transform duration-300 ease-in-out md:w-1/3 lg:w-1/3 justify-center"
              src={PersonalImg}
            />
            <div className="flex flex-col mx-auto md:w-2/3 lg:w-2/3 justify-center items-center gap-4 p-10">
              <img draggable={false} alt="" className="w-90" src={AboutTitle} />
              <p className="tracking-tighter leading-7 md:leading-6 w-[90%] text-2xl md:text-3xl">Hey! I'm Jacqueline (she/her) and I'm currently a Software Engineering student at the University of Waterloo.<br/><br/>I'm an aspiring software developer with a passion for building meaningful products through creativity and experience.<br/><br/>I love exploring the connection between design & technology and I'm always seeking new ways to grow my potential!</p>
            </div>
          </div>
          <Skills /> 
          <Footer />
        </>
      )}
    </div>
  );
};

export default About;
