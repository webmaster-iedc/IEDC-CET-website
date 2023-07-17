import React, {useRef} from "react";
import Navbar from "../Components/mainfiles/Navbar";
import NameLogo from "../Components/ignites/IgnitesNameLogo";
import ContactPanel from "../Components/ignites/ContactPanel";
import IgnitesAbout from "../Components/ignites/IgnitesAbout";
import IgnitesGallery from "../Components/ignites/IgnitesGallery";
import Testim from "../Components/mainfiles/Testim";
import Footer from "../Components/mainfiles/Socials";

function Ignites()
{

      const aboutSectionRef = useRef(null);
      const announcementsSectionRef = useRef(null); 
      const highlightsSectionRef = useRef(null);
      
      const contactSectionRef = useRef(null);
      const navbarItems = [
        { text: "HOME", href: "/" },
        { text: "IGNITES", href: "/ignites" },
        { text: "ABOUT", href: "/ignites/#About", sectionRef: aboutSectionRef },
        { text: "EVENTS", href: "/ignites/#Events", sectionRef: announcementsSectionRef },
        { text: "GALLERY", href: "/ignites/#Gallery", sectionRef: highlightsSectionRef },
        { text: "CONTACT", href: "/innovation/#Contact", sectionRef: contactSectionRef },
      ];
      
    return ( 
    <div className = "bg-[#15191D] min-h-screen w-full flex flex-col" >
        <Navbar navbarItems={navbarItems} />
        <NameLogo />
        <IgnitesAbout />
        <IgnitesGallery />
        <Testim />
        <ContactPanel />
        <Footer />
        
    </div>
     );
}
 
export default Ignites;