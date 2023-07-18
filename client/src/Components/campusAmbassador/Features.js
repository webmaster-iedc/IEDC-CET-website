import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';

function Features(){
    const data = [
			{
				image:faChalkboardTeacher,
				title:"Leadership",
				content:"Be a Leader and get opportunities to conduct events in your community"
			},
			{
				image:faGift,
				title:"E-Summit goodies",
				content:"Top 5 campus ambassadors will be given E-Summit goodies"
			},
			{
				image:faHandshake,
				title:"Networking",
				content:"CAs are from around the country, forming a diverse network"
			},
			{
				image:faPen,
				title:"Guidance and Mentoring",
				content:"Each CA is mentored personally by a team member from E-Cell IITM"
			},
			{
				image:faTicketAlt,
				title:"E-Summit ’23 Passes",
				content:"Best performing CAs will get E-Summit 2023 passes and will be invited to the IITM campus"
			},
			{
				image:faIdCard,
				title:"Certificate",
				content:"Each ambassador would be getting certificates from E-Cell IIT Madras based on performance"
			},
			{
				image:faComments,
				title:"Get Featured on our Socials",
				content:"Best performing CAs will get a chance to get featured on E-Cell IITM’s social media pages"
			},
			{
				image:faUsers,
				title:"Startup Walk",
				content:"Best performing CAs will get an opportunity to attend the Startup Walk to IITM Research Park conducted during E-Summit by E-Cell IITM"
			},
			{
				image:faBuilding,
				title:"Internship Opportunity",
				content:"Top CA’s will get internship opportunity under E-CELL IITM to become to the CAP leaders for next year."
			},
    ]
	const controls = useAnimation();
	const elementRef = useRef(null);
  
	useEffect(() => {
	  const element = elementRef.current;
  
	  const handleScroll = () => {
		const { top } = element.getBoundingClientRect();
		console.log(top)
		const windowHeight = window.innerHeight;
  
		if (top < windowHeight * 0.6) {
		  controls.start({ opacity: 1, x: 0 });
		} else {
		  controls.start({ opacity: 0, x: 50 });
		}
	  };
  
	  window.addEventListener('scroll', handleScroll);
	  return () => window.removeEventListener('scroll', handleScroll);
	}, [controls]);
    return(
			<div className="text-white my-12">
				<h2 className="text-center mb-5 text-3xl md:text-4xl font-bold">What's in it for you?</h2>
				<hr className="w-24 mx-auto" />
				<div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-3">
					{data.map((item,index)=>(
						<motion.div
						ref={elementRef}
						initial={{ opacity: 0, x: 50 }}
						animate={controls}
						transition={{ duration: 0.8 }} 
						key={index} 
						className="flex flex-col my-4 p-4 gap-4 w-3/4 md:w-1/4 justify-center items-center">
							<FontAwesomeIcon className="p-5 border-white border-2 rounded-full hover:p-7 transition-all duration-300" icon={item.image} />
							<h2 className="font-bold">{item.title}</h2>
							<p className="text-center">{item.content}</p>
						</motion.div>
					))}
				</div>
			</div>
    )
}

export default Features;