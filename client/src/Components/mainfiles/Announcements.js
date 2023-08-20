import React from "react";
import Slider from "./Slider";
import Quickfolio from "../../Assets/Images/AnnoucementsMain/quickfolio.jpg";
import iedcSummit from "../../Assets/Images/AnnoucementsMain/iedcSummit.png";
import ALT from "../../Assets/Images/IEDC-logo-2.png";

export default function UpcomingEvents({ sectionRef }) {
  const Announcements = [
    {
      eventName: "IEDC SUMMIT",
      date: "IEDC Summit 2023 conducted by KSUM will be conducted at CET this year.",
      image: iedcSummit,
      registrationLink: "",
      brochureLink: "",
    },
    {
      eventName: "Quickfolio",
      date: "Sign up for Quickfolio now:  https://www.quickfolio.me/",
      image: Quickfolio,
      registrationLink: "",
      brochureLink: "",
    },
    {
      eventName: "INO POINTS",
      date: "Introducing 𝗜𝗡𝗢 𝗣𝗢𝗜𝗡𝗧𝗦 A revolution in how CET thinks",
      image: ALT,
      registrationLink: "",
      brochureLink: "",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="w-3/4 border-t-[1px] border-t-gray-800 pt-12 text-center space-y-5 self-center mt-4 mb-2 "
    >
      <h className="mb-12 block text-3xl min-[400px]:text-4xl font-bold text-white">
        {" "}
        Announcements{" "}
      </h>{" "}
      <Slider data={Announcements} />
    </div>
  );
}
