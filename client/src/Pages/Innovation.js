import React, { useRef } from "react";
import Navbar from "../Components/mainfiles/Navbar";
import InnovationHome from "../Components/innovation/InnovationHome";
import Background from "../Assets/Images/innovation-bg-2.jpg";
import Background2 from "../Assets/Images/InnovationHome/innovation-bg-3.png";
import InnovationAbout from "../Components/innovation/InnovationAbout";
import FAQSection from "../Components/innovation/FAQinnovation";
import InnovationProcess from "../Components/innovation/InnovationProcess";
import InnovationHighlights from "../Components/innovation/InnovationHiglights";
import InnovationAnnoucements from "../Components/innovation/InnovationAnnoucements";
import InnovationContact from "../Components/innovation/InnovationContact";
import ScrollToTop from "../Components/mainfiles/ScrollToTop";

function Innovation() {
  const aboutSectionRef = useRef(null);
  const announcementsSectionRef = useRef(null);
  const highlightsSectionRef = useRef(null);
  const faqsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const navbarItems = [
    { text: "HOME", href: "/" },
    { text: "ABOUT", href: "/innovation/#About", sectionRef: aboutSectionRef },
    {
      text: "ANNOUNCEMENTS",
      href: "/innovation/#Annoucements",
      sectionRef: announcementsSectionRef,
    },
    {
      text: "HIGHLIGHTS",
      href: "/innovation/#Highlights",
      sectionRef: highlightsSectionRef,
    },
    { text: "FAQs", href: "/innovation/#FAQS", sectionRef: faqsSectionRef },
    {
      text: "CONTACT",
      href: "/innovation/#Contact",
      sectionRef: contactSectionRef,
    },
  ];
  const faqData = [
    {
      question: "What is IoW?",
      answer:
        "It is an initiative by IEDC CET aimed at creating awareness and teaching the latest technological trends across various private or government institutions.",
    },
    {
      question: "How do I register ?",
      answer:
        "Individuals interested in participating can register by filling out a G-form that will be circulated to their respective colleges.",
    },
    {
      question: "What are the advantages in joining the program ?",
      answer:
        "Participants will gain insightful knowledge about the latest technological trends required in various industries.",
    },
    {
      question: "How does the community work?",
      answer:
        "The IoW program is primarily led by CET students who possess specialized skills in various new technological trends.",
    },
  ];
  return (
    <div className="bg-[#15191D] relative min-h-screen w-full flex flex-col">
      <img
        src={Background}
        className="absolute -top-[940px] z-0 opacity-30"
        alt="background"
      />
      <img
        src={Background2}
        className="absolute bottom-56 z-10"
        alt="background"
      />
      <div className="z-20 min-h-screen w-full flex flex-col">
        <Navbar navbarItems={navbarItems} />
        <InnovationHome />
        <InnovationAbout sectionRef={aboutSectionRef} />
        <InnovationProcess />,
        <InnovationAnnoucements sectionRef={announcementsSectionRef} />
        <InnovationHighlights sectionRef={highlightsSectionRef} />
        <FAQSection faqData={faqData} sectionRef={faqsSectionRef} />
        <InnovationContact sectionRef={contactSectionRef} />
      </div>
      <ScrollToTop />
    </div>
  );
}

export default Innovation;
