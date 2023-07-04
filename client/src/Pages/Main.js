import React, { useRef } from "react";
import Navbar from "../Components/mainfiles/Navbar";
import NameLogo from "../Components/mainfiles/NameLogo";
import FeatureTiles from "../Components/mainfiles/FeatureTiles";
import About from "../Components/mainfiles/About";
import Testim from "../Components/mainfiles/Testim";
import UpcomingEvents from "../Components/mainfiles/UpcomingEvents";
import Announcements from "../Components/mainfiles/Announcements";
import Achievements from "../Components/mainfiles/Achievements";
import ContactPanel from "../Components/mainfiles/ContactPanel";
import Footer from "../Components/mainfiles/Socials";
import Ino from "../Components/mainfiles/InoPoints";
import FAQSection from "../Components/mainfiles/FAQmain";
import Faculty from "../Components/mainfiles/Faculty";
import Team from "../Components/mainfiles/Team";


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
        { text: "CONTACT", href: "#Contacts",sectionRef:contactSectionRef }
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
    <div className = "bg-black min-h-screen w-full flex flex-col gap-12" >
        <Navbar navbarItems={ navbarItems}/>
        <NameLogo />
        <FeatureTiles />
        <About sectionRef={aboutSectionRef} />
        <Ino sectionRef={inoSectionRef}/>
        <UpcomingEvents sectionRef={upcomingEventsSectionRef} />
        <Announcements sectionRef={announcementsSectionRef} />
        <Achievements sectionRef={achievementsSectionRef} />
        {/* <Testimonials sectionRef={testimonialsSectionRef} /> */}
        <Testim />
        <Faculty />
        <Team />
        <FAQSection faqData={faqData} />
        <ContactPanel sectionRef={contactSectionRef} />
        <Footer/>
    </div>
    );
}
export default Main;