import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';
import NavLogo from "../Assets/Images/IedcNavbarLogo.png";
import { NavLink as Link } from 'react-router-dom';
function Navbar() {
  const [isDropDownOpen,setIsDropDownOpen]=useState(false);
  const toggleDropDown=()=>{
    setIsDropDownOpen(!isDropDownOpen);
  };
  const links = [
    { title: 'IGNITES', href: '#' },
    { title: 'ABOUT', href: '#' },
    { title: 'EVENTS', href: '#' },
    { title: 'ANNOUNCEMENTS', href: '#' },
    { title: 'ACHIEVEMENTS', href: '#' },
    { title: 'INO POINTS', href: '#' },
    { title: 'TEAM', href: '#' },
    { title: 'CONTACT', href: '#' }
  ];
  return (
    <nav className="lg:text-lg text-md  mb-6 mt-4  text-white flex flex-wrap w-full  justify-center items-center">
      <div className="items-center">
        <div className="hidden md:flex md:flex-wrap items-center">
          <img className="h-10 w-10 mx-4 " src={NavLogo} href="#"></img>
          {links.map((link)=>(<a className="lg:mx-4 mx-2" href={link.href} key={link.title}>{link.title}</a>))}
        </div>
        <div className="md:hidden flex ">
        <img className="h-10 w-10 mx-4" src={NavLogo} href="#"></img>
          <button onClick={toggleDropDown}>
            <FaBars className="text-white text-2xl" />
          </button>
          <div>{isDropDownOpen && (
            <div className="absolute top-20 left-0 right-0 flex flex-col items-center justify-center bg-black bg-opacity-80 text-2xl">
              {links.map((link)=>(
                <a className="mx-4 my-2" href={link.href} key={link.title} onClick={toggleDropDown}>{link.title}</a>
              ))}
            </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
