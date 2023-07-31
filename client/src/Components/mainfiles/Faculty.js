import React from "react";
import Slider from "./Slider2";
//import statements for images
import FacultyAdvisor from "../../Assets/Images/Faculty/FA.png"
import NodalOfficer from "../../Assets/Images/Faculty/NO.png"
import Principal from "../../Assets/Images/Faculty/Principal.jpg"

export default function Faculty() {
    const faculty = [{
        image: Principal,
        name: "Dr. Savier J S",
        role: "Principal",
        email: "principal@cet.ac.in",
        number: "+91 0000000000"
    },
    {
        image: FacultyAdvisor,
        name: "Dr. Gijoy S",
        role: "Faculty Advisor",
        email: "email@email.com",
        number: "+91 9496330263",
    }, 
    {
        image: NodalOfficer,
        name: "Dr. Raju C", 
        role: "Nodal Officer",
        email: "noiedc@cet.ac.in",
        number: "+91 0000000000"
    } ]

    return ( 
        <div className = "border-t-[1px] border-t-gray-800 pt-12 w-3/4 text-center  space-y-5 self-center mt-4 mb-2 " >
        <h className = "mb-12 block text-4xl font-bold text-white" > Faculty </h>
        <Slider data = { faculty }/>
        </div >
    );
}