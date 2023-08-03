import React from "react";
import BgLogo from "../../Assets/Images/NameLogo/bgLogo.png";

function NameLogo() {
  return (
    <div className="text-white flex flex-col w-full mt-4 h-fit justify-center items-center mt-5">
      <div className="w-full flex text-center flex-col lg:w-1/2 mt-10 mb-10">
        <h className="text-center md:text-8xl text-4xl tracking-widest text-[#5658dd] font-black mb-3">
        <span className="text-white">ignit</span>ES '22
        </h>
        <br />
        <h className="text-center font-extrabold md:text-4xl text-2xl tracking-widest text-white mb-5">
          IEDC CET
        </h>
        
      </div>
    </div>
  );
}

export default NameLogo;
