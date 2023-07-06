import React from "react";
import '../../index.css';
import pic1 from "../../Assets/Images/ignitesgallery/iggal1.jpg"
import pic2 from "../../Assets/Images/ignitesgallery/iggal2.jpg"
import pic3 from "../../Assets/Images/ignitesgallery/iggal3.jpg"
import pic4 from "../../Assets/Images/ignitesgallery/iggal4.jpg"
import pic5 from "../../Assets/Images/ignitesgallery/iggal5.jpg"
import pic6 from "../../Assets/Images/ignitesgallery/iggal6.jpg"
import pic7 from "../../Assets/Images/ignitesgallery/iggal7.jpg"
import pic8 from "../../Assets/Images/ignitesgallery/iggal8.jpg"
import pic9 from "../../Assets/Images/ignitesgallery/iggal9.jpg"

function gallery() {

    
    let imageGallery = [
        {src:pic1, title:'Ignites 12'},
        {src:pic2, title:'Ignites 1'},
        {src:pic3, title:'Ignites 11'},
        {src:pic4, title:'Ignites 12'},
        {src:pic5, title:'Ignites 2'},
        {src:pic6, title:'Ignites 6'},
        {src:pic7, title:'Ignites 5'},
        {src:pic8, title:'Ignites 7'},
        {src:pic9, title:'Ignites 10'},
    ];
    return(
        <div className="items-center text-center mx-5 mt-5 mb-36">
            <h1 className="text-white text-5xl font-extrabold m-11">Gallery</h1>

            <div className="grid gap-0 grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[1048px] overflow-hidden m-auto ">
                {
                    imageGallery.map((index) => <div className="overflow-hidden max-w-[349.35px]"><img className="h-[200px] w-[349.33px] hover:scale-125 duration-500" src={index.src} title={index.title} /></div>)
                }
            </div>
        </div>

    );

}

export default gallery;