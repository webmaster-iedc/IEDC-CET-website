import React from "react";
import Slider from "./SliderEvents";
import BuildClub from "../../Assets/Images/UpcomingEvents/buildclub.jpg";
import YIP from "../../Assets/Images/UpcomingEvents/yip.jpg";

import YipIdeaFest from "../../Assets/Images/UpcomingEvents/yipideafest.jpg";


export default function UpcomingEvents( {sectionRef}) {
    const upcomingEvents = [{
            eventName: "Build Club",
            date: "2023-07-15",
            image: BuildClub,
            registrationLink: "https://example.com/event1/registration",
            brochureLink: "https://example.com/event1/brochure",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim nunc, venenatis eget vehicula at, hendrerit eget nisi. Ut imperdiet augue a tortor vehicula, non rutrum mauris efficitur. Morbi scelerisque ullamcorper magna, eget pharetra tellus condimentum non. Nunc lacus ipsum, feugiat non magna id, elementum elementum diam. Aliquam venenatis mollis convallis. "
        },
        {
            eventName: "Young Innovators Program",
            date: "07/06/2023",
            image: YIP,
            registrationLink: "https://example.com/event2/registration",
            brochureLink: "https://example.com/event2/brochure",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim nunc, venenatis eget vehicula at, hendrerit eget nisi. Ut imperdiet augue a tortor vehicula, non rutrum mauris efficitur. Morbi scelerisque ullamcorper magna, eget pharetra tellus condimentum non. Nunc lacus ipsum, feugiat non magna id, elementum elementum diam. Aliquam venenatis mollis convallis. "
        },
        
        {
            eventName: "YIP Ideafest",
            date: "07/06/2023",
            image: YipIdeaFest,
            registrationLink: "https://example.com/event4/registration",
            brochureLink: "https://example.com/event4/brochure",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim nunc, venenatis eget vehicula at, hendrerit eget nisi. Ut imperdiet augue a tortor vehicula, non rutrum mauris efficitur. Morbi scelerisque ullamcorper magna, eget pharetra tellus condimentum non. Nunc lacus ipsum, feugiat non magna id, elementum elementum diam. Aliquam venenatis mollis convallis. "
        }
    ];

    return ( 
    <div  ref={sectionRef} className = "w-3/4 border-t-[1px] border-t-gray-800 pt-12 text-center  space-y-5 self-center mt-4 mb-2 " >
        <h className = "mb-12 block text-4xl font-bold text-white" > Other Events </h> 
        <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab praesentium vitae, officia facilis maiores adipisci dignissimos vel et voluptatem ut sapiente dolorum possimus culpa. Pariatur eligendi animi unde, sequi, nam quo quibusdam, porro doloribus explicabo nesciunt cumque facilis enim! Beatae, neque! Quas dolores nobis corrupti fugit numquam!</p>
        <div className="space-y-2 pb-6">
            <a href="" className="text-white pb-6 font-medium hover:underline underline-offset-4">Read More</a>
        </div>
        <Slider data = { upcomingEvents }/> 
        </div>
    );
}