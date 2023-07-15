import React from "react";

function caHome(){
    return(
        
        <div className="text-white flex flex-col w-full h-fit justify-center items-center">
        <div className="w-full flex text-center flex-col lg:w-3/4">
          <h className="font-semibold text-center md:text-6xl text-2xl tracking-widest bg-gradient-to-b from-[#FA1100] to-[#5E5D5D] bg-clip-text text-transparent">
            CAMPUS AMBASSADOR PROGRAM
          </h>
          <p>INITIATIVE BY IEDC CET</p>
          <div className="md:w-1/2 w-3/4 flex flex-col self-center">
            <button class="w-100 h-30 px-7 py-2 mt-3 rounded-lg border-2 border-[#9E130A] text-poppins text-24 font-semibold leading-36 text-white text-center">REGISTER NOW</button>
            </div>
        </div>
      </div>
    )
}
export default caHome;
