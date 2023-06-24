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
    <nav className="text-lg  mb-6 mt-4 p-3 text-white flex flex-wrap w-full h-fit justify-center items-center">
      <div className="flex flex-wrap gap-10 items-center">
        <img className="h-10 w-10 mx-4 my-2" src={NavLogo} href="#"></img>
        <div className="hidden md:flex">
          <a className="mx-4 my-2" href="#">IGNITES</a>
          <a className="mx-4 my-2" href="#">ABOUT</a>
          <a className="mx-4 my-2" href="#">EVENTS</a>
          <a className="mx-4 my-2" href="#">ANNOUNCEMENTS</a>
          <a className="mx-4 my-2" href="#">ACHIEVEMENTS</a>
          <a className="mx-4 my-2" href="#">INO POINTS</a>
          <a className="mx-4 my-2" href="#">TEAM</a>
          <a className="mx-4 my-2" href="#">CONTACT</a>
        </div>
        <div className="md:hidden">
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
// function Navbar() {
//   return (
//     <nav className="z-10 h-16 flex bg-green-500 justify-between px-4 sm:px-10">
//       <div className="flex items-center">
//         <img className="h-10 w-10 mx-4 my-2" src={NavLogo} alt="Logo" />
//         <Link
//           to="#"
//           className="mx-4 my-2 text-white flex items-center hover:text-black"
//           activeClassName="text-black"
//         >
//           IGNITES
//         </Link>
//       </div>
//       <div className="hidden md:flex">
//         <Link
//           to="#"
//           className="mx-4 my-2 text-white hover:text-black"
//           activeClassName="text-black"
//         >
//           ABOUT
//         </Link>
//         <Link
//           to="#"
//           className="mx-4 my-2 text-white hover:text-black"
//           activeClassName="text-black"
//         >
//           EVENTS
//         </Link>
//         <Link
//           to="#"
//           className="mx-4 my-2 text-white hover:text-black"
//           activeClassName="text-black"
//         >
//           ANNOUNCEMENTS
//         </Link>
//         <Link
//           to="#"
//           className="mx-4 my-2 text-white hover:text-black"
//           activeClassName="text-black"
//         >
//           INO POINTS
//         </Link>
//         <Link
//           to="#"
//           className="mx-4 my-2 text-white hover:text-black"
//           activeClassName="text-black"
//         >
//           TEAM
//         </Link>
//         <Link
//           to="#"
//           className="mx-4 my-2 text-white hover:text-black"
//           activeClassName="text-black"
//         >
//           CONTACT
//         </Link>
//       </div>
//       <div className="md:hidden">
//         <FaBars className="text-white text-2xl" />
//       </div>
//     </nav>
//   );
// };

export default Navbar;
