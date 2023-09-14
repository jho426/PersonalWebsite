import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css"

const NavBar = ({menuOpen, setMenuOpen}) => {
  const [hovered, setHovered] = useState("");
  const [hoveredMenu, setHoveredMenu] = useState(false)
  const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => setMenuOpen(!menuOpen);

  const data = [
    { id: "00", section: "ABOUT" },
    { id: "01", section: "PROJECTS" },
    { id: "02", section: "EXPERIENCE" },
  ];

  return (
    <div id="NavBar" className={`flex flex-row w-full`}>
      <div className={`w-full flex flex-row justify-between mt-5`}>
        <div className="ml-5">
          <button onClick={() => navigate(`/`)}>
            {" "}
            <a className="rounded-full border-black border p-2 hover:underline">JH</a>
          </button>
        </div>
        <div className="invisible lg:visible md:visible flex flex-row gap-10 w-0 md:w-full justify-center mr-5 md:mr-0">
          {data.map((section) => (
            <button onClick={() => navigate(`/${section.section}`)}>
              <a
                className="flex flex-row"
                onMouseEnter={() => setHovered(section.section)}
                onMouseLeave={() => setHovered("")}
              >
                {section.id}{" "}
                {hovered === section.section ? (
                  <p className="mx-[3px]">✦</p>
                ) : (
                  <p className="mx-[3px]">⟡</p>
                )}{" "}
                {section.section}
              </a>
            </button>
          ))}
        </div>
        <div
          className="sm:visible mr-10 text-right w-10 md:w-0 md:invisible lg:invisible z-10"
          onMouseEnter={() => setHoveredMenu(true)} onMouseLeave={() => setHoveredMenu(false)}
          onClick={handleMenuOpen}
        >
          {menuOpen ? (
            <p className="flex flex-row text-white cursor-pointer">{hoveredMenu ? (<p className="mx-[3px]">✦</p>) : (<p className="mx-[3px]">⟡</p>)}{" "}close</p>) 
            : 
            (
            <p className="flex flex-row cursor-pointer">{hoveredMenu ? (<p className="mx-[3px]">✦</p>) : (<p className="mx-[3px]">⟡</p>)}{" "}menu</p>
            )}
        </div>
      </div>
        <div className={`bg-[#131313] h-screen w-screen absolute md:invisible ${menuOpen? `visible` : `invisible`}`}>
          <div className="absolute md:invisible right-6 grid max-cols-1 top-16 gap-3">
            <button className="flex justify-end menu-slide-item" onClick={() => {navigate(`/`); setMenuOpen(false);}}>
              <a className="menu-slide-item">
                home
              </a>
            </button>
           {menuOpen && data.map((section) => (
              <button className="flex justify-end menu-slide-item" onClick={() => {navigate(`/${section.section}`); setMenuOpen(false);}}>
                <a className="menu-slide-item">
                  {(section.section).toLowerCase()}
                </a>
              </button>
            ))}
          </div>
        </div>
    </div>
  );
};

export default NavBar;
