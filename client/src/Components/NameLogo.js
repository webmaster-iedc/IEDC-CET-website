import React from "react";
import BgLogo from "../Assets/Images/bgLogo.png";
function NameLogo() {
  return (
    <div className=" text-white  flex flex-col  w-full  h-fit justify-center items-center">
      <div className="w-full flex text-center flex-col lg:w-1/2 ">
        <h className="text-center md:text-5xl text-2xl tracking-widest text-[#5658dd] font-black">
          INNOVATION AND ENTREPRENEURSHIP DEVELOPMENT CENTRE
        </h>
        <br />
        <h className="text-center md:text-xl text-xs  tracking-widest text-white font-thin">
          COLLEGE OF ENGINEERING, TRIVANDRUM
        </h>
        <br />
        <img src={BgLogo} alt="" />
        <br />
        <h className="p-2 text-center md:text-5xl text-2xl tracking-widest text-white font-black">
        "INNOVATION DISTINGUISHES BETWEEN A LEADER AND A FOLLOWER"
        </h>
        <p>-Steve Jobs</p>
      </div>
    </div>
  );
}
export default NameLogo;
