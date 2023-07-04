import React from "react";
import { Route, BrowserRouter as Router,Routes } from "react-router-dom";
import './App.css';
import Innovation from "./Pages/Innovation";
import Main from './Pages/Main';
import Ignites from "./Pages/Ignites";
function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/ignites" element={<Ignites />} />
      
      </Routes>
    </Router>
  )
}

export default App;
