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
import {RiArrowDropDownLine} from 'react-icons/ri';
import 'react-vertical-timeline-component/style.min.css';
import Newsletter from "../Components/mainfiles/Newsletter";
import Events from "../Components/mainfiles/Events";

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
        { text: 
          (<div className="relative group hover:text-gray-500">
            <h5 className="group-hover:text-gray-300 flex items-center transition-all">ALUMNI EVENTS <span className="group-hover:rotate-180 transition-all"><RiArrowDropDownLine size={30} /></span></h5>
            <div className="text-center md:text-left md:absolute md:opacity-0 md:group-hover:opacity-100 transition-opacity px-4 md:border-l-2 border-gray-500">
              <a className="hover:text-gray-300 block" href="/innovation">Innovation</a>
              <a className="hover:text-gray-300 block" href="/ignites">IgnitES</a>
            </div>
          </div>)
          , href: "" },
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
    <div className = "bg-[#151719] min-h-screen w-full flex flex-col gap-12" >
        <Navbar navbarItems={ navbarItems}/>
        <NameLogo />
        <FeatureTiles />
        <UpcomingEvents sectionRef={upcomingEventsSectionRef} />
        <About sectionRef={aboutSectionRef} />
        <Ino sectionRef={inoSectionRef}/>
        <Events />
        <Announcements sectionRef={announcementsSectionRef} />
        <Achievements sectionRef={achievementsSectionRef} />
        <Testim />
        <Faculty />
        <Team />
        <FAQSection faqData={faqData} />
        <ContactPanel sectionRef={contactSectionRef} />
        <Newsletter />
        <Footer/>
    </div>
    );
}
export default Main;