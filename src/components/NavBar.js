import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
const NavBar = () => { 

    const [hovered, setHovered] = useState("")
    const navigate = useNavigate();

    const data = [
        { id: "00", section: 'ABOUT' },
        { id: "01", section: 'PROJECTS' },
        { id: "02", section: 'EXPERIENCE' },
    ];

    return (
    <div id = "NavBar" className = "flex flex-row w-full">
        <div className = "w-full flex flex-row items-center justify-center mt-5">
            <div className="absolute left-5" >
                <button onClick={()=>navigate(`/`)}> <a>JACQUELINE HO</a></button>
            </div>
            <div className = "flex flex-row gap-10">
            {data.map((section) => (
                 <button onClick={()=>navigate(`/${section.section}`)}>
                    <a className = "flex flex-row" onMouseEnter={() => setHovered(section.section)} onMouseLeave={() => setHovered("")}>
                        {section.id} {hovered === section.section ? <p className = "mx-[3px]">✦</p> : <p className = "mx-[3px]">⟡</p>} {section.section}
                    </a>
                 </button>
            ))}
            </div>
        </div>  
    </div>
    );
}

export default NavBar
