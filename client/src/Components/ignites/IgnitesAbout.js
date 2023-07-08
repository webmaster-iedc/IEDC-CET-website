import React from "react";
import Vision from "../../Assets/Images/IgnitesAbout/Inspiration.jpg"
import About from "../../Assets/Images/InnovationAbout/innovationabout.png"
import Objectives from "../../Assets/Images/IgnitesAbout/IgnitesIdea.png"


function IgnitesAbout( {sectionRef}){
	const aboutDatas = [
		{
		  image: Vision,
		  title: "WHAT IS IGNITES?",
		  content:
			"ignitES is a 16-week long comprehensive programme conducted jointly by IEDC CET and College of Engineering Alumni Association Chennai(CETAAC), to help mould aspiring entrepreneurs, and give them support and guidance in developing ideas and converting them into viable businesses.",
		},
		
		{
		  image: Objectives,
		  title: "OBJECTIVES",
		  content:
			<ul className="list-disc flex flex-col gap-2">
				<li>Provide students with hands-on guidance in project management, teamwork, business and marketing.</li>
				<li>Get exposure to various fields like marketing, logistics, public relations and other areas of management.</li>
				<li>Inspire and motivate young innovators of CET to come forward with their path-breaking</li>
			</ul>
		},
	  ];
	
	  return (
		<div  ref={sectionRef} className="mt-20  space-y-4 w-3/4 self-center text-white text-4xl mx-5 font-bold">
		  
		  <div className="md:flex-row flex-col flex justify-center items-center gap-20">
			<div className="md:w-1/2 w-full md:flex-col justify-center items-center">
			  <h1 className="text-2xl mb-4">{aboutDatas[0].title}</h1>
			  
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
			  <h1 className="font-extrabold mb-4 text-2xl">{aboutDatas[1].title}</h1>
			  
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
		</div>
	  );
}

export default IgnitesAbout;
