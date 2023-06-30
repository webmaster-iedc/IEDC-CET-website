import React from "react";
import InnovationNavbar from "../Components/InnovationNavbar";
import InnovationHome from "../Components/InnovationHome";
import Background from "../Assets/Images/innovation-bg-2.jpg";
import InnovationAbout from "../Components/InnovationAbout";
import InnovationProcess from "../Components/InnovationProcess";
import InnovationHighlights from "../Components/InnovationHiglights";


function Innovation()
{
    const background = {
        border: 'none',
        // background: `url(${Background}), black 50% `,/
        background:'black 50%',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'center',
        backgroundSize: 'cover',
      };
    return ( 
    <div className="flex flex-col">
      <div className="flex-grow" style={{ ...background,backgroundPositionY:"-755px"}}>
        <InnovationNavbar />
        <InnovationHome />
        <InnovationAbout />
        <InnovationProcess />
        <InnovationHighlights />
      </div>
    </div>
     );
}
 
export default Innovation;