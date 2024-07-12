import React, { useEffect, useState } from "react";
import InputDropdown from "./InputDropdown";

const InputAnime = ({ fetchAnimeList }) => {
  const [animeName, setAnimeName] = useState("");
  const [description, setDescription] = useState("");
  const [popularity, setPopularity] = useState("");

  const handleOnChange = (e) => {
    let name = e.target.name;

    if (name === "animeName") {
      setAnimeName(e.target.value);
    } else if (name === "description") {
      setDescription(e.target.value);
    }
    // setAnimeName(e.target.value);`
    // setDescription(e.target.value);
    // setPopularity(e.target.value);
  };

  function getSelecetedOption(data) {
    setPopularity(data);
    console.log("setPop", popularity);
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { animeName, description, popularity };
      const response = await fetch("http://localhost:5000/anime", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      fetchAnimeList();
      //   window.location = "/main";
      setAnimeName("");
      setDescription("");
      setPopularity("");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-3">My Anime List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control mx-1"
          value={animeName}
          name="animeName"
          onChange={handleOnChange}
          placeholder="Anime name"
        />
        <input
          type="text"
          className="form-control mx-1"
          value={description}
          name="description"
          onChange={handleOnChange}
          placeholder="Description"
        />
        {/* <input type="number" className="form-control mx-1" value={popularity} onChange={e => setPopularity(e.target.value)} placeholder="Popularity Rating"/> */}

        <InputDropdown getSelecetedOption={getSelecetedOption} />

        {/* <select className="form-control mx-1" value={popularity} onChange={(e) => setPopularity(e.target.value)}>
                <option value="" disabled>
                    Select Popularity Rating
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="3">4</option>
                <option value="3">5</option>
            </select> */}
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
};

export default InputAnime;
