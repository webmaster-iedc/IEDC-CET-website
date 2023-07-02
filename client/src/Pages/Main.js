import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import NameLogo from "../Components/NameLogo";
import FeatureTiles from "../Components/FeatureTiles/FeatureTiles";
import About from "../Components/About";

import Testim from "../Components/Test/Testim";
import UpcomingEvents from "../Components/UpcomingEvents";
import Announcements from "../Components/Announcements";
import Achievements from "../Components/Achievements";
import ContactPanel from "../Components/ContactPanel";
import Footer from "../Components/Socials";
import Ino from "../Components/InoPoints";
import FAQSection from "../Components/FAQ";
function Main() {
    //main bar components to enable code reusability
    const aboutSectionRef = useRef(null);
    const upcomingEventsSectionRef = useRef(null);
    const announcementsSectionRef = useRef(null);
    const achievementsSectionRef = useRef(null);
    const inoSectionRef = useRef(null);
    const testimonialsSectionRef = useRef(null);
    const contactSectionRef = useRef(null);
    const  navbarItems=  [
        { text: "INNOVATION", href: "/innovation" },
        { text: "ABOUT", href: "#About", sectionRef: aboutSectionRef },
        { text: "EVENTS", href: "#Events",sectionRef:upcomingEventsSectionRef },
        { text: "ANNOUNCEMENTS", href: "#Annoucements",sectionRef:announcementsSectionRef },
        { text: "ACHIEVEMENTS", href: "#Achievements",sectionRef:achievementsSectionRef },
        { text: "INO POINTS", href: "#INO",sectionRef:inoSectionRef },
        { text: "TEAM", href: "#Testimonials",sectionRef:testimonialsSectionRef },
        { text: "CONTACt", href: "#Contacts",sectionRef:contactSectionRef }
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
    <div className = "bg-black min-h-screen w-full flex flex-col gap-16" >
        <Navbar navbarItems={ navbarItems}/>
        <NameLogo />
        <FeatureTiles />
        <About sectionRef={aboutSectionRef} />
        <Ino sectionRef={inoSectionRef}/>
        <UpcomingEvents sectionRef={upcomingEventsSectionRef} />
        <Announcements sectionRef={announcementsSectionRef} />
        <Achievements sectionRef={achievementsSectionRef} />
        <Testimonials sectionRef={testimonialsSectionRef} />
        <Testim />
        <FAQSection faqData={faqData} />
        <ContactPanel sectionRef={contactSectionRef} />
        <Footer/>
    </div>
    );
}
export default Main;