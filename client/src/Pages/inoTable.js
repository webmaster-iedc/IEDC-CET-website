import React from "react";
import MonthTop from "../Components/inoTable/monthTop";
import AllTimeTop from "../Components/inoTable/allTimeTop";
function inoTable()
{
    

      
    return ( <div className="space-y-4 bg-[#15191D] w-full min-h-screen flex flex-col">
    <h className="mt-4 text-5xl font-extrabold text-white w-full text-center">ino<span className="text-violet-500">Table</span></h>
    <AllTimeTop/>
    <MonthTop/>

    </div>
     );
}
 
export default inoTable;