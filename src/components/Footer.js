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
    <div id = "Footer" className = "w-full h-[400px] flex flex-col">
        <WaveFunction/>
        <div className = "w-full h-full bg-[#131313] mt-[-100px] p-[20px]">
            <img draggable={false} className = "w-full md:px-10" alt = "" src={FooterText}></img>
            <div className = "text-[#A09E9E] flex flex-row mt-10">
                <p className = "text-[#A09E9E] tracking-tighter text-md my-auto" >© Jacqueline Ho – 2023</p>
                <div className = "flex flex-row mr-0 ml-auto gap-2 md:gap-5 lg:gap-5">
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