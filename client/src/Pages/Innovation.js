import React from "react";
import Navbar from "../Components/Navbar";
import InnovationHome from "../Components/InnovationHome";
import Background from "../Assets/Images/innovation-bg-2.jpg";
import InnovationAbout from "../Components/InnovationAbout";
import FAQSection from "../Components/FAQ";
function Innovation()
{
    
      const  navbarItems=  [
        { text: "HOME", href: "#" },
        { text: "ABOUT", href: "#" },
        { text: "ANNOUNCEMENTS", href: "#" },
        { text: "HIGHLLIGHTS", href: "#" },
        { text: "FAQs", href: "#" },
        { text: "CONTACT", href: "#" }
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
        <Navbar navbarItems={navbarItems} />
        <InnovationHome />
        <InnovationAbout />
        <FAQSection faqData={faqData }/>
      
    </div>
     );
}
 
export default Innovation;