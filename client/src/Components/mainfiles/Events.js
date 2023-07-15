import React from 'react';


const Events = () => {
    const listofevents = [
        {
            name:"Innovation on Wheels",
            image:"",
            src:"../innovation/InnovationHome",
            date:"00-00-2023"
        },
        {
            name:"IdeaBox",
            image:"",
            src:"https://example.com/event1/brochure",
            date:"00-00-2023"
        }
    ]
    return (
        <div className='w-2/3 self-center'>
            <h1 className='text-4xl text-center text-white font-semibold m-11'>Events</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-center'>
                {
                    listofevents.map((event_,index) =>
                    <div key={index} className='border-solid items-center flex flex-col border-[1px] border-[#e5e7eb] pb-5'>
                        <img alt="" src={event_.image} width={382.4} height={354} />
                        <h3 className='text-white text-2xl font-semibold text-center m-3'>{event_.name}</h3>
                        <p className='text-[#9ca3af] text-center m-3'>{event_.date}</p>
                        <a href={event_.src} className='text-[#ffffff] text-xl border-solid mx-auto rounded-md bg-blue-800 px-3 py-2 '>Explore &#8594;</a> 
                    </div>
                )}
            </div>
        </div>
    )
}


export default Events;