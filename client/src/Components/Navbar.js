import React from "react";
import NavLogo from "../Assets/Images/IedcNavbarLogo.png"
function Navbar()
{   
    
    return(
        <nav className="text-xl sm:text-2xl sm:text-bold mb-3 p-3 text-white flex flex-wrap w-full h-fit justify-center items-center">
            <img className="h-10 w-10 mx-4 my-2" src={NavLogo} href="#"></img>
            <a className="mx-4 my-2" href="#">IGNITES</a>
            <a className="mx-4 my-2" href="#">ABOUT</a>
            <a className="mx-4 my-2" href="#">EVENTS</a>
            <a className="mx-4 my-2" href="#">ANNOUNCEMENTS</a>
            <a className="mx-4 my-2" href="#">INO POINTS</a>
            <a className="mx-4 my-2" href="#">TEAM</a>
            <a className="mx-4 my-2" href="#">CONTACT</a>
        </nav>



    );
}
export default Navbar;