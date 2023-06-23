import React from "react";
import NavLogo from "../Assets/Images/IedcNavbarLogo.png"
function NameLogo()
{   
    
    return(
        <div className=" text-white  flex flex-col  w-full  h-fit justify-center items-center">
            <div className="w-full flex text-center flex-col lg:w-1/2 ">
            <h className="text-center text-5xl text-sky-700 font-extrabold">INNOVATION AND ENTREPRENEURSHIP DEVELOPMENT CENTRE</h>
            <br/>

            <h1 className="text-center text-2xl text-white font-thin">COLLEGE OF ENGINEERING, TRIVANDRUM</h1>
            <br/>
            <h className="bg-lime-200 text-black">!!IEDC IMAGE</h>
            <br/>
            <h className="text-center text-4xl text-white font-bold">"INNOVATION DISTINGUISHES BETWEEN A LEADER AND A FOLLOWER"</h>
            <p>-Steve Jobs</p>
            </div>
         </div>



    );
}
export default NameLogo;