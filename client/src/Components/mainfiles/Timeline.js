import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
const timelineData = [
    {
      id: 1,
      type: "work",
      date: "2011 - present",
      title: "Lorem ipsum dolor sit amet",
      subtitle: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      type: "work",
      date: "2010 - 2011",
      title: "Lorem ipsum dolor sit amet",
      subtitle: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        type: "work",
        date: "2010 - 2011",
        title: "Lorem ipsum dolor sit amet",
        subtitle: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    // Add more timeline elements here
  ];
  

export default function Timeline(){
    const commonStyle = {
        background: "#5658dd",
        color: "#5658dd",
      };
    
      const commonArrowStyle = {
        borderRight: "7px solid  rgb(53, 7, 134)",
      };
    
      const commonIconStyle = {
        background: "#5658dd",
        color: "#8f2173",
      };
    return( 
        <div className = "w-3/4 border-t-[1px] border-t-gray-800 pt-12 text-center  space-y-5 self-center mt-4 mb-2 ">
        
        <VerticalTimeline lineColor={ 'gray' }>
        {timelineData.map((item) => (
        <VerticalTimelineElement
          key={item.id}
          
          contentStyle={commonStyle}
          contentArrowStyle={commonArrowStyle}
          date={item.date}
          iconStyle={commonIconStyle}
        >
          <h3 className='text-white'>{item.title}</h3>
          <h4 className='text-white'>
            {item.subtitle}
          </h4>
          <p className='text-white'>{item.description}</p>
        </VerticalTimelineElement>
      ))}
        <VerticalTimelineElement
            iconStyle={{ background: '#5658dd', color: '' }}
            //icon={<StarIcon />}
        />
        </VerticalTimeline>
    </div>)
}