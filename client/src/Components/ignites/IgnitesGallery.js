import React from "react";
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
        {src:pic2, title:'Ignites 12'},
        {src:pic3, title:'Ignites 12'},
        {src:pic4, title:'Ignites 12'},
        {src:pic5, title:'Ignites 12'},
        {src:pic6, title:'Ignites 12'},
        {src:pic7, title:'Ignites 12'},
        {src:pic8, title:'Ignites 12'},
        {src:pic9, title:'Ignites 12'},
    ];
    return(
        <div className="items-center text-center m-5">
            <h1 className="text-white text-5xl font-extrabold">Gallery</h1>

            <div className="flex flex-wrap w-[1048px] items-center">
                {
                    imageGallery.map((index) => <img className="h-[200px] w-[349.33px]" src={index.src} title={index.title} />)
                }
            </div>
        </div>

    );

}

export default gallery;