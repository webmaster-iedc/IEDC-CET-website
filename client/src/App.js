import React from "react";
import { Route, BrowserRouter as Router,Routes } from "react-router-dom";
import './App.css';
import Innovation from "./Pages/Innovation";
import Main from './Pages/Main';

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/innovation" element={<Innovation />} />
      </Routes>
    </Router>
  )
}

export default App;
