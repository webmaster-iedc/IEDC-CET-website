import React, { useState } from "react";
import { read, utils, writeFile } from 'xlsx';
const File = "newsletter_subscriptions.xlsx"

function Newsletter() {
  const [email, setEmail] = useState("");
  const handleInput = (e) => {
    setEmail(e.target.value);
  };
	const handleFormSubmit = (e) => {
		e.preventDefault()
		const workbook=read(File)
		const worksheet=workbook.Sheets['Subscriptions']
		const sheetData = utils.sheet_to_json(worksheet, { header: 1 });
		const nextRow = sheetData.length + 1;
		utils.sheet_add_aoa(worksheet, [[email]], { origin: `A${nextRow}` });
		writeFile(workbook, File, { type: 'file' })
      .then(() => {
        console.log('Email added to the Excel file.');
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };
	return (
    <div className="flex flex-col justify-center items-center gap-7">
      <h1 className="text-white text-4xl font-bold text-center">Subscribe to our Newsletter</h1>
      <form className="flex flex-col md:flex-row gap-2 items-center" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Enter your email.."
          value={email}
          onChange={handleInput}
					className="px-4 py-2 w-full rounded"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;