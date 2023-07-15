import React from "react";
import Vision from "../../Assets/Images/InnovationAbout/innovationvision.png"
import About from "../../Assets/Images/InnovationAbout/innovationabout.png"
import Objectives from "../../Assets/Images/InnovationAbout/innovationobjectives.png"


function InnovationAbout( {sectionRef}){
	const aboutDatas = [
		{
		  image: Vision,
		  title: "VISION",
		  content:
			"To develop a public outreach among all the professional colleges, innovative student community in Kerala",
		},
		{
		  image: About,
		  title: "ABOUT",
		  content:
			"Innovation on wheels is an initiative put forward by IEDC CET that aims to spread technical awareness & inculcate innovation among students. It consists of workshops, competitions, lectures and other activities.",
		},
		{
		  image: Objectives,
		  title: "OBJECTIVES",
		  content:
			"To foster entrepreneurship and innovation among students in Kerala. Will undertake new projects and look forward to conducting prospective programmes by engaging with the institutions directly. To establish a network of aspiring entrepreneurs throughout Kerala.",
		},
	  ];
	
	  return (
		<div  ref={sectionRef} className="mt-60  space-y-4 w-3/4 self-center text-white text-4xl mx-5 font-bold">
		  
		  <div className="md:flex-row flex-col flex justify-center items-center gap-20">
			<div className="md:w-1/2 w-full md:flex-col justify-center items-center">
			  <h1 className="text-2xl">{aboutDatas[0].title}</h1>
			  <hr className="border-solid w-1/4 border-red-700"/>
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
			<div className="md:w-1/2 w-full md:flex-col justify-center  items-center">
			  <h1 className="font-extrabold text-2xl">{aboutDatas[1].title}</h1>
			  <hr className="border-solid w-1/4 border-red-700"/>
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
			  <hr className="border-solid w-1/4 border-red-700"/>
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

export default InnovationAbout;
