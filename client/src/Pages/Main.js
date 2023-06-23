import React from "react";
import Navbar from "../Components/Navbar";
import NameLogo from "../Components/NameLogo";
import FeatureTiles from "../Components/FeatureTiles/FeatureTiles";
function Main()
{
    return(
        <div className="bg-black min-h-screen w-full flex flex-col">
            <Navbar/>
            
            <NameLogo/>

            <FeatureTiles/>
        </div>
    );
}
export default Main;