import React from "react";
import Slider from "./Slider";

import inovideo from "../Assets/Videos/INO.mp4";
import Quickfolio from "../Assets/Images/quickfolio.jpg"

export default function UpcomingEvents() {
    const Announcements = [{
            eventName: "Quickfolio",
            date: "Sign up for Quickfolio now:  https://www.quickfolio.me/",
            image: Quickfolio,
            registrationLink: "",
            brochureLink: ""
        },
        {
            eventName: "INO POINTS",
            date: "Introducing 𝗜𝗡𝗢 𝗣𝗢𝗜𝗡𝗧𝗦 A revolution in how CET thinks.𝗧",
            image: "",
            registrationLink: "",
            brochureLink: ""
        }

    ];

    return ( <
        div className = "w-3/4 text-center  space-y-5 self-center mt-4 mb-2 " >
        <h className = "mb-2 text-4xl font-bold text-white" > Announcements </h> <
        Slider data = { Announcements }/>
        </ div >
    );
}