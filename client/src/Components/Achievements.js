import React from "react";
import Slider from "./Slider";

export default function UpcomingEvents() {
    const upcomingEvents = [{
            eventName: "Patent Grant",
            date: "Congratulations to Dr Rani S, Dr Muhammed Arif, Sneha Edla and Ananthan D Thampi on being successfully granted patent for developing a green cutting fluid that has the potential to reduce the country's dependence on imported cutting fluid.",
            image: "./buildclub.jpg",
            registrationLink: "https://example.com/event1/registration",
            brochureLink: "https://example.com/event1/brochure"
        },
        {
            eventName: "Patent Grant",
            date: "Congratulations to Prof. Reshmi Bhooshan (faculty mentor), Praveen Sekhar (2014 AEI), and Lia Joseph (2014 AEI)on being successfully granted patent for the invention titled “An Automated duct fan-based Wall Climbing Device”.",
            image: "https://randomwordgenerator.com/img/picture-generator/52e4d641495ba414f1dc8460962e33791c3ad6e04e507441722978d69f4ac2_640.jpg",
            registrationLink: "https://example.com/event2/registration",
            brochureLink: "https://example.com/event2/brochure"
        },
        {
            eventName: "MHRD National Innovation Fest 2019",
            date: "Jithin Sankar S5EE, Vishnu vikraman S5EE and Akshay Krishna R S5ME were finalists at National Innovation Fest 2019 hosted by MHRD Govt. of India.",
            image: "https://randomwordgenerator.com/img/picture-generator/52e4d641495ba414f1dc8460962e33791c3ad6e04e507441722978d69f4ac2_640.jpg",
            registrationLink: "https://example.com/event3/registration",
            brochureLink: "https://example.com/event3/brochure"
        },
        {
            eventName: "V-Guard Big Idea Challenge 2019",
            date: "Jithin Sankar S5EE, Vishnu vikraman S5EE and Akshay Krishna R S5ME bagged the first runner up position in the V-Guard Big Idea Challenge conducted in 2019.",
            image: "https://randomwordgenerator.com/img/picture-generator/52e4d641495ba414f1dc8460962e33791c3ad6e04e507441722978d69f4ac2_640.jpg",
            registrationLink: "https://example.com/event4/registration",
            brochureLink: "https://example.com/event4/brochure"
        },
        {
            eventName: "Ketcon 2019",
            date: "Amal C Shaji, Akshay Vijayan, Devika Ramgopal secured first prize in paper presentation in the track 'Developments in Computer Applications' conducted as a part of KTU Techfest 2019.",
            image: "https://randomwordgenerator.com/img/picture-generator/52e4d641495ba414f1dc8460962e33791c3ad6e04e507441722978d69f4ac2_640.jpg",
            registrationLink: "https://example.com/event4/registration",
            brochureLink: "https://example.com/event4/brochure"
        },
    ];

    return ( <
        div className = "w-3/4 text-center  space-y-5 self-center mt-4 mb-2 " >
        <
        h className = "mb-2 text-4xl font-bold text-white" > Achievements < /h> <
        Slider data = { upcomingEvents }
        /> < /
        div >
    );
}