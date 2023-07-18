import React, {useRef} from "react";
import Navbar from "../Components/mainfiles/Navbar";
import InnovationHome from "../Components/campusAmbassador/caHome";
import About from "../Components/campusAmbassador/caAbout";
import Features from "../Components/campusAmbassador/Features";

function CampusAmbassador()
{
      const aboutSectionRef = useRef(null);
      const announcementsSectionRef = useRef(null); 
      const highlightsSectionRef = useRef(null);
      
      const contactSectionRef = useRef(null);
      const navbarItems = [
        { text: "HOME", href: "/" },
        { text: "ABOUT", href: "/ignites/#About", sectionRef: aboutSectionRef },
        { text: "EVENTS", href: "/ignites/#Events", sectionRef: announcementsSectionRef },
        { text: "GALLERY", href: "/ignites/#Gallery", sectionRef: highlightsSectionRef },
        { text: "CONTACT", href: "/innovation/#Contact", sectionRef: contactSectionRef },
      ];
      
    return ( 
    <div className = "space-y-6 bg-[#151719] min-h-screen w-full flex flex-col" >
        <Navbar navbarItems={navbarItems} />
        <InnovationHome />
        <About />
        <Features />
    </div>
     );
}
 
export default CampusAmbassador;