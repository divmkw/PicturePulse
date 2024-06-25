/* --------------------------------- Imports -------------------------------- */

// [Import react components]
import React from "react";
import { useLocation } from "react-router-dom";

// [Import local folders/files]
// * stylesheets
import "./Ticket.scss";
// * JSON
// import moviesJSON from "../../data/moviesapi.json";
import moviesJSON from "../../data/moviesDate.json";
// * assets
import assets from "../../assets/index";

/* ------------------------------ Main function ----------------------------- */

const Ticket = () => {
  // * Handle useLocation function (to retrieve data in booking page) ----------
  const location = useLocation();
  // console.log(location.state.id);

  return (
    <div className="ticket_cont section_padding">
      {moviesJSON.movies
        .filter((value) => value._id === location.state.id)
        .map(
          ({
            _id,
            backdrop_path,
            title,
            overview,
            genres,
            runtime,
            rating,
            trailer,
          }) => {
            return (
              <div className="ticket" key={_id}>
                <div className="holes-top"></div>

                <div className="title">
                  <p className="cinema">PICTURE PULSE PRESENTS</p>
                  <p className="movie-title">{title}</p>
                </div>

                <div className="poster">
                  <img src={backdrop_path} alt="poster" />
                </div>

                <div className="info">
                  <table>
                    <tr>
                      <th>DATE</th>
                      {/* <th>ROW</th> */}
                      <th>TIME</th>
                    </tr>
                    <tr>
                      <td >13/6</td>
                      <td >19:30</td>
                      {/* <td className="bigger">H</td> */}
                    </tr>
                  </table>
                  <table>
                    <tr>
                      <th>SEAT</th>
                      <th>PRICE</th>
                      {/* <th>SEAT</th> */}
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>$12.00</td>
                      {/* <td>2</td> */}
                    </tr>
                  </table>
                </div>

                <div className="holes-lower"></div>

                <div className="bottom">
                  <div className="nav_logo">
                    <img src={assets.MainLogo} alt="navlogo" />
                  </div>
                </div>
              </div>
            );
          }
        )}
    </div>
  );
};

export default Ticket;
