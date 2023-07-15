import React from "react";
import Slider from "./Slider2";
import CEO from "../../Assets/Images/Teams/CEO.png"
import CFO from "../../Assets/Images/Teams/CFO.png"
import COO from "../../Assets/Images/Teams/COO.jpeg"
import CCO from "../../Assets/Images/Teams/CCO.jpg"
import CTO from "../../Assets/Images/Teams/CTO.jpg"
import CMO_1 from "../../Assets/Images/Teams/CMO_1.jpg"
import CMO_2 from "../../Assets/Images/Teams/CMO_2.jpg"
import CCoO_1 from "../../Assets/Images/Teams/CCoO_.png"
import CCoO_2 from "../../Assets/Images/Teams/CCoO.JPG"
import CSMO1 from "../../Assets/Images/Teams/CSMO_1.jpg"
import CSMO2 from "../../Assets/Images/Teams/CSMO_2.jpeg"
import PRO from "../../Assets/Images/Teams/PRO.jpg"
import PRO_2 from "../../Assets/Images/Teams/PRO_2.JPG"
import PO_1 from "../../Assets/Images/Teams/PO_1.jpg"
import PO_2 from "../../Assets/Images/Teams/PO_2.JPG"
import PO_3 from "../../Assets/Images/Teams/PO_3.jpeg"
import PO_4 from "../../Assets/Images/Teams/PO_4.jpg"
import CC from "../../Assets/Images/Teams/CC.jpg"

import WEL from "../../Assets/Images/Teams/WEL.JPG"
import NKL from "../../Assets/Images/Teams/NKL.jpg"
import WM from "../../Assets/Images/Teams/WM.jpg"
export default function Team() {
    const team = [{
        image: CEO,
        name: "Rizvan M S",
        role: "Chief Executive Officer",
        email: "ceoiedc@cet.ac.in",
        number: "+91 7909290803"
    },
    {
        image: CFO,
        name: "Arya S Jayasree",
        role: "Chief Financial Officer",
        email: "cfoiedc@cet.ac.in",
        number: "+91 6235741611",
    }, 
    {
        image: COO,
        name: "Christo Stanly", 
        role: "Chief Operating Officer",
        email: "cooiedc@cet.ac.in",
        number: "+91 9747104733"
    }
    ,
    {
        image: CCO,
        name: "Akhil Hayash M", 
        role: "Chief Creative Officer",
        email: "ccoiedc@cet.ac.in",
        number: "+91 7994764846"
    },
    {
        image: CTO,
        name: "Yena Sunil Kumar", 
        role: "Chief Technical Officer",
        email: "cooiedc@cet.ac.in",
        number: "+91 7025247468"
    },
    {
        image: CMO_1,
        name: "Sidharth Nair", 
        role: "Chief Marketing Officer",
        email: "cmoiedc@cet.ac.in",
        number: "+91 9061354702"
    },
    {
        image:CMO_2,
        name: "Gautam Lakshman", 
        role: "Chief Marketing Officer",
        email: "cmoiedc@cet.ac.in",
        number: "+91 8714438004"
    },
    {
        image: CCoO_1,
        name: "Sarang T K", 
        role: "Chief Community Officer",
        email: "ccoiedc@cet.ac.in",
        number: "+91 7025140214"
    },
    {
        image:CCoO_2,
        name: "Navaneeth P A", 
        role: "Chief Community Officer",
        email: "ccoiedc@cet.ac.in",
        number: "+91 8129196507"
    },
    {
        image: CSMO1,
        name: "Aswin U M", 
        role: "Chief Social Media Officer",
        email: "iedc@cet.ac.in",
        number: "+91 0000000000"
    },
    {
        image: CSMO2,
        name: "Melijo Jose", 
        role: "Chief Social Media Officer",
        email: "iedc@cet.ac.in",
        number: "+91 8075081397"
    },
    {
        image: PRO,
        name: "Diliya Mol Sebastian", 
        role: "Public Relations Officer",
        email: "proiedc@cet.ac.in",
        number: "+91 8156911365"
    },
    {
        image: PRO_2,
        name: "Treasa Mariya", 
        role: "Public Relations Officer",
        email: "proiedc@cet.ac.in",
        number: "+91 9400843439"
    },
    {
        image: PO_1,
        name: "Alan Aji", 
        role: "Program Officer",
        email: "poiedc@cet.ac.in",
        number: "+91 8289965095"
    },
    {
        image: PO_2,
        name: "Mohammed Fasil", 
        role: "Program Officer",
        email: "poiedc@cet.ac.in",
        number: "+91 9605953690"
    },
    {
        image: PO_3,
        name: "Bharath Krishna", 
        role: "Program Officer",
        email: "poiedc@cet.ac.in",
        number: "+91 9847882852"
    },
    {
        image:PO_4,
        name: "Varsha Nandakumar", 
        role: "Programme Officer",
        email: "proiedc@cet.ac.in",
        number: "+91 8281763544"
    },
    {
        image: CC,
        name: "Rishi Prasad", 
        role: "Content Creator",
        email: "cciedc@cet.ac.in",
        number: "+91 8281180107"
    },
    {
        image: WEL,
        name: "Sreerekha", 
        role: "Women Entrepreneurship Lead",
        email: "iedc@cet.ac.in",
        number: "+91 6235687850"
    },
    {
        image: NKL,
        name: "Rigzin Dolma", 
        role: "Non Keralite Lead",
        email: "iedc@cet.ac.in",
        number: "+91 6005580500"
    },
    {
        image:WM,
        name: "Nived Narayanan", 
        role: "Web Master",
        email: "nivednarayanan67@gmail.com",
        number: "+91 9447300552"
    } 
]

    return ( 
        <div className = " w-3/4 text-center  space-y-5 self-center mt-4 mb-2 " >
        <h className = "mb-12 block text-4xl font-bold text-white" > Team </h>
        <Slider data = { team }/>
        </div >
    );
}