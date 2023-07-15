import React, { useState } from "react";
import ExcelJS from "exceljs";
// import XLSX from 'sheetjs';
const File = "newsletter_subscriptions.xlsx"

function Newsletter() {
  const [email, setEmail] = useState("");
  const handleInput = (e) => {
    setEmail(e.target.value);
  };
	// const handleFormSubmit = (e) => {
  //   e.preventDefault();
	// 	console.log("in func")
  //   // Load the existing workbook
  //   const workbook = new ExcelJS.Workbook();
  //   workbook.xlsx.readFile(File)
  //     .then(() => {
  //       // Get the first worksheet
  //       const worksheet = workbook.getWorksheet(1);

  //       // Add the email to the worksheet
  //       worksheet.addRow([email]);

  //       // Save the workbook with the updated email
  //       return workbook.xlsx.writeFile(File);
  //     })
  //     .then(() => {
  //       console.log('Email added to the Excel file.');
  //     })
  //     .catch((error) => {
  //       console.log('Error:', error);
  //     });
  // };
	// const handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   // Create a new Excel workbook
  //   const workbook = new ExcelJS.Workbook();

  //   // Add a worksheet to the workbook
  //   const worksheet = workbook.addWorksheet('Subscriptions');

  //   // Set the column headers
  //   worksheet.addRow(['Email']);

  //   // Add the email to the worksheet
  //   worksheet.addRow([email]);

  //   // Save the workbook as an Excel file
  //   workbook.xlsx.writeBuffer().then((buffer) => {
  //     // Create a Blob from the buffer
  //     const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

  //     // Create a download link and click it
  //     const url = URL.createObjectURL(blob);
  //     const a = document.createElement('a');
  //     a.href = url;
  //     a.download = 'newsletter_subscriptions.xlsx';
  //     a.click();
  //   });
  // };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Load the existing workbook
    // const workbook = new ExcelJS.Workbook();
		
    // await workbook.xlsx.readFile("newsletter_subscriptions.xlsx");
		
		// console.log("in func")
    // // Get the first worksheet
    // const worksheet = workbook.getWorksheet("subscriptions");

    // // Add the email to the worksheet
    // worksheet.addRow([email]);

    // // Save the workbook with the updated email
    // await workbook.xlsx.writeFile(File);
    // const workbook = XLSX.readFile('path/to/file.xlsx');
		// const worksheet = workbook.Sheets['Sheet1'];  // Assuming you want to read the first sheet
		// const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
		// console.log(jsonData);

    console.log('Email added to the Excel file.');
  };
	return (
    <div className="flex flex-col justify-center items-center gap-7">
      <h1 className="text-white text-4xl font-bold ">Subscribe to our Newsletter</h1>
      <form className="flex justify-center items-center gap-2" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Enter your email.."
          value={email}
          onChange={handleInput}
					className="px-4 py-2 rounded"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;