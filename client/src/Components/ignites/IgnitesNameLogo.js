import React from "react";
import BgLogo from "../../Assets/Images/NameLogo/bgLogo.png";

function NameLogo() {
  return (
    <div className="text-white flex flex-col w-full h-fit justify-center items-center">
      <div className="w-full flex text-center flex-col lg:w-1/2">
        <h className="text-center md:text-8xl text-2xl tracking-widest text-[#5658dd] font-black">
        <span className="text-white">ignit</span>ES '22
        </h>
        <br />
        <h className="text-center font-extrabold md:text-4xl text-xs tracking-widest text-white ">
          IEDC CET
        </h>
        
      </div>
    </div>
  );
}

export default NameLogo;
