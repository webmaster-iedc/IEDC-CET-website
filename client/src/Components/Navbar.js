import React from "react";
function Navbar()
{   
    
    return(
        <nav className="text-white w-full h-fit flex justify-between items-center">
            <h>MATHEW</h>
            <a className="text-gray-300 hover:text-white" href="#ignites">
                IGNITES
              </a>
              <a className="text-gray-300 hover:text-white" href="#about">
                ABOUT
              </a>
              <a className="text-gray-300 hover:text-white" href="#events">
                EVENTS
              </a>
              <a className="text-gray-300 hover:text-white" href="#announcements">
                ANNOUNCEMENTS
              </a>
              <a className="text-gray-300 hover:text-white" href="#achievements">
                ACHIEVEMENTS
              </a>
              <a className="text-gray-300 hover:text-white" href="#inopoints">
                INO POINTS
              </a>
              <a className="text-gray-300 hover:text-white" href="#team">
                TEAM
              </a>
              <a className="text-gray-300 hover:text-white" href="#contact">
                CONTACT
              </a>
        </nav>
    );
}
export default Navbar;