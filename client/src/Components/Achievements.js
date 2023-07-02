import React from "react";
import Slider from "./Slider";

import PatentGrant1 from "../Assets/Images/patentgrant.png"
import PatentGrant2 from "../Assets/Images/patentgrant2.jpg"
import Mhrd from "../Assets/Images/mhrd.jpg"
import VGuard from "../Assets/Images/vguard.jpg"
import KetCon from "../Assets/Images/ketcon.jpg"

export default function UpcomingEvents() {
    const Achievements = [{
            eventName: "Patent Grant",
            date: "Congratulations to Dr Rani S, Dr Muhammed Arif, Sneha Edla and Ananthan D Thampi on being successfully granted patent for developing a green cutting fluid that has the potential to reduce the country's dependence on imported cutting fluid.",
            image: PatentGrant1,
            registrationLink: "",
            brochureLink: ""
        },
        {
            eventName: "Patent Grant",
            date: "Congratulations to Prof. Reshmi Bhooshan (faculty mentor), Praveen Sekhar (2014 AEI), and Lia Joseph (2014 AEI)on being successfully granted patent for the invention titled “An Automated duct fan-based Wall Climbing Device”.",
            image: PatentGrant2,
            registrationLink: "",
            brochureLink: ""
        },
        {
            eventName: "MHRD National Innovation Fest 2019",
            date: "Jithin Sankar S5EE, Vishnu vikraman S5EE and Akshay Krishna R S5ME were finalists at National Innovation Fest 2019 hosted by MHRD Govt. of India.",
            image: Mhrd,
            registrationLink: "",
            brochureLink: ""
        },
        {
            eventName: "V-Guard Big Idea Challenge 2019",
            date: "Jithin Sankar S5EE, Vishnu vikraman S5EE and Akshay Krishna R S5ME bagged the first runner up position in the V-Guard Big Idea Challenge conducted in 2019.",
            image: VGuard,
            registrationLink: "",
            brochureLink: ""
        },
        {
            eventName: "Ketcon 2019",
            date: "Amal C Shaji, Akshay Vijayan, Devika Ramgopal secured first prize in paper presentation in the track 'Developments in Computer Applications' conducted as a part of KTU Techfest 2019.",
            image: KetCon,
            registrationLink: "",
            brochureLink: ""
        },
    ];

    return ( 
        <div className = "w-3/4 text-center  space-y-5 self-center mt-4 mb-2 " >
        <h className = "mb-2 text-4xl font-bold text-white" > Achievements </h>
        <Slider data = { Achievements }/>
        </div >
    );
}