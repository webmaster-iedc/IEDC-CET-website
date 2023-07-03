import React from "react";
import Slider from "./Slider";
import BuildClub from "../../Assets/Images/UpcomingEvents/buildclub.jpg";
import YIP from "../../Assets/Images/UpcomingEvents/yip.jpg";
import Balm from "../../Assets/Images/UpcomingEvents/balmdesignathon.jpg";
import YipIdeaFest from "../../Assets/Images/UpcomingEvents/yipideafest.jpg";

export default function UpcomingEvents( {sectionRef}) {
    const upcomingEvents = [{
            eventName: "Build Club",
            date: "2023-07-15",
            image: BuildClub,
            registrationLink: "https://example.com/event1/registration",
            brochureLink: "https://example.com/event1/brochure"
        },
        {
            eventName: "Young Innovators Program",
            date: "07/06/2023",
            image: YIP,
            registrationLink: "https://example.com/event2/registration",
            brochureLink: "https://example.com/event2/brochure"
        },
        {
            eventName: "Balm Designathon",
            date: "06/06/2023",
            image: Balm,
            registrationLink: "https://example.com/event3/registration",
            brochureLink: "https://example.com/event3/brochure"
        },
        {
            eventName: "YIP Ideafest",
            date: "07/06/2023",
            image: YipIdeaFest,
            registrationLink: "https://example.com/event4/registration",
            brochureLink: "https://example.com/event4/brochure"
        }
    ];

    return ( 
    <div  ref={sectionRef} className = "w-3/4 text-center  space-y-5 self-center mt-4 mb-2 " >
        <h className = "mb-2 text-4xl font-bold text-white" > Upcoming Events </h> 
        <Slider data = { upcomingEvents }/> 
        </div>
    );
}