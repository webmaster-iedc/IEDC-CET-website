import React from "react";
import Navbar from "../Components/Navbar";
import InnovationHome from "../Components/InnovationHome";
import Background from "../Assets/Images/innovation-bg-2.jpg";
import InnovationAbout from "../Components/InnovationAbout";
import FAQSection from "../Components/FAQ";
import InnovationProcess from "../Components/InnovationProcess"; 
import InnovationHighlights from "../Components/InnovationHiglights";
import InnovationAnnoucements from "../Components/InnovationAnnoucements";
function Innovation()
{
    
      const  navbarItems=  [
        { text: "HOME", href: "/" },
        { text: "ABOUT", href: "#" },
        { text: "ANNOUNCEMENTS", href: "#" },
        { text: "HIGHLLIGHTS", href: "#" },
        { text: "FAQs", href: "#" },
        { text: "CONTACT", href: "#" }
      ];
      const faqData=[
        {
          question: 'What is Innovation on wheels ?',
          answer: 'Answer 1',
        },
        {
          question: 'How to register ?',
          answer: 'Answer 2',
        },
        {
          question: 'What are the advantages in joining the program ?',
          answer: 'Answer 3',
        },
        {
          question: 'How the community works ?',
          answer: 'Answer 4',
        },
      ];
    return ( 
    <div className = "bg-black min-h-screen w-full flex flex-col" >
        <Navbar navbarItems={navbarItems} />
        <InnovationHome />
        <InnovationAbout />
        <InnovationProcess/>,
        <InnovationAnnoucements />
        <InnovationHighlights />
        <FAQSection faqData={faqData }/>
    </div>
     );
}
 
export default Innovation;