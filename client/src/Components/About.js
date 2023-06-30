import React from "react";
import Vision from "../Assets/Images/our_vision.jpg";
import AboutUs from "../Assets/Images/About.jpeg";
import Objectives from "../Assets/Images/Objectives.jpg";

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
    <div className="text-center space-y-4 w-3/4 self-center text-white text-4xl mx-5 font-bold">
      <h>IEDC at CET</h>
      <div className="md:flex-row flex-col flex justify-center items-center gap-20">
        <div className="md:w-1/2 w-full md:flex-col justify-center items-center">
          <h1 className="text-2xl">{aboutDatas[0].title}</h1>
          <p className="text-gray-500 text-xl font-normal">
            {aboutDatas[0].content}
          </p>
        </div>
        <div className="flex justify-center items-center md:w-1/2 w-full">
          <img
            src={aboutDatas[0].image}
            alt=""
            className="objects-contain w-full h-full rounded-md"
          />
        </div>
      </div>
      <div className="md:flex-row-reverse flex-col flex justify-center items-center gap-20">
        <div className="md:w-1/2 w-full md:flex-col justify-center items-center">
          <h1 className="text-2xl">{aboutDatas[1].title}</h1>
          <p className="text-gray-500 text-xl font-normal">
            {aboutDatas[1].content}
          </p>
        </div>
        <div className="flex justify-center items-center md:w-1/2 w-full h">
          <img
            src={aboutDatas[1].image}
            alt=""
            className="objects-contain w-full h-full rounded-md"
          />
        </div>
      </div>
      <div className="md:flex-row flex-col flex justify-center items-center gap-20">
        <div className="md:w-1/2 w-full md:flex-col justify-center items-center">
          <h1 className="text-2xl">{aboutDatas[2].title}</h1>
          <p className="text-gray-500 text-xl font-normal">
            {aboutDatas[2].content}
          </p>
        </div>
        <div className="flex justify-center items-center md:w-1/2 w-full h">
          <img
            src={aboutDatas[2].image}
            alt=""
            className="objects-contain w-full h-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
