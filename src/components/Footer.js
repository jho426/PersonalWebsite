import React from "react";
import WaveFunction from "./Wave";
import FooterText from "../assets/footer.svg";

const Footer = () => {
    const data = [
        { name: "Email", link: "mailto:j33ho@uwaterloo.ca"},
        { name: "Linkedin", link: "https://www.linkedin.com/in/jacquelineeho/"},
        { name: "Github", link: "https://github.com/jho426"}
    ];


    return (
    <div id = "Footer" className = "w-full h-[400px] flex flex-col">
        <WaveFunction/>
        <div className = "w-full h-full bg-[#131313] mt-[-100px] p-[20px]">
            <img className = "w-full px-10" alt = "" src={FooterText}></img>
            <div className = "text-[#DFDDD7] flex flex-row mt-10">
                <p className = "" >© Jacqueline Ho – 2023</p>
                <div className = "flex flex-row mr-0 ml-auto gap-5">
                    {data.map((link) => (
                        <a href = {link.link} target="_blank"><p className = "px-5 py-1 border border-[2px] rounded-lg">{link.name}</p></a>
                    ))}
                </div>     
            </div>
        </div>
    </div>
    );
}

export default Footer