import React, {useRef} from "react";
import Navbar from "../Components/mainfiles/Navbar";
import InnovationHome from "../Components/campusAmbassador/caHome";
import ContactPanel from "../Components/ignites/ContactPanel";
import IgnitesAbout from "../Components/ignites/IgnitesAbout";
import IgnitesGallery from "../Components/ignites/IgnitesGallery";
import Testimonials from "../Components/ignites/IgnitesTestim";
import Footer from "../Components/mainfiles/Socials";

function CampusAmbassador()
{

      const aboutSectionRef = useRef(null);
      const announcementsSectionRef = useRef(null); 
      const highlightsSectionRef = useRef(null);
      const faqsSectionRef = useRef(null);
      const contactSectionRef = useRef(null);
      const navbarItems = [
        { text: "HOME", href: "/" },
        
        { text: "ABOUT", href: "/ignites/#About", sectionRef: aboutSectionRef },
        { text: "EVENTS", href: "/ignites/#Events", sectionRef: announcementsSectionRef },
        { text: "GALLERY", href: "/ignites/#Gallery", sectionRef: highlightsSectionRef },
        { text: "CONTACT", href: "/innovation/#Contact", sectionRef: contactSectionRef },
      ];
      
    return ( 
    <div className = "bg-black min-h-screen w-full flex flex-col" >
        <Navbar navbarItems={navbarItems} />
        <InnovationHome />
        <IgnitesAbout />
        
        <Testimonials />
        <ContactPanel />
        
        
    </div>
     );
}
 
export default CampusAmbassador;