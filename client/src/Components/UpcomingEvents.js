import React from "react";
import Slider from "./Slider";

export default function UpcomingEvents() {
    const upcomingEvents = [{
            eventName: "Build Club",
            date: "2023-07-15",
            image: "./buildclub.jpg",
            registrationLink: "https://example.com/event1/registration",
            brochureLink: "https://example.com/event1/brochure"
        },
        {
            eventName: "Young Innovators Program",
            date: "07/06/2023",
            image: "https://randomwordgenerator.com/img/picture-generator/52e4d641495ba414f1dc8460962e33791c3ad6e04e507441722978d69f4ac2_640.jpg",
            registrationLink: "https://example.com/event2/registration",
            brochureLink: "https://example.com/event2/brochure"
        },
        {
            eventName: "Balm Designathon",
            date: "06/06/2023",
            image: "https://randomwordgenerator.com/img/picture-generator/52e4d641495ba414f1dc8460962e33791c3ad6e04e507441722978d69f4ac2_640.jpg",
            registrationLink: "https://example.com/event3/registration",
            brochureLink: "https://example.com/event3/brochure"
        },
        {
            eventName: "YIP Ideafest",
            date: "07/06/2023",
            image: "https://randomwordgenerator.com/img/picture-generator/52e4d641495ba414f1dc8460962e33791c3ad6e04e507441722978d69f4ac2_640.jpg",
            registrationLink: "https://example.com/event4/registration",
            brochureLink: "https://example.com/event4/brochure"
        }
    ];

    return ( 
    <div className = "w-3/4 text-center  space-y-5 self-center mt-4 mb-2 " >
        <h className = "mb-2 text-4xl font-bold text-white" > Upcoming Events </h> 
        <Slider data = { upcomingEvents }/> 
        </div>
    );
}