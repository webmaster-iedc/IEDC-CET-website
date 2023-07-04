import React from "react";
import Register from "../../Assets/Images/InnovationProcess/innovationregister.png";
import Mentorship from "../../Assets/Images/InnovationProcess/innovationmentorship.png";
import Community from "../../Assets/Images/InnovationProcess/innovationcommunity.png";

function InnovationProcess() {
  const items = [
    {
      image: Register,
      title: "REGISTER",
      content:
        "Colleges/NGOs/schools can register through the website and the team will approach.",
    },
    {
      image: Mentorship,
      title: "MENTORSHIP",
      content:
        "Mentorship involves conducting workshops and other activities according to the registration survey.",
    },
    {
      image: Community,
      title: "COMMUNITY",
      content:
        "Through the communities vibrant and enthusiastic students will get further mentorship.",
    },
  ];
  return (
    <div className="w-3/4 self-center flex flex-col justify-center">
      <h1 className="text-white text-center text-5xl font-semibold font-poppins mt-20">
        PROCESS
      </h1>
      <hr className="mt-2 border-t-2 w-36 mx-auto mb-20  border-red-700" />
      <div className="flex flex-col md:flex-row justify-center mb-5 gap-5 items-center md:justify-evenly">
        {items.map((item) => (
          <div className="rounded-md bg-[#0D0F10] flex flex-col px-8 py-5 gap-3 w-72">
            <div className="flex justify-center items-center">
              <img src={item.image} alt="" className="objects-contain w-10 h-10"/>
            </div>
            <h1 className="text-white text-center text-lg font-semibold font-inter">
              {item.title}
            </h1>
            <p className="text-gray-500 text-center text-base font-semibold font-inter">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default InnovationProcess;