import React from "react";
function allTimeTop()
{
    const data = [
        {
          name: 'Mathew V Kariath',
          year: '3',
          course: 'B.Tech',
          inoPoints:1,
          email:'test12@gmail.com'
        },
        {
          name: 'Rizwan Ms',
          year: '4',
          course: 'B.tech',
          inoPoints:1,
          email:'test12@gmail.com'
        },
        {
          name: 'Nived',
          year: '4',
          course: 'B.Tech',
          inoPoints:1,
          email:'test12@gmail.com'
        }
      ];

      
    return ( 
    
        
    <div class=" space-y-2 mt-4 w-3/4  self-center   ">
    <h className="sm:text-4xl text-2xl font-bold text-white"><span className="text-violet-500">MONTHLY</span> TOPPERS</h>
    
    <table class="md:table hidden w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-md">
        <thead class=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="">
                
                <th scope="col" className=" px-6 py-3">
                    Name
                </th>
                
                <th scope="col" className="  px-6 py-3">
                    Course
                </th>
                <th scope="col" className="flex-none  px-6 py-3">
                    Year
                </th>
                <th scope="col" className="flex-none px-6 py-3">
                    INO Points
                </th>
                
            </tr>
        </thead>
        <tbody>
        {data.map((entry, index) => (
          <tr
            key={index}
            className=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                className="w-10 h-10 rounded-full"
                src="https://imgs.search.brave.com/y368btxlSj8uuW7KtuhNtl3gRzLuEi3oNAyNfdGz27A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTIwNTg1NDQtZjJi/MDg0MjIxMzhhP2l4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OGNH/VnljMjl1ZkdWdWZE/QjhmREI4Zkh3dyZ3/PTEwMDAmcT04MA.jpeg"
                alt={`${entry.name} image`}
              />
              <div className="pl-3">
                <div className="text-base font-semibold">{entry.name}</div>
                <div className="font-normal text-gray-500">{entry.email}</div>
              </div>
            </th>
            <td className="   px-6 py-4">{entry.course}</td>
            <td className="  px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full  mr-2"></div> {entry.year}
              </div>
            </td>
            <td className="py-4">
              <h
               
                className="font-medium self-center text-blue-600 dark:text-blue-500 hover:underline"
              >
                {entry.inoPoints}
              </h>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <table class="md:hidden w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="">
                
                <th scope="col" className=" px-6 py-3">
                    Name
                </th>
                
                
                
            </tr>
        </thead>
        <tbody>
        {data.map((entry, index) => (
          <tr
            key={index}
            className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                className="w-10 h-10 rounded-full"
                src="https://imgs.search.brave.com/y368btxlSj8uuW7KtuhNtl3gRzLuEi3oNAyNfdGz27A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTIwNTg1NDQtZjJi/MDg0MjIxMzhhP2l4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OGNH/VnljMjl1ZkdWdWZE/QjhmREI4Zkh3dyZ3/PTEwMDAmcT04MA.jpeg"
                alt={`${entry.name} image`}
              />
              <div className="pl-3">
                <div className="text-base font-semibold">{entry.name}</div>
                <div className="font-normal text-gray-500">{entry.email}</div>
              </div>
            </th>
            
          </tr>
        ))}
      </tbody>
    </table>
    
   
    
    </div>

    
     );
}
export default allTimeTop;