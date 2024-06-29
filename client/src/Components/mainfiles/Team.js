import React from "react";
import Slider from "./Slider2";
import SL from "../../Assets/Images/Teams/SL.jpg"
import SL2 from "../../Assets/Images/Teams/SL_2.jpg"
import CDO from "../../Assets/Images/Teams/CDO.JPG"
import CFO from "../../Assets/Images/Teams/CFO.jpeg"
import CMO from "../../Assets/Images/Teams/CMO.jpg"
import COO2 from "../../Assets/Images/Teams/COO_2.jpg"
import COO from "../../Assets/Images/Teams/COO.jpg"
import CTO from "../../Assets/Images/Teams/CTO.jpg"
import IFR from "../../Assets/Images/Teams/IFR.jpg"
import PAL from "../../Assets/Images/Teams/PAL.JPG"
import WIL from "../../Assets/Images/Teams/WIL.jpg"
export default function Team() {
    const team = [{
        image: SL,
        name: "Treasa Mariya",
        role: "Student Lead",
        email: "ceoiedc@cet.ac.in",
        number: "+91 7909290803"
    },
    {
        image: SL2,
        name: "Usman A Asan",
        role: "Student Lead",
        email: "cfoiedc@cet.ac.in",
        number: "+91 6235741611",
    }, 
    {
        image: CFO,
        name: "Muhammad Alfas", 
        role: "Chief Finance Officer",
        email: "cooiedc@cet.ac.in",
        number: "+91 9747104733"
    },
    {
        image: IFR,
        name: "Sarang T K", 
        role: "IFR & Research Lead",
        email: "ccoiedc@cet.ac.in",
        number: "+91 7994764846"
    },
    {
        image: CMO,
        name: "Edwin Emmanuel Roy", 
        role: "Chief Marketing Officer",
        email: "ctoiedc@cet.ac.in",
        number: "+91 7025247468"
    },
    {
        image: CDO,
        name: "Afreen Nishad", 
        role: "Chief Design Officer",
        email: "cmoiedc@cet.ac.in",
        number: "+91 9061354702"
    },
    {
        image:COO,
        name: "Aswin U M", 
        role: "Chief Operating Officer",
        email: "cmoiedc@cet.ac.in",
        number: "+91 8597005255"
    },
    {
        image: PAL,
        name: "Niranjana G Nair", 
        role: "Public Affairs Lead",
        email: "ccoiedc@cet.ac.in",
        number: "+91 7025140214"
    },
    {
        image:WIL,
        name: "Decika J U", 
        role: "Woman Innovation Lead",
        email: "ccoiedc@cet.ac.in",
        number: "+91 8129196507"
    },
    {
        image: CTO,
        name: "Asna Gafoor", 
        role: "Chief Technical Officer",
        email: "iedc@cet.ac.in",
        number: "+91 0000000000"
    },
    {
        image: COO2,
        name: "Christo Stanly", 
        role: "Chief Operating Officer",
        email: "iedc@cet.ac.in",
        number: "+91 8075081397"
    }
]

    return ( 
        <div className = " w-3/4 text-center  space-y-5 self-center mt-4 mb-2 " >
        <h className = "mb-12 block text-4xl font-bold text-white" > Team </h>
        <Slider data = { team }/>
        </div >
    );
}