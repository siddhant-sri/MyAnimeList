import React, { useState } from "react";
import InputAnime from "./InputAnime";
import ListAnime from "./ListAnime";
import NavBar from "./NavBar";

const Main = ({ userData }) => {
  const [newList, setNewList] = useState([]);

  const fetchAnimeList = async () => {
    const response = await fetch("http://localhost:5000/anime");
    const json = await response.json();
    console.log("getanime", json);
    setNewList(json);
  };

  console.log("object", newList);
  return (
    <div>
      <NavBar userData={userData} />
      <InputAnime fetchAnimeList={fetchAnimeList} />
      <ListAnime newList={newList} />
    </div>
  );
};

export default Main;
