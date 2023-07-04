import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';
import NavLogo from "../../Assets/Images/navbar/IedcNavbarLogo.png";

function Navbar({navbarItems}) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="lg:text-lg text-md mb-6 mt-4 text-gray-500 flex flex-wrap w-full justify-center items-center">
      <div className="items-center">
        <div className="hidden md:flex md:flex-wrap items-center">
          <img className="h-10 w-10 mx-4" src={NavLogo} alt="Navbar Logo" />
          {navbarItems.map((item, index) => (
            <a key={index} className="lg:mx-4 mx-2 hover:text-white" href={item.href}  onClick={() => scrollToSection(item.sectionRef)}>
              {item.text}
            </a>
          ))}
        </div>
        <div className="md:hidden flex">
          <img className="h-10 w-10 mx-4" src={NavLogo} alt="Navbar Logo" />
          <button onClick={toggleDropDown}>
            <FaBars className="text-2xl" />
          </button>
          {isDropDownOpen && (
            <div className="absolute top-20 left-0 right-0 flex flex-col items-center justify-center bg-black bg-opacity-80 text-2xl">

              {navbarItems.map((item, index) => (
                <a key={index} className="mx-4 my-2 text-gray-500  hover:text-white" href={item.href} onClick={toggleDropDown}>
                  {item.text}
                </a>

              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
