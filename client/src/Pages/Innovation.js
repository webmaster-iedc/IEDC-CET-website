import React, {useRef} from "react";
import Navbar from "../Components/mainfiles/Navbar";
import InnovationHome from "../Components/innovation/InnovationHome";
import Background from "../Assets/Images/innovation-bg-2.jpg";
import InnovationAbout from "../Components/innovation/InnovationAbout";
import FAQSection from "../Components/innovation/FAQinnovation";
import InnovationProcess from "../Components/innovation/InnovationProcess"; 
import InnovationHighlights from "../Components/innovation/InnovationHiglights";
import InnovationAnnoucements from "../Components/innovation/InnovationAnnoucements";
import InnovationContact from "../Components/innovation/InnovationContact";
function Innovation()
{

      const aboutSectionRef = useRef(null);
      const announcementsSectionRef = useRef(null); 
      const highlightsSectionRef = useRef(null);
      const faqsSectionRef = useRef(null);
      const contactSectionRef = useRef(null);
      const navbarItems = [
        { text: "HOME", href: "/" },
        { text: "ABOUT", href: "/innovation/#About", sectionRef: aboutSectionRef },
        { text: "ANNOUNCEMENTS", href: "/innovation/#Annoucements", sectionRef: announcementsSectionRef },
        { text: "HIGHLIGHTS", href: "/innovation/#Highlights", sectionRef: highlightsSectionRef },
        { text: "FAQs", href: "/innovation/#FAQS", sectionRef: faqsSectionRef },
        { text: "CONTACT", href: "/innovation/#Contact", sectionRef: contactSectionRef },
      ];
      const faqData=[
        {
          question: 'What is IoW?',
          answer: 'It is an initiative by IEDC CET aimed at creating awareness and teaching the latest technological trends across various private or government institutions.',
        },
        {
          question: 'How do I register ?',
          answer: 'Individuals interested in participating can register by filling out a G-form that will be circulated to their respective colleges.',
        },
        {
          question: 'What are the advantages in joining the program ?',
          answer: 'Participants will gain insightful knowledge about the latest technological trends required in various industries.',
        },
        {
          question: 'How does the community work?',
          answer: 'The IoW program is primarily led by CET students who possess specialized skills in various new technological trends.',
        },
      ];
    return ( 
    <div className = "bg-black min-h-screen w-full flex flex-col" >
        <Navbar navbarItems={navbarItems} />
        <InnovationHome />
        <InnovationAbout  sectionRef={aboutSectionRef}/>
        <InnovationProcess/>,
        <InnovationAnnoucements sectionRef={announcementsSectionRef}/>
        <InnovationHighlights sectionRef={highlightsSectionRef}/>
        <FAQSection faqData={faqData } sectionRef={faqsSectionRef}/>
        <InnovationContact sectionRef={contactSectionRef} />
    </div>
     );
}
 
export default Innovation;