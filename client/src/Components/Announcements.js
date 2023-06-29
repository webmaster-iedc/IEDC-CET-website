import React from "react";
import Slider from "./Slider";

export default function UpcomingEvents() {
    const upcomingEvents = [{
            eventName: "Quickfolio",
            date: "Sign up for Quickfolio now:  https://www.quickfolio.me/",
            image: "./buildclub.jpg",
            brochureLink: "https://example.com/event1/brochure"
        },
        {
            eventName: "INO POINTS",
            date: "Introducing 𝗜𝗡𝗢 𝗣𝗢𝗜𝗡𝗧𝗦 A revolution in how CET thinks. Your work and hardships will now be recognized by 𝗜𝗘𝗗𝗖 𝗖𝗘𝗧. Earn through registrations to events and workshops Redeem cash prize and vouchers. So what are you waiting for !! Start farming your INO POINTS now. 𝗖𝗢𝗠𝗣𝗘𝗧𝗘 𝗖𝗢𝗟𝗟𝗘𝗖𝗧 𝗖𝗢𝗡𝗡𝗘𝗖𝗧",
            image: "https://randomwordgenerator.com/img/picture-generator/52e4d641495ba414f1dc8460962e33791c3ad6e04e507441722978d69f4ac2_640.jpg",
            registrationLink: "https://example.com/event2/registration",
            brochureLink: "https://example.com/event2/brochure"
        }

    ];

    return ( <
        div className = "w-3/4 text-center  space-y-5 self-center mt-4 mb-2 " >
        <
        h className = "mb-2 text-4xl font-bold text-white" > Announcements < /h> <
        Slider data = { upcomingEvents }
        /> < /
        div >
    );
}