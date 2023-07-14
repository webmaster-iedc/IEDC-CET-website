import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function Timeline(){
    return( 
        <div className = "w-3/4 border-t-[1px] border-t-gray-800 pt-12 text-center  space-y-5 self-center mt-4 mb-2 ">
        
        <VerticalTimeline lineColor={ 'purple' }>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(53, 7, 134)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(53, 7, 134)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(53, 7, 134)', color: '#8f2173' }}
            //icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Lorem ipsum dolor sit amet</h3>
            <h4 className="vertical-timeline-element-subtitle">Lorem ipsum</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(53, 7, 134)', color: '#fff' }}
            date="2010 - 2011"
            iconStyle={{ background: 'rgb(53, 7, 134)', color: '#fff' }}
            //icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Lorem ipsum dolor sit amet</h3>
            <h4 className="vertical-timeline-element-subtitle">Lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(53, 7, 134)', color: '#fff' }}
            date="2008 - 2010"
            iconStyle={{ background: 'rgb(53, 7, 134)', color: '#fff' }}
            //icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Lorem ipsum dolor sit amet</h3>
            <h4 className="vertical-timeline-element-subtitle">Lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(53, 7, 134)', color: '#fff' }}
            date="2006 - 2008"
            iconStyle={{ background: 'rgb(53, 7, 134)', color: '#fff' }}
            //icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Lorem ipsum dolor sit amet</h3>
            <h4 className="vertical-timeline-element-subtitle">Lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(53, 7, 134)', color: '#fff' }}
            date="April 2013"
            iconStyle={{ background: 'rgb(24, 0, 125)', color: '#fff' }}
            //icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Lorem ipsum dolor sit amet</h3>
            <h4 className="vertical-timeline-element-subtitle">Lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(53, 7, 134)', color: '#fff' }}
            date="November 2012"
            iconStyle={{ background: 'rgb(24, 0, 125)', color: '#fff' }}
            //icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Lorem ipsum dolor sit amet</h3>
            <h4 className="vertical-timeline-element-subtitle">Lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(53, 7, 134)', color: '#fff' }}
            date="2002 - 2006"
            iconStyle={{ background: 'rgb(24, 0, 125)', color: '#fff' }}
            //icon={<SchoolIcon />}
        >
            <h3 className="vertical-timeline-element-title">Lorem ipsum dolor sit amet</h3>
            <h4 className="vertical-timeline-element-subtitle">Lorem ipsum</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            iconStyle={{ background: 'rgb(24, 0, 125)', color: '#fff' }}
            //icon={<StarIcon />}
        />
        </VerticalTimeline>
    </div>)
}