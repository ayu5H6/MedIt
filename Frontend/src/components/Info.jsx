import React, { useState } from "react";
import SearchIcon from "../icon/SearchIcon";

const Info = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [medicineData, setMedicineData] = useState(null);

  const handleChange = async (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (inputValue.length > 2) {
      try {
        const response = await fetch(`/api/suggestion/${inputValue}`);
        const data = await response.json();
        setSuggestions(data.suggestions || []);

      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = async () => {
    if (!value.trim()) {
      return; // Prevent fetch if input is empty
    }
    try {
      const response = await fetch(`/api/medicine/${value}`);
      const data = await response.json();
      
      setMedicineData(data);
      setSuggestions([])
    } catch (error) {
      console.error("Error fetching medicine data:", error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setValue(suggestion);
    setSuggestions([]);
  };

  return (
    <>
      <div className="mt-14 flex justify-center flex-row items-center  p-4">
        <input
          className="input input-primary p-4  outline-transparent outline-0 w-72 rounded-lg text-gray-900 bg-gray-200"
          placeholder="Enter the medicine"
          onChange={handleChange}
          value={value}
        />

        <button
          className="bg-indigo-600 ml-1 w-14 flex justify-center rounded-lg ring ring-indigo-300 "
          onClick={handleSubmit}
        >
          <SearchIcon/>
        </button>
      </div>

      {suggestions.length > 0 && (
        <ul className="z-10 bg-white border border-gray-300 rounded-md shadow-lg w-1/3  mx-auto ">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className=" p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}

      {medicineData && (
        <div className=" border-2 my-7 w-1/2 justify-center flex flex-col mx-auto p-4 bg-slate-800 shadow-md shadow-white ">
          <div className="text-center font-serif font-medium text-2xl text-gray-200 my-3">
            <h2>Information about {value}:</h2>
          </div>
          <div className="text-white ">
            <p className="my-3 bg-teal-200 text-teal-800">
              <span className="font-extrabold ">Purpose: </span>
              {medicineData.purpose}
            </p>
            <p className="my-3 bg-yellow-200 text-yellow-800">
              <span className="font-extrabold">Precautions: </span>
              {medicineData.general_precautions}
            </p>
            <p className="my-3 text-green-800 bg-green-200">
              <span className="font-extrabold">Usage: </span>
              {medicineData.indications}
            </p>
            <p className="my-3 bg-orange-200 text-orange-800">
              <span className="font-extrabold ">Reactions: </span>
              {medicineData.adverse_reactions}
            </p>
            <p className="my-3 text-purple-800 bg-purple-200">
              <span className="font-extrabold">Ingredient: </span>
              {medicineData.active_ingredient}
            </p>
            <p className="my-3 text-red-600 bg-red-200">
              <span className="font-extrabold ">Warnings: </span>
              {medicineData.warnings}
            </p>
          </div>
        </div>
      )}
    </>
  );
};


export default Info;
