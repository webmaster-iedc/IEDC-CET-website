import React from "react";
import Logo from "../Assets/Images/innovation-logo.png";

function InnovationHome(){
    return(
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-line font-poppins mt-11 text-6xl font-bold leading-1.5 tracking-normal text-center bg-gradient-to-b from-[#FA1100] to-[#5E5D5D] bg-clip-text text-transparent">INNOVATION ON WHEELS</h2>
            <p className="font-poppins text-lg mt-4 font-semibold leading-8 text-center text-[#9BA9B3]">INITIATIVE BY IEDC CET</p>
            <img src={Logo} alt="" />
            <p className="font-arya text-4xl mt-[-30px] pt-0 font-normal leading-10 text-white text-center">Learn through collaboration</p>
            <button class="w-231 h-30 px-7 py-2 mt-8 rounded-lg bg-[#9E130A] text-poppins text-24 font-semibold leading-36 text-white text-center">REGISTER</button>
            <button class="w-231 h-30 px-7 py-2 mt-3 rounded-lg border-2 border-[#9E130A] text-poppins text-24 font-semibold leading-36 text-white text-center">BROCHURE</button>
        </div>
    )
}
export default InnovationHome;