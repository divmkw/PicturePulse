/* --------------------------------- Imports -------------------------------- */

// [Import react components]
import React, {useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

// [Import packages]
// * Material UI

// [Import local folders/files]
// * stylesheets
import "./UserProfile.scss";
// * Components
import { Navbar } from "../components/index";
// * assets
import assets from "../assets/index";
// // * User profile Components
// import { Ticket } from "./ticket/Ticket";
// * data
import {
  deleteBooking,
  getUserBooking,
  getUserDetails,
} from "../api-helpers/api-helpers";


/* ------------------------------ Main function ----------------------------- */

const UserProfile = () => {

  const navigate = useNavigate();

  const [bookings, setBookings] = useState();
  const [user, setUser] = useState();
  useEffect(() => {
    getUserBooking()
      .then((res) => setBookings(res.bookings))
      .catch((err) => console.log(err));

    getUserDetails()
      .then((res) => setUser(res.user))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    deleteBooking(id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // alert("confirm")
    navigate("/ticket-cancel");
  };

  return (
    <>
      <Navbar />

      <div className="user_profile">

        {user && (
          <>

            <section className="user_details">
              <h1>User Details</h1>
              <p><strong>Name: </strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </section>
          </>
        )}

        <div className="ticket_container">

          {bookings && (
            <>
              <h1>Bookings</h1>

              <div className="ticket_cont">

                {bookings.map((booking, index) => (
                  <>
                    {/* {console.log(booking)}
              
                <p> Movie: {booking.movie.title}</p>
                <p>Seat: {booking.seatNumber}</p>
                <p> Date: {new Date(booking.date).toDateString()}</p>
                <button onClick={() => handleDelete(booking._id)}>
                  delete
                </button> */}

                    <div className="ticket" key={booking._id}>
                      <div className="holes-top"></div>

                      <div className="title">
                        <p className="cinema">PICTURE PULSE PRESENTS</p>
                        <p className="movie-title">{booking.movie.title}</p>
                      </div>

                      <div className="poster">
                        <img src={booking.movie.backdrop_path} alt="poster" />
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

                      <div className="cancel_ticket_btn">


                        <button onClick={() => handleDelete(booking._id)}>
                          Cancel Ticket
                        </button>

                      </div>

                      <div className="bottom">
                        <div className="nav_logo">
                          <img src={assets.MainLogo} alt="navlogo" />
                        </div>
                      </div>
                    </div>

                  </>
                ))}
              </div>
            </>

          )}
        </div>

      </div>
    </>
  );
};

export default UserProfile;
