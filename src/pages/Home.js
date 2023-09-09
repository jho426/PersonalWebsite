import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BannerImg from "../assets/banner.svg";
import WelcomeImg from "../assets/welcome.svg";

const Home = () => {
    return (
        <div className = "flex flex-col w-full h-full items-center justify-center">
            <NavBar/>
            <div className = "flex flex-col w-full m-10 items-center justify-center gap-10">
                <img className = "w-1/2" src={BannerImg} alt="" draggable="false"/>
                <img className = "w-1/5" src={WelcomeImg} alt="" draggable="false"/>    
            </div>
            <Footer/>
        </div>
    );
}

export default Home
