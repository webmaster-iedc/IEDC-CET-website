import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';
import NavLogo from "../Assets/Images/IedcNavbarLogo.png";
import { NavLink as Link } from 'react-router-dom';
function Navbar() {
  const [isDropDownOpen,setIsDropDownOpen]=useState(false);
  const toggleDropDown=()=>{
    setIsDropDownOpen(!isDropDownOpen);
  };
  return (
    <nav className="lg:text-lg text-md  mb-6 mt-4  text-white flex flex-wrap w-full  justify-center items-center">
      <div className=" items-center">
        
        <div className="hidden md:flex md:flex-wrap">
          <img className="h-10 w-10 mx-4 " src={NavLogo} href="#"></img>
          <a className="lg:mx-4 mx-2 " href="#">IGNITES</a>
          <a className="lg:mx-4 mx-2 " href="#">ABOUT</a>
          <a className="lg:mx-4 mx-2" href="#">EVENTS</a>
          <a className="lg:mx-4 mx-2" href="#">ANNOUNCEMENTS</a>
          <a className="lg:mx-4 mx-2" href="#">ACHIEVEMENTS</a>
          <a className="lg:mx-4 mx-2" href="#">INO POINTS</a>
          <a className="lg:mx-4 mx-2" href="#">TEAM</a>
          <a className="lg:mx-4 mx-2" href="#">CONTACT</a>
        </div>
        <div className="md:hidden flex ">
        <img className="h-10 w-10 mx-4" src={NavLogo} href="#"></img>
          <button onClick={toggleDropDown}>
            <FaBars className="text-white text-2xl" />
          </button>
          <div>{isDropDownOpen && (
            <div className="absolute top-20 left-0 right-0 flex flex-col items-center justify-center bg-black bg-opacity-80 text-2xl">
              <a className="mx-4 my-2" href="#" onClick={toggleDropDown}>IGNITES</a>
              <a className="mx-4 my-2" href="#" onClick={toggleDropDown}>ABOUT</a>
              <a className="mx-4 my-2" href="#" onClick={toggleDropDown}>EVENTS</a>
              <a className="mx-4 my-2" href="#" onClick={toggleDropDown}>ANNOUNCEMENTS</a>
              <a className="mx-4 my-2" href="#" onClick={toggleDropDown}>ACHIEVEMENTS</a>
              <a className="mx-4 my-2" href="#" onClick={toggleDropDown}>INO POINTS</a>
              <a className="mx-4 my-2" href="#" onClick={toggleDropDown}>TEAM</a>
              <a className="mx-4 my-2" href="#" onClick={toggleDropDown}>CONTACT</a>
            </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
