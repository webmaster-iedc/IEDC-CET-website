import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function Timeline(){
    const timelineevents1 = [
        {title : "Program initiation",
         detail : "IgnitES 1.0 was launched in 2021 during the challenging times of the Covid pandemic. The program aimed to promote an entrepreneurial culture among students at the College of Engineering Trivandrum.",
         date : "2021"
        },
        {title : "Grand Finale",
         detail : "The exciting journey of ignitES 1.0 culminated on 28th July 2022 at CETAA HALL, College of Engineering Trivandrum. During this event, the participating teams presented their innovative ideas and solutions to real-world problems in sectors such as sustainable engineering, E-business, E-commerce, and more.",
         date : "28-07-2022"
        },
        {title : "IITM RP visit for winners",
         detail : "As a reward for their outstanding performance, the winning teams in the E-business and Sustainable sectors were granted a memorable visit to the prestigious IIT Madras Research Park (IITM RP) on 28th-29th October 2022. During this visit, they had the privilege of interacting with successful entrepreneurs and experts, including the President of IITM RP, 'Ashok Jhunjhunwala,' and the founder and CEO of Easemytrip.",
         date : "28th-29th October"
        },      
        
    ]
    const timelineevents2 = [
        {title : "Launch event",
         detail : "ignitES 2.0, building on the success of its predecessor, was officially launched on 24th November 2022 at CETAA Hall, College of Engineering Trivandrum. The event was attended by approximately 140 enthusiastic students eager to be part of this new chapter in the entrepreneurship program.",
         date : "2021"
        },
        {title : "Inaugural speeches",
         detail : "The launch event featured inspiring speeches by Mr. TARUN UDAYARAJ, Founder and CEO of FlockForge, Mr. SHAJI KOSHY, Former Senior Vice President (Sales & Marketing) at Royal Enfield and CETAAC Chairman, and Mr. JANARDHANA KURUP, Head of ignitES Strategy Group Delivery Excellence leader-Atos & Delivery Head - Public Services & Defence. They shared valuable insights into ignitES 2.0's objectives and vision.",
         date : "28-07-2022"
        },
        {title : "Selection process",
         detail : "Mr. PRASAD BHASKAR, an esteemed member of the Indian Army, explained the selection process for ignitES 2.0 to the eager students, setting the stage for an exciting journey ahead.",
         date : "28th-29th October"
        },      
        {title : "Faculty and student sharing",
         detail : "The event also featured speeches from faculty members, Dr. Bindu GR, Dean International Affairs, and Dr. Raju, IEDC CET Nodal Officer, who shared their experiences and visions with the students. Additionally, students who had participated in ignitES 1.0, Mr. Rizwan, and Mrs. Arya M Nair, shared their personal experiences, providing motivation to the new participants.         ",
         date : "28th-29th October"
        },      
        {title : "Registration",
         detail : "Following the launch event, the registration process for ignitES 2.0 began. Nearly 130 students registered from various streams, expressing their interest in sectors such as E-business, sustainable practices, Agro, and more.",
         date : "28th-29th October"
        },    
        {title : "Group formation",
         detail : "The organizing committee, along with alumni members, started sorting the registrations to form groups based on the students' ideas and interests. This marked the beginning of the journey for ignitES 2.0, as students eagerly anticipated the upcoming entrepreneurial endeavors.",
         date : "28th-29th October"
        }, 
        
        
    
        
    ]
    return( 
        <div className = "w-3/4 border-t-[1px] border-t-gray-800 pt-12 space-y-5 self-center mt-4 mb-2 ">
        <h className = "text-4xl text-white font-bold">ignitES 1.0</h>
        <VerticalTimeline>
            {
            timelineevents1.map((event) =>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#5658dd', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #5658dd' }}
                    date={event.date}
                    iconStyle={{ background: '#5658dd', color: '#8f2173' }}
                    //icon={<WorkIcon />}
                    >
                
                    <h3 className="vertical-timeline-element-title text-[25px] font-semibold">{event.title}</h3>
                    
                    <p>{event.detail}</p>
                </VerticalTimelineElement>
            )}
        </VerticalTimeline>
        <h1 className = "text-4xl text-white font-bold pt-10 pb-5">ignitES 2.0</h1>
        <VerticalTimeline lineColor={ 'white' }>
            {
            timelineevents2.map((event) =>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#5658dd', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #5658dd' }}
                    date={event.date}
                    iconStyle={{ background: '#5658dd', color: '#8f2173' }}
                    //icon={<WorkIcon />}
                    >
                
                    <h3 className="vertical-timeline-element-title text-[25px]">{event.title}</h3>
                    
                    <p>{event.detail}</p>
                </VerticalTimelineElement>
            )}
            <VerticalTimelineElement
            iconStyle={{ background: '#fff', color: '#8f2173' }}>
                
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>)
}