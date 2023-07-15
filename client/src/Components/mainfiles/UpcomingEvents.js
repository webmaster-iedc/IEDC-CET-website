import React from "react";
import Slider from "./SliderEvents";
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
            brochureLink: "https://example.com/event1/brochure",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim nunc, venenatis eget vehicula at, hendrerit eget nisi. Ut imperdiet augue a tortor vehicula, non rutrum mauris efficitur. Morbi scelerisque ullamcorper magna, eget pharetra tellus condimentum non. Nunc lacus ipsum, feugiat non magna id, elementum elementum diam. Aliquam venenatis mollis convallis. Aenean dictum lacus quis metus congue varius. Quisque sit amet elit eget orci facilisis ornare. Praesent eget rutrum mauris. Etiam auctor augue nec felis sagittis, eu porttitor neque pulvinar. Sed tristique auctor sodales. Sed sit amet elementum ex, sit amet lobortis nibh. Nullam cursus ligula in sapien tristique ultrices. Suspendisse ac nisi a mi condimentum tempus eu quis ligula. Nullam blandit posuere augue. Suspendisse enim nunc, pulvinar non ultrices cursus, molestie quis sem. Cras in tempor justo."
        },
        {
            eventName: "Young Innovators Program",
            date: "07/06/2023",
            image: YIP,
            registrationLink: "https://example.com/event2/registration",
            brochureLink: "https://example.com/event2/brochure",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim nunc, venenatis eget vehicula at, hendrerit eget nisi. Ut imperdiet augue a tortor vehicula, non rutrum mauris efficitur. Morbi scelerisque ullamcorper magna, eget pharetra tellus condimentum non. Nunc lacus ipsum, feugiat non magna id, elementum elementum diam. Aliquam venenatis mollis convallis. Aenean dictum lacus quis metus congue varius. Quisque sit amet elit eget orci facilisis ornare. Praesent eget rutrum mauris. Etiam auctor augue nec felis sagittis, eu porttitor neque pulvinar. Sed tristique auctor sodales. Sed sit amet elementum ex, sit amet lobortis nibh. Nullam cursus ligula in sapien tristique ultrices. Suspendisse ac nisi a mi condimentum tempus eu quis ligula. Nullam blandit posuere augue. Suspendisse enim nunc, pulvinar non ultrices cursus, molestie quis sem. Cras in tempor justo."
        },
        {
            eventName: "Balm Designathon",
            date: "06/06/2023",
            image: Balm,
            registrationLink: "https://example.com/event3/registration",
            brochureLink: "https://example.com/event3/brochure",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim nunc, venenatis eget vehicula at, hendrerit eget nisi. Ut imperdiet augue a tortor vehicula, non rutrum mauris efficitur. Morbi scelerisque ullamcorper magna, eget pharetra tellus condimentum non. Nunc lacus ipsum, feugiat non magna id, elementum elementum diam. Aliquam venenatis mollis convallis. Aenean dictum lacus quis metus congue varius. Quisque sit amet elit eget orci facilisis ornare. Praesent eget rutrum mauris. Etiam auctor augue nec felis sagittis, eu porttitor neque pulvinar. Sed tristique auctor sodales. Sed sit amet elementum ex, sit amet lobortis nibh. Nullam cursus ligula in sapien tristique ultrices. Suspendisse ac nisi a mi condimentum tempus eu quis ligula. Nullam blandit posuere augue. Suspendisse enim nunc, pulvinar non ultrices cursus, molestie quis sem. Cras in tempor justo."
        },
        {
            eventName: "YIP Ideafest",
            date: "07/06/2023",
            image: YipIdeaFest,
            registrationLink: "https://example.com/event4/registration",
            brochureLink: "https://example.com/event4/brochure",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim nunc, venenatis eget vehicula at, hendrerit eget nisi. Ut imperdiet augue a tortor vehicula, non rutrum mauris efficitur. Morbi scelerisque ullamcorper magna, eget pharetra tellus condimentum non. Nunc lacus ipsum, feugiat non magna id, elementum elementum diam. Aliquam venenatis mollis convallis. Aenean dictum lacus quis metus congue varius. Quisque sit amet elit eget orci facilisis ornare. Praesent eget rutrum mauris. Etiam auctor augue nec felis sagittis, eu porttitor neque pulvinar. Sed tristique auctor sodales. Sed sit amet elementum ex, sit amet lobortis nibh. Nullam cursus ligula in sapien tristique ultrices. Suspendisse ac nisi a mi condimentum tempus eu quis ligula. Nullam blandit posuere augue. Suspendisse enim nunc, pulvinar non ultrices cursus, molestie quis sem. Cras in tempor justo."
        }
    ];

    return ( 
    <div  ref={sectionRef} className = "w-3/4 border-t-[1px] border-t-gray-800 pt-12 text-center  space-y-5 self-center mt-4 mb-2 " >
        <h className = "mb-12 block text-4xl font-bold text-white" > Other Events </h> 
        <Slider data = { upcomingEvents }/> 
        </div>
    );
}