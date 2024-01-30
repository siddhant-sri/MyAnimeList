import React, {useState} from "react";
const EditAnime = ({anime}) => {

    const [animeName, setAnimeName] = useState(anime.anime_name);
    const [description, setDescription] = useState(anime.description);
    const [popularity, setPopularity] = useState(anime.popularity);

    console.log("prop " , anime);

    // edit info of anime

    const updateAnime = async (e) => {
        e.preventDefault();
        try {
            const body = {animeName, description, popularity};
            const response = await fetch(`http://localhost:5000/anime/${anime.anime_id}`, {
                method : "PUT",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(body)
            });

            console.log(response);
            window.location = "/";
            
        } catch (err) {
            console.error(err.message);
        }
    }

    

    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-warning text-white" data-bs-toggle="modal" data-bs-target={`#id${anime.anime_id}`}>
            Edit
            </button>

            {/* <!-- Modal --> */}
            {
                /* 
                id = id10
                */
            }
            <div className="modal fade" id={`id${anime.anime_id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Edit Anime</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>    
                </div>
                <div className="modal-body">
                    <input type="text" className="form-control my-2" value={animeName} onChange={e => setAnimeName(e.target.value)}/>
                    <input type="text" className="form-control my-2" value={description} onChange={e => setDescription(e.target.value)}/>
                    <input type="number" className="form-control my-2" value={popularity} onChange={e => setPopularity(e.target.value)}/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary"   data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-warning" onClick={e => updateAnime(e)}>Save</button>
                </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default EditAnime;