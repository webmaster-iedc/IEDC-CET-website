import React, { useState } from 'react';
import Highlights1 from "../Assets/Images/highlights1.png";
import Arrow from "../Assets/Images/arrowvector.png";

function InnovationHighlights() {
  const items = [
    {
      image: Highlights1,
      content: "IEDC CET in collaboration with IEDC VAST conducted a workshop on cyber-security at Vidya Academy of Science and Technology. The session was handled by CSCP tech leads and was a part of the Innovation on Wheels program initiated by IEDC CET",
      date: "26/11/2022"
    },
    {
      image: Highlights1,
      content: "IEDC CET in collaboration with IEDC VAST conducted a workshop on cyber-security at Vidya Academy of Science and Technology. The session was handled by CSCP tech leads and was a part of the Innovation on Wheels program initiated by IEDC CET",
      date: "xx/xx/xxxx"
    }
  ];

  const [count, setCount] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
	const [direction,setDirection] = useState(true)

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

  return (
    <div className="flex flex-col justify-center items-center mb-5">
      <h1 className="text-white text-center text-5xl font-semibold font-poppins mt-20">
        HIGHLIGHTS
      </h1>
      <hr className="mt-2 border-t-2 w-36 mx-auto mb-20 border-red-700" />
      <div className="relative flex">
				<button className="absolute left-3 md:left-32 top-1/2 scale-x-[-1] w-8 h-8 md:h-auto md:w-auto" onClick={decrement}>
					<img src={Arrow} alt="" />
				</button>
        <div className={`flex flex-col mx-auto justify-center item-center rounded-2xl border-2 border-[#0D0F10] bg-black w-3/4 md:w-2/5 h-auto transition-transform duration-300 transform ${isTransitioning ?( direction ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0' ) : 'translate-x-0 opacity-100'}` }>
          <img src={items[count].image} alt="" />
          <div className="text-[#9BA9B3] text-center text-base font-inter font-semibold p-5">
            <p>{items[count].content}</p>
            <p>Date: {items[count].date}</p>
          </div>
        </div>
        <button className="absolute right-3 md:right-32 top-1/2 w-8 h-8 md:h-auto md:w-auto" onClick={increment}>
          <img src={Arrow} alt="" />
        </button>
      </div>
    </div>
  );
}

export default InnovationHighlights;
