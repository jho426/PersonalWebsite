import React from "react";
import WaveFunction from "./Wave";
import FooterText from "../assets/footer.svg";
import NavBar from "./NavBar";

const Footer = () => {
    const data = [
        { name: "Email", link: "mailto:j33ho@uwaterloo.ca"},
        { name: "Linkedin", link: "https://www.linkedin.com/in/jacquelineeho/"},
        { name: "Github", link: "https://github.com/jho426"}
    ];


    return (
    <div id = "Footer" className = "w-full h-1/4 md:h-1/3 mb-0 mt-auto">
        <div className = "w-full h-[100px] ">
            <WaveFunction/>
        </div>
        <div className = "w-full bg-[#131313] h-[200px]">
            <img draggable={false} className = "w-full md:w-5/6 px-4 py-5 mx-auto md:px-10" alt = "" src={FooterText}></img>
            <div className = "text-[#A09E9E] bg-[#131313] w-full p-4 flex flex-row mx-auto">
                <p className="tracking-tighter text-xs md:text-md lg:text-lg ">made with love ♡</p>
                <div className = "flex flex-row mr-0 ml-auto gap-2 text-xs md:text-md lg:text-lg md:gap-5 lg:gap-5">
                    {data.map((link) => (
                        <a href = {link.link} target="_blank"><p className = "tracking-tighter px-5 py-1 border border-[#A09E9E] border-[1px] rounded-full hover:text-[#939e4f] hover:border-[#939e4f]">{link.name}</p></a>
                    ))}
                </div>    
            </div>
        </div>
    </div>
    );
}

export default Footer