import React from "react";
import Navbar from "../Components/Navbar";
import NameLogo from "../Components/NameLogo";
import FeatureTiles from "../Components/FeatureTiles/FeatureTiles";
import About from "../Components/About";

import UpcomingEvents from "../Components/UpcomingEvents";
import Announcements from "../Components/Announcements";
import Achievements from "../Components/Achievements";

function Main() {
    return ( <
        div className = "bg-black min-h-screen w-full flex flex-col" >
        <
        Navbar / >
        <
        NameLogo / >
        <
        FeatureTiles / >
        <
        About / >
        <
        UpcomingEvents / >
        <
        Announcements / >
        <
        Achievements / >
        <
        /div>
    );
}
export default Main;