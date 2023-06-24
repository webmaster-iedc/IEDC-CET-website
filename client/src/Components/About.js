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
        "IEDC-CET shall promote and foster entrepreneurial culture in the college and will provide a platform for the students to pursue entrepreneurial activities.&#13;It shall provide assistance to potential entrepreneurs of CET, conduct activities that develop entrepreneurial qualities in students and shall provide common facilities to students working on start-ups.",
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
        "To motivate the students to think creatively and generate innovative ideas from all fields of engineering." +
        <br /> +
        "To transform innovative ideas into socially and industrially relevent products.&#13;To inculcate a culture of innovation driven entrepreneurship.",
    },
  ];
  return (
    <div className="text-center text-white text-4xl mx-5 font-bold">
      <h>IEDC at CET</h>
      {/* <div className="flex flex-col justify-center items-center">
				{aboutDatas.map((aboutData,index)=>(
					<div key={index} className="flex justify-center items-center">
						<div>
							<h className="text-3xl">{aboutData.title}</h>
							<p className="text-gray-500 text-xl font-normal">{aboutData.content}</p>
						</div>
						<div className="aspect-w-4 aspect-h-3">
							<img src={aboutData.image} alt="" className="object-cover h-auto w-auto"/>
						</div>
					</div>
				))}
			</div> */}
      {/* <div className="grid grid-cols-2 grid-rows-2 gap-4">
				<div className="flex flex-col justify-center items-center">
					<h2 className="text-2xl">{aboutDatas[0].title}</h2>
					<p className="text-gray-500 text-xl font-normal">{aboutDatas[0].content}</p>
				</div>
				<div className="flex justify-center items-center w-full h-72">
					<img src={aboutDatas[0].image} alt="" className="objects-contain max-w-full max-h-full"/>
				</div>
				<div className="flex justify-center items-center w-full h-72">
					<img src={aboutDatas[1].image} alt="" className="objects-contain max-w-full max-h-full"/>
				</div>
				<div className="flex flex-col justify-center items-center">
					<h2 className="text-2xl">{aboutDatas[1].title}</h2>
					<p className="text-gray-500 text-xl font-normal">{aboutDatas[1].content}</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<h2 className="text-2xl">{aboutDatas[2].title}</h2>
					<p className="text-gray-500 text-xl font-normal">{aboutDatas[2].content}</p>
				</div>
				<div className="flex justify-center items-center w-full h-72">
					<img src={aboutDatas[2].image} alt="" className="objects-contain max-w-full max-h-full"/>
				</div>
			</div> */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-20">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl">{aboutDatas[0].title}</h1>
            <p className="text-gray-500 text-xl font-normal">
              {aboutDatas[0].content}
            </p>
          </div>
          <div className="flex justify-center items-center w-auto h">
            <img
              src={aboutDatas[0].image}
              alt=""
              className="objects-contain w-full h-full"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-20">
          <div className="flex justify-center items-center border-white-800  w-auto h">
            <img
              src={aboutDatas[1].image}
              alt=""
              className="objects-contain w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl">{aboutDatas[1].title}</h1>
            <p className="text-gray-500 text-xl font-normal">
              {aboutDatas[1].content}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-20">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl">{aboutDatas[2].title}</h1>
            <p className="text-gray-500 text-xl font-normal">
              {aboutDatas[2].content}
            </p>
          </div>
          <div className="flex justify-center items-center border-red-500 w-auto h">
            <img
              src={aboutDatas[2].image}
              alt=""
              className="objects-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
