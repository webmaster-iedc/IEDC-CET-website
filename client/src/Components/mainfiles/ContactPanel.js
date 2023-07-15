import React from 'react'


const ContactInfo = (props) => {
    return (
        <div className='flex flex-col'>
            <p className='text-blue-100 font-semibold text-xl mb-1'>Contact: {props.name} ({props.desig})</p>
            <p className='text-blue-100 text-xl mb-1'>Email: {props.email}</p>
        </div>
    )
}


const ContactPanel = ( {sectionRef}) => {
    return (
        <div  ref={sectionRef} className="bg-[#5658DD] self-center rounded-md px-4 py-12 flex flex-col space-y-2 md:w-1/3 text-center ">
          <ContactInfo name="Rizvan MS" desig="CEO" email="ceoiedc@cet.ac.in" />
          <ContactInfo name="Treasa Mariya" desig="PRO" email="proiedc@cet.ac.in" />
        </div>
    )
}

export default ContactPanel;
