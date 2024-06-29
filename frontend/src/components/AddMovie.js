/* --------------------------------- Imports -------------------------------- */

// [Import react components]
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// [Import packages]
// * Material UI
import {
  Button,
  // Checkbox,
  FormLabel,
  TextField,
} from "@mui/material";

// [Import local folders/files]
// * stylesheets
import "./AddMovie.scss";
// * Components
import { Navbar } from "../index";
// * Components
// import { Popup } from "./popup/Popup";
// * data
import { addMovie } from "../../api-helpers/api-helpers";

/* ------------------------------ Main function ----------------------------- */


const AddMovie = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    // posterUrl: "",
    releaseDate: "",
    featured: false,
  });

  // Show popup onsubmit 

  // const [actors, setActors] = useState([]);
  // const [actor, setActor] = useState("");
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputs, actors);
    // addMovie({ ...inputs, actors })
    addMovie({ ...inputs })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // alert("confirm")
    navigate("/movie-created");
  };


  return (
    <>
      <div className="addmovies">
        <Navbar />
        <form onSubmit={handleSubmit}>
          <div className="form_cont">

            <h1>Add New Movie</h1>

            <div className="input_cont">
              <FormLabel className="label">Title</FormLabel>
              <TextField
                value={inputs.title}
                onChange={handleChange}
                name="title"
                variant="standard"
                margin="normal"
                InputProps={{ disableUnderline: true }}
              />
            </div>

            <div className="input_cont">
              <FormLabel className="label">Description</FormLabel>
              <TextField
                value={inputs.description}
                onChange={handleChange}
                name="description"
                variant="standard"
                margin="normal"
                InputProps={{ disableUnderline: true }}
              />
            </div>

            {/* <div className="input_cont">
            <FormLabel className="label">Actor</FormLabel>
            <Box display={"flex"}>
              <TextField
                value={actor}
                name="actor"
                onChange={(e) => setActor(e.target.value)}
                variant="standard"
                margin="normal"
                InputProps={{ disableUnderline: true }}
              />
              <Button
                onClick={() => {
                  setActors([...actors, actor]);
                  setActor("");
                }}
              >
                Add
              </Button>
            </Box>
          </div> */}

            <div className="input_cont">
              <FormLabel className="label">Release Date</FormLabel>
              <TextField
                type={"date"}
                value={inputs.releaseDate}
                onChange={handleChange}
                name="releaseDate"
                variant="standard"
                margin="normal"
                InputProps={{ disableUnderline: true }}
              />
            </div>

            {/* <div className="input_cont">
            <FormLabel className="label">Poster URL</FormLabel>
            <TextField
              value={inputs.posterUrl}
              onChange={handleChange}
              name="posterUrl"
              variant="standard"
              margin="normal"
              InputProps={{ disableUnderline: true }}
            />
          </div> */}

            {/* <div className="input_cont">
            <FormLabel className="label">Backdrop Path</FormLabel>
            <TextField
              value={inputs.backdrop_path}
              onChange={handleChange}
              name="backdrop_path"
              variant="standard"
              margin="normal"
              InputProps={{ disableUnderline: true }}
            />
          </div> */}

            {/* <div className="input_cont">
            <FormLabel className="label">Genres</FormLabel>
            <TextField
              value={inputs.genres}
              onChange={handleChange}
              name="genres"
              variant="standard"
              margin="normal"
              InputProps={{ disableUnderline: true }}
            />
          </div> */}

            {/* <div className="input_cont">
            <FormLabel className="label">Runtime</FormLabel>
            <TextField
              value={inputs.runtime}
              onChange={handleChange}
              name="runtime"
              variant="standard"
              margin="normal"
              InputProps={{ disableUnderline: true }}
            />
          </div> */}

            {/* <div className="input_cont">
            <FormLabel className="label">Rating</FormLabel>
            <TextField
              value={inputs.rating}
              onChange={handleChange}
              name="rating"
              variant="standard"
              margin="normal"
              InputProps={{ disableUnderline: true }}
            />
          </div> */}

            {/* <div className="input_cont">
            <FormLabel className="label">IMDb Rating</FormLabel>
            <TextField
              value={inputs.IMDb_rating}
              onChange={handleChange}
              name="IMDb_rating"
              variant="standard"
              margin="normal"
              type="number"
              InputProps={{ disableUnderline: true }}
            />
          </div> */}

            {/* <div className="input_cont">
            <FormLabel className="label">Trailer</FormLabel>
            <TextField
              value={inputs.trailer}
              onChange={handleChange}
              name="trailer"
              variant="standard"
              margin="normal"
              InputProps={{ disableUnderline: true }}
            />
          </div> */}

            {/* <div className="input_cont checkbox_inputarea">
              <FormLabel className="label">Featured</FormLabel>
              <Checkbox
                className="checkbox"
                name="fetaured"
                checked={inputs.featured}
                onClick={(e) =>
                  setInputs((prevSate) => ({
                    ...prevSate,
                    featured: e.target.checked,
                  }))
                }
              />
            </div> */}

            <Button
              type="submit"
              variant="contained"
              className="bottom_btn"
            >
              Add New Movie
            </Button>
          </div>
        </form>
      </div >
    </>
  );
};

export default AddMovie;
