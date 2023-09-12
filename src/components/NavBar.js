import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
const NavBar = () => { 

    const [hovered, setHovered] = useState("");
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuOpen = () => setMenuOpen(!menuOpen);
    
    const data = [
        { id: "00", section: 'ABOUT' },
        { id: "01", section: 'PROJECTS' },
        { id: "02", section: 'EXPERIENCE' },
    ];
    

    return (
    <div id = "NavBar" className = "flex flex-row w-full">
        <div className = "w-full flex flex-row items-center justify-center mt-5">
            <div className="absolute left-5" >
                <button onClick={()=>navigate(`/`)}> <a className = "rounded-full border-black border p-2">JH</a></button>
            </div>
            <div className = "invisible lg:visible md:visible flex flex-row gap-10">
                {data.map((section) => (
                    <button onClick={()=>navigate(`/${section.section}`)}>
                        <a className = "flex flex-row" onMouseEnter={() => setHovered(section.section)} onMouseLeave={() => setHovered("")}>
                            {section.id} {hovered === section.section ? <p className = "mx-[3px]">✦</p> : <p className = "mx-[3px]">⟡</p>} {section.section}
                        </a>
                    </button>
                ))}
            </div>
            <div className = "sm:visible md:invisible lg:invisible" onClick = {handleMenuOpen}>
                {menuOpen ? (<IoCloseSharp size={30} />) : (<MdOutlineMenu size={30} />)}
            </div>
        </div>  
    </div>
    );
}

export default NavBar
