/* --------------------------------- Imports -------------------------------- */

// [Import react components]
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// [Import packages]
// * Material UI
import { FormLabel, TextField, } from "@mui/material";
import { Box } from "@mui/system";

// [Import local folders/files]
// * stylesheets
import './BookingPage.scss'
// * Data
import { getMovieDetails, newBooking } from "../../../api-helpers/api-helpers";

/* ------------------------------ Main function ----------------------------- */

const Booking = () => {

    
  const navigate = useNavigate();


    const [movie, setMovie] = useState();
    const [inputs, setInputs] = useState({ seatNumber: "", date: "" });
    const id = useParams().id;
    // console.log(id);

    useEffect(() => {
        getMovieDetails(id)
            .then((res) => setMovie(res.movie))
            .catch((err) => console.log(err));
    }, [id]);
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputs);
        newBooking({ ...inputs, movie: movie._id })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
                // alert("confirm")
    navigate("/ticket-booked");
    };

    return (
        <div >
            {movie && (
                <div className="booking_page">

                    {/* <p>Book TIckets Of Movie: {movie.title}</p> */}

                    <section className="movie-details">
                        <h2>Movie Details</h2>
                        <img src={movie.backdrop_path} alt="Movie Poster" className="movie-poster" />
                        <div className="movie-info">
                            <p><strong>Title:</strong>{movie.title}</p>
                            <p><strong>Description:</strong>{movie.description}</p>
                            <p><strong>Actors:</strong>{movie.actors.map((actor) => " " + actor + " ")}</p>
                            <p><strong>Genres:</strong> {movie.genres}</p>
                            <p><strong>Runtime:</strong> {movie.runtime}</p>
                            <p><strong>Rating:</strong> {movie.rating}</p>
                            <p><strong>IMDb Rating:</strong> {movie.IMDb_rating}</p>
                            <button>
                                <a href={movie.trailer} target="_blank" rel="noopener noreferrer">Watch Trailer</a>
                            </button>
                        </div>
                    </section>

                    <form onSubmit={handleSubmit}>
                        <Box className="form_cont">

                            <div className="cont">
                                <FormLabel className="label">Seat Number</FormLabel>
                                <TextField
                                    name="seatNumber"
                                    value={inputs.seatNumber}
                                    onChange={handleChange}
                                    type={"number"}
                                    margin="normal"
                                    variant="standard"
                                    placeholder="Seat Number"
                                    InputProps={{ disableUnderline: true }}
                                />
                            </div>

                            <div className="cont">
                                <FormLabel className="label">Booking Date</FormLabel>
                                <TextField
                                    name="date"
                                    type={"date"}
                                    margin="normal"
                                    variant="standard"
                                    value={inputs.date}
                                    onChange={handleChange}
                                    InputProps={{ disableUnderline: true }}
                                />
                            </div>

                            <button type="submit" className="bottom_btn">
                                Book Now
                            </button>
                        </Box>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Booking;
