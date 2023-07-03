import React from "react";
import '../../index.css';
import {AiOutlineMail} from 'react-icons/ai'
import {FiPhone} from 'react-icons/fi'

function InnovationContact( {sectionRef}) {
    return(
        <div  ref={sectionRef} className="items-center mt-4">
            <div className="bg-[#0D0F10] flex flex-col items-center">
                <h1 className="text-[#ECEDED] text-center text-5xl mt-20 mb-5 font-semibold">CONTACT</h1>
                <hr style={{ height: '2px' }} className="bg-[#9E130A] border-none w-[77px]"/>
                <div className="mt-7 mb-20">
                    <div className="flex gap-24 m-4">
                        <div>
                            <AiOutlineMail size={45} className="text-[#dee2e4]" />
                        </div>
                        <div className="text-[#9BA9B3] underline font-semibold text-2xl">
                            ceoiedc@cet.ac.in
                        </div>
                    </div>
                    <div className="flex gap-24 m-4">
                        <div>
                            <FiPhone  size={45} className="text-[#dee2e4]"/>
                        </div>
                        <div className="text-[#9BA9B3] font-semibold text-2xl">
                            +91 7909290803
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-[#9BA9B34D] text-center m-20">
                <p>Designed by Arya Vijayan. Developed by .</p>
                <p>All Rights Reserved</p>
            </div>
        </div>
    )
}


export default InnovationContact;