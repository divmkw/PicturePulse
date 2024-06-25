/* --------------------------------- Imports -------------------------------- */

// [Import react components]
import React, { useEffect, useState } from "react";

// [Import packages]

// [Import local folders/files]
// * stylesheets
import "./AdminProfile.scss";
// * Components
import { Navbar } from "../components/index";
// * data
import { getAdminById } from "../api-helpers/api-helpers";


/* ------------------------------ Main function ----------------------------- */

const AdminProfile = () => {

  const [admin, setAdmin] = useState();
  useEffect(() => {
    getAdminById()
      .then((res) => setAdmin(res.admin))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="admin_profile">
        <Navbar />
        <>


          {admin && (
            <>
              <section className="admin_details">
                <h1>Admin Details</h1>
                <p><strong>Email:</strong> {admin.email}</p>
              </section>
            </>
          )}

          {admin && admin.addedMovies.length > 0 && (
            <>
              <div className="admin_movie_list">
                <h1>
                  Added Movies
                </h1>
                {admin.addedMovies.map((movie, index) => (
                  //  Movie: {movie.title}
                  <>
                    <li className="movies_lists">
                      <div className="movie-area">
                        <div className="movie-row">
                          <img src={movie.backdrop_path} alt="Movie Photo" className="movie-photo" />
                          <span className="movie-title">{movie.title}</span>
                        </div>
                      </div>
                    </li>
                  </>
                ))}
              </div>

            </>
          )}





        </>
      </div>
    </>
  );
};

export default AdminProfile;
