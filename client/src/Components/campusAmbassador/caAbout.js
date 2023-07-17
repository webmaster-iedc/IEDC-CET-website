import React from "react";
import Vision from "../../Assets/Images/About/our_vision.jpg";
import AboutUs from "../../Assets/Images/About/About.jpeg";
import Objectives from "../../Assets/Images/About/Objectives.jpg";

function About() {
  const aboutDatas = [
    {
      image: Vision,
      title: "OUR VISION",
      content:
        "IEDC-CET shall promote and foster entrepreneurial culture in the college and will provide a platform for the students to pursue entrepreneurial activities. It shall provide assistance to potential entrepreneurs of CET, conduct activities that develop entrepreneurial qualities in students and shall provide common facilities to students working on start-ups.",
    },
    {
      image: AboutUs,
      title: "ABOUT IEDC",
      content:
        "The Innovation and Entrepreneurship Development Cell (IEDC) is an active student-run cell under CET Centre for Interdisciplinary Research (CCIR) that seeks to create and promote innovation and entrepreneurship skills among the students of CET. The cell works in close association with Kerala Startup Mission, CET –TBI and other student clubs. It envisions fostering innovative thinking and becoming a facilitator between the students inside the campus and the industry outside by acting as a hub of contacts and network that helps in finding the wannabe entrepreneurs the right people to approach for any task.",
    },
    {
      image: Objectives,
      title: "OBJECTIVES",
      content:
        "To motivate the students to think creatively and generate innovative ideas from all fields of engineering.\nTo transform innovative ideas into socially and industrially relevant products.\nTo inculcate a culture of innovation-driven entrepreneurship.",
    },
  ];

  return (
    <div className="mt-10 lg:space-x-4 lg:space-y-0  lg:text-center md:space-y-2 mt-4 flex flex-col lg:flex-row  md:justify-between   w-3/4 self-center text-white">
        <div className=" p-4 bg-black rounded-md space-y-2   sm:w-full lg:w-1/3">
            <h className="font-extrabold text-4xl ">About Us</h>
            <p className="text-xl text-gray-400">The Campus Ambassador Program is launched with the aim of developing an entrepreneurship culture in various colleges across the country.It is a Pan-India program for onboarding student ambassadors to not only publicize the events conducted by E-Cell IIT Madras but will also help them learn about entrepreneurship as a whole.</p>
        </div>
        <div className="p-4 bg-black rounded-md space-y-2   sm:w-full lg:w-1/3">
            <h className="font-extrabold text-4xl ">Aim</h>
            <p className="text-xl text-gray-400">The Campus Ambassador Program is launched with the aim of developing an entrepreneurship culture in various colleges across the country.It is a Pan-India program for onboarding student ambassadors to not only publicize the events conducted by E-Cell IIT Madras but will also help them learn about entrepreneurship as a whole.</p>
        </div>
        <div className="p-4 bg-black rounded-md space-y-2   sm:w-full lg:w-1/3">
            <h className="font-extrabold text-4xl ">Aim</h>
            <p className="text-xl text-gray-400">The Campus Ambassador Program is launched with the aim of developing an entrepreneurship culture in various colleges across the country.It is a Pan-India program for onboarding student ambassadors to not only publicize the events conducted by E-Cell IIT Madras but will also help them learn about entrepreneurship as a whole.</p>
        </div>
        

    </div>
  );
}

export default About;
