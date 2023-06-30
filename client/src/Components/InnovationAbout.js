import React from "react";
import Vision from "../Assets/Images/innovationvision.png"
import About from "../Assets/Images/innovationabout.png"
import Objectives from "../Assets/Images/innovationobjectives.png"


function InnovationAbout(){
  return(
		<div className="flex justify-center">
			<div className="flex flex-col justify-center gap-12">
				<div className="mt-40 flex flex-col md:flex-row justify-between px-20 mx-5 gap-10">
					<div className="flex flex-col justify-center">
						<h className="flex text-white text-5xl font-semibold font-poppins">VISION</h>
						<hr className="mt-2 border-t-2 w-1/4 mx-auto md:ml-10 border-red-700"/>
						<p className="flex mt-10 text-gray-500 text-xl font-semibold font-inter">To develop a public outreach among<br/> all the professional colleges,<br/> innovative student community in<br/> Kerala</p>
					</div>
					<div className="flex justify-center items-center">
						<img src={Vision} alt="" className="objects-contain h-5/6 w-5/6"/>
					</div>
				</div>
				<div className="flex md:flex-row-reverse flex-col  justify-between px-20 mx-5 gap-20">
					<div className="flex flex-col justify-center">
						<h className="flex text-white text-5xl font-semibold font-poppins">ABOUT</h>
						<hr className="mt-2 border-t-2 w-1/4 mx-auto md:ml-10 border-red-700"/>
						<p className="flex justify-center mt-10 text-gray-500 text-xl font-semibold font-inter">Innovation on wheels is an initiative put<br/> forward by IEDC CET that aims to spread<br/> technical awareness & inculcate innovation<br/> among students. It consists of workshops,<br/> competitions, lectures and other activities.</p>
					</div>
					<div className="flex justify-center items-center">
						<img src={About} alt="" className="objects-contain h-5/6 w-5/6"/>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-center gap-20 px-20 mx-20 ml-20">
					<div className="flex flex-col justify-start">
						<h className="flex text-white text-5xl font-semibold font-poppins">OBJECTIVES</h>
						<hr className="mt-2 border-t-2 w-1/4 mx-auto md:ml-10 border-red-700"/>
						<p className="flex mt-10 text-gray-500 text-xl font-semibold font-inter">To foster entrepreneurship and innovation<br/> among students in Kerala. Will undertake<br/> new projects and look forward to<br/> conducting prospective programmes by<br/> engaging with the institutions directly.<br/> To establish a network of aspiring entrepreneurs throughout Kerala.</p>
					</div>
					<div className="flex justify-center items-center">
						<img src={Objectives} alt="" className="objects-contain h-5/6 w-5/6"/>
					</div>
				</div>
			</div>
		</div>
  )
}

export default InnovationAbout;