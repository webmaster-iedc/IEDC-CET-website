import React from "react";
import InnovationNavbar from "../Components/InnovationNavbar";
import InnovationHome from "../Components/InnovationHome";
import Background from "../Assets/Images/innovation-bg-2.jpg";

function Innovation()
{
    const background = {
        border: 'none',
        background: `url(${Background}), red 50% `,
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'center',
        backgroundSize: 'cover',
      };
    return ( 
    <div className="flex flex-col">
      <div className="flex-grow" style={{ ...background,backgroundPositionY:"-755px"}}>
        <InnovationNavbar />
        <InnovationHome />
      </div>
    </div>
     );
}
 
export default Innovation;