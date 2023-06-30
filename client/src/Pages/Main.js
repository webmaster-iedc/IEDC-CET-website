import React from "react";
import Navbar from "../Components/Navbar";
import NameLogo from "../Components/NameLogo";
import FeatureTiles from "../Components/FeatureTiles/FeatureTiles";
import About from "../Components/About";
import Testimonials from "../Components/Testimonials";
import UpcomingEvents from "../Components/UpcomingEvents";
import Announcements from "../Components/Announcements";
import Achievements from "../Components/Achievements";
import ContactPanel from "../Components/ContactPanel";
import Footer from "../Components/Socials";
import Ino from "../Components/InoPoints";
import FAQSection from "../Components/FAQ";
function Main() {
    return ( 
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
        <FAQSection/>
        <ContactPanel/>
        <Footer/>
    </div>
    );
}
export default Main;