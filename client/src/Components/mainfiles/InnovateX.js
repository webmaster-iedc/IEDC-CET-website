import React, { useState } from "react";
import axios from "axios";

function InnovateX({ sectionRef }) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    year: 1,
    college: "",
    domains: [],
  });
  const domainOptions = [
    {
      id: "frontend",
      label: "Basic Frontend Development (HTML, CSS, JavaScript)",
      value: "Frontend Development",
    },
    {
      id: "android",
      label: "Android Development (Flutter)",
      value: "Android Development",
    },
    {
      id: "matlab",
      label: "MATLAB",
      value: "MATLAB",
    },
    {
      id: "dataAnalysis",
      label:
        "Data Analysis and Visualization (Numpy, Pandas, Seaborn, MatPlotLib)",
      value: "Data Analysis and Visualization",
    },
    {
      id: "solidworks",
      label: "Solidworks / Creo",
      value: "Solidworks / Creo",
    },
    {
      id: "uiux",
      label: "UI/UX Design - Figma",
      value: "UI/UX Design",
    },
    {
      id: "videoEditing",
      label: "Video Editing tools",
      value: "Video Editing tools",
    },
  ];
  const formFields = [
    { label: "Name", type: "text", name: "name" },
    { label: "Mobile no.", type: "tel", name: "mobile" },
    { label: "Email", type: "email", name: "email" },
  ];

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]:
        type === "checkbox"
          ? checked
            ? [...prevFormData[name], value]
            : prevFormData[name].filter((item) => item !== value)
          : value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await axios.post(
        "https://iedc-backend.onrender.com/api/v1/innovatex",
        formData
      );
      console.log("Successfully joined!");
    } catch (err) {
      console.error(err.message);
    }
    setFormData({
      name: "",
      mobile: "",
      email: "",
      year: 1,
      college: "",
      domains: [],
    });
  };

  return (
    <div
      ref={sectionRef}
      className="flex flex-col lg:w-1/2 w-3/4 self-center text-white mt-8"
    >
      <h className="text-center mb-12 block text-4xl font-bold text-white">
        {" "}
        InnovateX Workshop{" "}
      </h>
      <form onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <div className="form-group mb-4" key={field.name}>
            <label htmlFor={field.name} className="block font-semibold mb-2">
              {field.label}:
            </label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="text-black w-full px-4 py-2 border rounded"
              required
            />
          </div>
        ))}

        <div className="form-group mb-4">
          <label htmlFor="year" className="block font-semibold mb-2">
            Year of Study:
          </label>
          <select
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="text-black w-full px-4 py-2 border rounded"
          >
            {[1, 2, 3, 4].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group mb-4">
          <label htmlFor="college" className="block font-semibold mb-2">
            College:
          </label>
          <input
            type="text"
            id="college"
            name="college"
            value={formData.college}
            onChange={handleChange}
            className="text-black w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <div className="form-group mb-4">
          <p className="font-semibold mb-2">
            Domains you would like to learn more about:
          </p>
          {domainOptions.map((option) => (
            <label className="flex items-center mb-2" key={option.id}>
              <input
                type="checkbox"
                id={option.id}
                name="domains"
                value={option.value}
                checked={formData.domains.includes(option.value)}
                onChange={handleChange}
                className="text-black mr-2"
              />
              {option.label}
            </label>
          ))}
        </div>

        <div className="form-group mb-4">
          <button
            type="submit"
            className="bg-[#5658dd] text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default InnovateX;
