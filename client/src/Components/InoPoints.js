import React from "react";
import '../index.css';
import iedcvideo from "../Assets/Videos/INO.mp4";

function Ino() {
  return (
    <div className=" w-3/4  self-center">
      <div><p className="text-[#eceded] text-5xl bold  text-center font-bold">INO Points</p></div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="flex md:flex-row flex-col gap-16   h-full">
        <div className="  my-auto">
          
          <p className="text-[#9ca9b3] text-xl text-left ">Introducing 𝗜𝗡𝗢 𝗣𝗢𝗜𝗡𝗧𝗦 A revolution in how CET thinks. Your work and hardships will now be recognized by 𝗜𝗘𝗗𝗖 𝗖𝗘𝗧. Earn through registrations to events and workshops Redeem cash prize and vouchers. So what are you waiting for !! Start farming your INO POINTS now. 𝗖𝗢𝗠𝗣𝗘𝗧𝗘 𝗖𝗢𝗟𝗟𝗘𝗖𝗧 𝗖𝗢𝗡𝗡𝗘𝗖𝗧</p>
        </div>
        <video width={528} height={290.4} controls src={iedcvideo} autoPlay/>
      </div>
    </div>
  );
}

export default Ino;