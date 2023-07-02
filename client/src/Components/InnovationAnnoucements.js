import React, { useState } from "react";
import Image from "../Assets/Images/highlights1.png"
import Arrow from "../Assets/Images/arrowvector.png";

function InnovationAnnoucements( {sectionRef}){
	const items = [
    {
      image: Image,
      title: "PROGRAM 1",
			date: "xx/xx/xxxx"
    },
    {
      image: Image,
      title: "PROGRAM 2",
			date: "xx/xx/xxxx"
    },
    {
      image: Image,
      title: "PROGRAM 3",
			date: "xx/xx/xxxx"
    },
    {
      image: Image,
      title: "PROGRAM 4",
			date: "xx/xx/xxxx"
    },
    {
      image: Image,
      title: "PROGRAM 5",
			date: "xx/xx/xxxx"
    },
    {
      image: Image,
      title: "PROGRAM 6",
			date: "xx/xx/xxxx"
    },
  ];	
	const [count, setCount] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
	const [direction,setDirection] = useState(true)
	var contents=items.slice(count,(count+3))
  const increment = () => {
    if (!isTransitioning) {
			setDirection(true);
      setIsTransitioning(true);
      setCount((count + 1) % items.length);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  };
	const decrement = () => {
    if (!isTransitioning) {
			setDirection(false);
      setIsTransitioning(true);
			if (count===0){
				setCount(items.length-1)
			}
			else{
				setCount((count - 1) % items.length);
			}
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }
  };

	return(
		<div  ref={sectionRef} className="flex flex-col justify-center">
			<h1 className="text-white text-center text-5xl font-semibold font-poppins mt-20">
				Annoucements
			</h1>
			<hr className="mt-2 border-t-2 w-36 mx-auto mb-20  border-red-700" />
			<div className=" relative flex flex-col md:flex-row justify-center mb-5 gap-5 items-center md:gap-20">
				<button className="absolute left-3 md:left-12 top-1/2 scale-x-[-1] w-8 h-8 md:h-12 md:w-12" onClick={decrement}>
						<img src={Arrow} alt="" />
				</button>
				{contents.map((content) => (
					<div className={`rounded-md bg-[#0D0F10] flex flex-col gap-3 w-72 transition-transform duration-300 transform ${isTransitioning ?( direction ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0') : 'translate-x-0 opacity-100'}`} >
						<div className="flex justify-center items-center">
							<img src={content.image} alt="" className="objects-contain h-72 w-full"/>
						</div>
						<p  className="text-white text-base text-center font-inter font-semibold leading-normal">
							{content.title}
						</p>
						<p  className="text-[#9BA9B3] text-base text-center font-inter font-semibold leading-normal">
							{content.date}
						</p>
						<button className="border-2 mx-16 mb-6 py-2  border-[#FFF] rounded-xl bg-[#151719] text-white text-center text-base font-inter font-normal leading-normal">REGISTER</button>
					</div>
				))}
        <button className="absolute right-3 md:right-12 top-1/2 w-8 h-8 md:h-12 md:w-12" onClick={increment}>
          <img src={Arrow} alt="" />
        </button>
			</div>
		</div>
	)
}

export default InnovationAnnoucements;