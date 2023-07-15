import React from "react";
import { Route, BrowserRouter as Router,Routes } from "react-router-dom";
import './App.css';
import Innovation from "./Pages/Innovation";
import Main from './Pages/Main';
import Ignites from "./Pages/Ignites";
import CampusAmbassador from "./Pages/CampusAmbassador";
function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/ignites" element={<Ignites />} />
        <Route path="/campusambassador" element={<CampusAmbassador />} />
      </Routes>
    </Router>
  )
}

export default App;
