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
    //main bar components to enable code reusability
   const  navbarItems=  [
        { text: "IGNITES", href: "#" },
        { text: "ABOUT", href: "#" },
        { text: "EVENTS", href: "#" },
        { text: "ANNOUNCEMENTS", href: "#" },
        { text: "ACHIEVEMENTS", href: "#" },
        { text: "INO POINTS", href: "#" },
        { text: "TEAM", href: "#" },
        { text: "CONTACt", href: "#" }
      ];
    const faqData=[
        {
          question: 'Question a',
          answer: 'Answer 1',
        },
        {
          question: 'Question 2',
          answer: 'Answer 2',
        },
        {
          question: 'Question 3',
          answer: 'Answer 3',
        },
        {
          question: 'Question 4',
          answer: 'Answer 4',
        },
      ];
    return ( 
    <div className = "bg-black min-h-screen w-full flex flex-col" >
        <Navbar navbarItems={ navbarItems}/>
        <NameLogo />
        <FeatureTiles />
        <About />
        <Ino/>
        <UpcomingEvents />
        <Announcements />
        <Achievements />
        <Testimonials/>
        <FAQSection faqData={faqData }/>
        <ContactPanel/>
        <Footer/>
    </div>
    );
}
export default Main;