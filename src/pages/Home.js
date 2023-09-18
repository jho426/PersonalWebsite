import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BannerImg from "../assets/banner.svg";
import WelcomeImg from "../assets/welcome.svg";
import "../index.css"

const Home = () => {
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
    }
  });

  return (
    <>
    <div className="flex flex-col w-full h-[70vh] md:h-screen lg:h-screen items-center overflow-x-hidden">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {(!menuOpen || windowWidth > 768) && (
        <>
          <div className="flex flex-col w-full my-auto items-center justify-center gap-10">
            <img
              className="flex w-4/6 md:w-1/2 lg:w-1/2"
              src={BannerImg}
              alt=""
              draggable="false"
            />
            <img
              className="w-1/3 md:w-1/4 lg:w-1/5"
              src={WelcomeImg}
              alt=""
              draggable="false"
            />
          </div>
        </>
      )}
    </div>
    <Footer />
    </>
  );
};

export default Home;
