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
        number: "+91 9400843439"
    },
    {
        image: SL2,
        name: "Usman A Asan",
        role: "Student Lead",
        email: "ceoiedc@cet.ac.in",
        number: "+91 7736717252 ",
    }, 
    {
        image: CFO,
        name: "Muhammad Alfas", 
        role: "Chief Finance Officer",
        email: "cfoiedc@cet.ac.in",
        number: "+91 9745091733"
    },
    {
        image: IFR,
        name: "Sarang T K", 
        role: "IFR & Research Lead",
        email: "tksarang2002@gmail.com", 
        number: "+91 7025140214"
    },
    {
        image: CMO,
        name: "Edwin Emmanuel Roy", 
        role: "Chief Marketing Officer",
        email: "cmoiedc@cet.ac.in",
        number: "+91 8113859251"
    },
    {
        image: CDO,
        name: "Afreen Nishad", 
        role: "Chief Design Officer",
        email: "afreennishadkunju@gmail.com",
        number: "+91 8921063207"
    },
    {
        image:COO,
        name: "Aswin U M", 
        role: "Chief Operating Officer",
        email: "cooiedc@cet.ac.in",
        number: "+91 9074967129"
    },
    {
        image: PAL,
        name: "Niranjana G Nair", 
        role: "Public Affairs Lead",
        email: "proiedc@cet.ac.in",
        number: "+91 95624 21161"
    },
    {
        image:WIL,
        name: "Decika J U", 
        role: "Women Innovation Lead",
        email: "iedc@cet.ac.in",
        number: "+91 8848599467"
    },
    {
        image: CTO,
        name: "Asna Gafoor", 
        role: "Chief Technical Officer",
        email: "ctoiedc@cet.ac.in",
        number: "+91 9072777246"
    },
    {
        image: COO2,
        name: "Christo Stanly", 
        role: "Chief Operating Officer",
        email: "cooiedc@cet.ac.in",
        number: "+91 9747104733"
    }
]

    return ( 
        <div className = " w-3/4 text-center  space-y-5 self-center mt-4 mb-2 " >
        <h className = "mb-12 block text-4xl font-bold text-white" > Team </h>
        <Slider data = { team }/>
        </div >
    );
}