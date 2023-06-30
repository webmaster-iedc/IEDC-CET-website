import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';
import Logo from "../Assets/Images/IEDC-logo-2.png";

function InnovationNavbar() {
  const [isDropDownOpen,setIsDropDownOpen]=useState(false);
  const toggleDropDown=()=>{
    setIsDropDownOpen(!isDropDownOpen);
  };
  const links = [
    { title: 'HOME', href: '#' },
    { title: 'ABOUT', href: '#' },
    { title: 'ANNOUNCEMENTS', href: '#' },
    { title: 'HIGHLIGHTS', href: '#' },
    { title: 'FAQ', href: '#' },
    { title: 'CONTACT', href: '#' }
  ];
  return (
    <nav className="py-5 flex flex-wrap w-full h-fit justify-evenly items-center">
      {/* <div className="flex flex-wrap justify-evenly items-center"> */}
        <img className="h-15 w-20" src={Logo} href="#"></img>
        <div className="flex justify-center gap-10 items-top">
          {links.map((link)=>(
            <a className="font-inter text-base font-normal leading-6 tracking-normal text-gray-400" href={link.href} key={link.title}>{link.title}</a>
          ))}
        </div>
        {/* <div className="md:hidden">
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
        </div> */}
      {/* </div> */}
    </nav>
  );
}

export default InnovationNavbar;
