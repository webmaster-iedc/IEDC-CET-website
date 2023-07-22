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
import { RiArrowDropDownLine } from "react-icons/ri";
import "react-vertical-timeline-component/style.min.css";
import InnovateX from "../Components/mainfiles/InnovateX";
import Newsletter from "../Components/mainfiles/Newsletter";
//import Events from "../Components/mainfiles/Events";

function Main() {
  //main bar components to enable code reusability
  const aboutSectionRef = useRef(null);
  const upcomingEventsSectionRef = useRef(null);
  const announcementsSectionRef = useRef(null);
  const achievementsSectionRef = useRef(null);
  const inoSectionRef = useRef(null);
  const testimonialsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const innnovateXSectionRef = useRef(null);
  const navbarItems = [
    {
      text: (
        <div className="relative group hover:text-gray-500">
          <h5 className="group-hover:text-gray-300 flex items-center transition-all">
            ALUMNI EVENTS{" "}
            <span className="group-hover:rotate-180 transition-all">
              <RiArrowDropDownLine size={30} />
            </span>
          </h5>
          <div className="text-center md:text-left md:absolute md:opacity-0 md:group-hover:opacity-100 transition-opacity px-4 md:border-l-2 border-gray-500">
            <a className="hover:text-gray-300 block" href="/innovation">
              Innovation
            </a>
            <a className="hover:text-gray-300 block" href="/ignites">
              IgnitES
            </a>
          </div>
        </div>
      ),
      href: "",
    },
    { text: "ABOUT", href: "#About", sectionRef: aboutSectionRef },
    { text: "EVENTS", href: "#Events", sectionRef: upcomingEventsSectionRef },
    {
      text: "ANNOUNCEMENTS",
      href: "#Annoucements",
      sectionRef: announcementsSectionRef,
    },
    {
      text: "ACHIEVEMENTS",
      href: "#Achievements",
      sectionRef: achievementsSectionRef,
    },
    { text: "INO POINTS", href: "#INO", sectionRef: inoSectionRef },
    { text: "TEAM", href: "#Testimonials", sectionRef: testimonialsSectionRef },
    { text: "CONTACT", href: "#Contacts", sectionRef: contactSectionRef },
    { text: "CAP", href: "/cap", sectionRef: contactSectionRef },
  ];
  const faqData = [
    {
      question:
        "What support and resources does IEDC CET provide to aspiring entrepreneurs and startups? ",
      answer:
        "We provide assistance to startup founders in the college, by collaborating with Kerala Startup Mission and CET TBI . Also, we regularly conduct workshops, and ideathon challenges to nurture the idea of entrepreneurship in campus. ",
    },
    {
      question:
        "How can I get involved with IEDC CET and what opportunities are available for students and entrepreneurs?",
      answer:
        "You could become an official IEDC Execom member by registering when the Execom call happens every academic year. You could also enter as a sub-panel member by registering for it, whose registration starts just some months after the Execom call. IEDC CET shall provide common facilities to students working on start-ups and will provide a platform for the students to pursue entrepreneurial activities",
    },
    {
      question:
        "What initiatives and activities does IEDC CET organize throughout the year?",
      answer:
        'IEDC CET is really active in conducting various events, activities and is never short of new initiatives with "Build Club" and "Hireathon" being two of the most recent initiatives. Also, various events like Ideafest, Balm Designathon etc. have been conducted.  We aim to conduct more and more events and competitions fully fledged throughout the year. ',
    },
    {
      question:
        "Can any student join IEDC CET, or is it limited to a specific course or department?",
      answer:
        "Any student with a flair for entrepreneurship, irrespective or course or department of study, can join IEDC CET.",
    },
    {
      question:
        "Are there any membership fees or prerequisites to join IEDC CET?          Can I join IEDC CET if I do not have a business idea yet?",
      answer:
        "No, there are no membership fees or prerequisites to join IEDC CET. Yes, you can join IEDC CET even if you dont have a business idea yet. IEDC CET aims at building entrepreneurial qualities in students from scratch, and bring about a culture of idea-driven development in college.",
    },
  ];
  return (
    <div className="bg-[#151719] min-h-screen w-full flex flex-col gap-12">
      <Navbar navbarItems={navbarItems} />
      <NameLogo />
      <FeatureTiles />
      <About sectionRef={aboutSectionRef} />

      <Ino sectionRef={inoSectionRef} />

      <UpcomingEvents sectionRef={upcomingEventsSectionRef} />
      <Announcements sectionRef={announcementsSectionRef} />
      <Achievements sectionRef={achievementsSectionRef} />
      {/* <Testimonials sectionRef={testimonialsSectionRef} /> */}
      <Testim />
      <Faculty />
      <Team />
      <InnovateX sectionRef={innnovateXSectionRef} />
      <FAQSection faqData={faqData} />
      <ContactPanel sectionRef={contactSectionRef} />
      <Newsletter />
      <Footer />
    </div>
  );
}
export default Main;
