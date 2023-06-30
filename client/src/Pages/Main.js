import React from "react";
import Navbar from "../Components/Navbar";
import NameLogo from "../Components/NameLogo";
import FeatureTiles from "../Components/FeatureTiles/FeatureTiles";
import About from "../Components/About";
<<<<<<< HEAD
=======
import Testimonials from "../Components/Testimonials";
>>>>>>> 28b29780f6582e2e5469caaddd081cd5f2913c87
import UpcomingEvents from "../Components/UpcomingEvents";
import Announcements from "../Components/Announcements";
import Achievements from "../Components/Achievements";
import ContactPanel from "../Components/ContactPanel";
import Footer from "../Components/Socials";
import Ino from "../Components/InoPoints";
function Main() {
    return ( 
<<<<<<< HEAD
        <div className = "bg-black min-h-screen w-full flex flex-col" >
            <Navbar />
            <NameLogo />
            <FeatureTiles />
            <About />
            <UpcomingEvents />
            <Announcements />
            <Achievements />
        </div>
=======
    <div className = "bg-black min-h-screen w-full flex flex-col" >
        <Navbar />
        <NameLogo />
        <FeatureTiles />
        <About />
        <Ino/>
        <UpcomingEvents />
        <Announcements />
        <Achievements />
        <Testimonials/>
        <ContactPanel/>
        <Footer/>
    </div>
>>>>>>> 28b29780f6582e2e5469caaddd081cd5f2913c87
    );
}
export default Main;