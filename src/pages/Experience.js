import React, { useEffect, useState } from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
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
          <img
            draggable={false}
            src={ExperienceTitle}
            className="my-10 lg:w-3/4 lg:my-20"
          ></img>
          <div className="flex flex-col w-full">
            {ExperienceData.map((item, index) => (
              <div className="flex flex-col w-full">
                <div className="flex flex-row rounded-lg w-5/6 p-4 border border-black mx-auto align-center gap-10">
                  <div className="w-full">
                    <h1 className="font-sans font-semibold tracking-tighter mb-4 text-6xl md:text-8xl lg:text-8xl">
                      {" "}
                      {item.title}{" "}
                    </h1>
                    <div className="flex flex-row w-full">
                      <p className="">{item.position} | {item.date}</p>
                      <button
                        className="mr-0 mx-auto text-xl md:text-4xl lg:text-4xl border-black border rounded-full px-4 hover:text-[#594E46] my-auto hover"
                        onClick={() => toggleDropDown(index)}
                      >
                        {item.showDropDown ? <p>CLOSE </p> : <p>OPEN</p>}
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className={`mx-auto mt-5 w-5/6 flex flex-col transition-all duration-700 ease-in-out gap-4 overflow-y-hidden ${
                    item.showDropDown ? `h-[700px] md:h-[400px]` : `h-[0px]`
                  }`}
                >
                  <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 list-none gap-4 flex flex-row">
                    {item.tools.map((tool) => (
                      <li className="text-center py-1 border border-black rounded-full">
                        {" "}
                        {tool}{" "}
                      </li>
                    ))}
                  </div>
                  <p className ="tracking-tighter text-xl md:text-2xl">{item.description}</p>
                  <div className = "flex flex-col w-full">{item.descriptionText.map((des) => (
                    <li className="tracking-tighter text-xl md:text-2xl">
                      {des}
                    </li>
                  ))}
                  </div>
                  <a href={item.link} target="_blank">
                    <div className="mx-4 mb-10 border border-black w-[100px] text-center rounded-full text-md hover:underline">
                      WEBSITE
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Experience;
