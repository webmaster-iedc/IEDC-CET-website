import React from "react";
import Navbar from "../Components/Navbar";
import NameLogo from "../Components/NameLogo";
import FeatureTiles from "../Components/FeatureTiles/FeatureTiles";
import About from "../Components/About";
function Main()
{
    return(
        <div className="bg-black min-h-screen w-full flex flex-col">
            <Navbar/>
            <NameLogo/>
            <FeatureTiles/>
            <About/>
        </div>
    );
}
export default Main;