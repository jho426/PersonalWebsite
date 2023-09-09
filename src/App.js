import React from "react";
import AnimatedRoutes from "./AnimatedRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <Router>
        <AnimatedRoutes></AnimatedRoutes>
    </Router>   
  );
}

export default App;
