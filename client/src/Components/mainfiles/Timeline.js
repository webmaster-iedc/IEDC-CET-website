import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
const timelineElements = [
    {
      date: "2011 - present",
      title: "Lorem ipsum dolor sit amet",
      subtitle: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      date: "210 - 2011",
      title: "Lorem ipsum dolor sit amet",
      subtitle: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      date: "2008 - 2010",
      title: "Lorem ipsum dolor sit amet",
      subtitle: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      date: "2006 - 2008",
      title: "Lorem ipsum dolor sit amet",
      subtitle: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

export default function Timeline(){
    return( 
        <div className = "w-3/4 border-t-[1px] border-t-gray-800 pt-12 text-center  space-y-5 self-center mt-4 mb-2 ">
        
        <VerticalTimeline lineColor={ 'gray' }>
        
        {timelineElements.map((element, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#5658dd", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #aaa" }}
          date={element.date}
          iconStyle={{ background: "#5658dd", color: "#aaa" }}
        >
          <h3 className="vertical-timeline-element-title">{element.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {element.subtitle}
          </h4>
          <p>{element.description}</p>
        </VerticalTimelineElement>
      ))}
       
        </VerticalTimeline>
    </div>)
}