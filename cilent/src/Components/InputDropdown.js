import React, { useState } from "react";

const InputDropdown = ({ getSelecetedOption }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    console.log("clg :", e.target.value);
    getSelecetedOption(e.target.value);
  };

  return (
    <>
      <select
        className="form-control mx-1"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="" disabled>
          Select Popularity Rating
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
};

export default InputDropdown;
