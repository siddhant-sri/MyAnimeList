import React, { useEffect, useState } from "react";
import EditAnime from "./EditAnime";

const ListAnime = ({ newList }) => {
  console.log("newList", newList);
  const [animeList, setAnimeList] = useState(newList);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    getAnime(query);
  };
  console.log("animeList", animeList);

  // delete anime
  const deleteAnime = async (id) => {
    try {
      const deleteAnime = await fetch(`http://localhost:5000/anime/${id}`, {
        method: "DELETE",
      });

      console.log(deleteAnime);
      setAnimeList(animeList.filter((anime) => anime.anime_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getAnime = async (query = "") => {
    try {
      const url = query
        ? `http://localhost:5000/anime/${query}`
        : "http://localhost:5000/anime";
      const response = await fetch(url);
      const jsonData = await response.json();

      if (query) {
        setAnimeList([jsonData]); // Wrap the single result in an array for consistency
      } else {
        setAnimeList(jsonData);
      }
      console.log(jsonData);
      setAnimeList(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getAnime();
    // setAnimeList(newList);
  }, [newList]);

  console.log(animeList);

  return (
    <>
      <div className="my-3">
        <input
          type="text"
          className="form-control"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search Anime"
        />
      </div>

      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th scope="col">Sr No.</th>
            <th scope="col">Anime Name</th>
            <th scope="col">Description</th>
            <th scope="col">Popularity</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {animeList.map((anime, index) => (
            <tr key={anime.anime_id}>
              <td>{index + 1}</td>
              <td>{anime.anime_name}</td>
              <td>{anime.description}</td>
              <td>{anime.popularity}</td>
              <td>
                <EditAnime anime={anime} getAnime={getAnime} />
              </td>
              <td>
                <button
                  className=" btn btn-danger"
                  onClick={() => deleteAnime(anime.anime_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListAnime;
