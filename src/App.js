import React, {useState} from "react";
import AnimatedRoutes from "./AnimatedRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Router>
        <AnimatedRoutes darkMode={darkMode} setDarkMode={setDarkMode}></AnimatedRoutes>
    </Router>   
  );
}

export default App;
