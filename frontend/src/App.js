/* --------------------------------- Imports -------------------------------- */

// [Import react components] 
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminActions, userActions } from "./store";

// [Import local folders/files]
// * Components
import { Home, Movies, Auth, Admin, Booking, AddMovie, NotFound, AddMoviePopup, TicketBookedPopup, CancelTicket } from "./components/index";
// * Profiles 
import AdminProfile from "./profile/AdminProfile";
import UserProfile from "./profile/UserProfile";
// * Stylesheet
import './App.scss'

/* ------------------------------ Main function ----------------------------- */

function App() {

  const dispatch = useDispatch();
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  // console.log("isAdminLoggedIn", isAdminLoggedIn);
  // console.log("isUserLoggedIn", isUserLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(userActions.login());
    } else if (localStorage.getItem("adminId")) {
      dispatch(adminActions.login());
    }
  }, [dispatch]);

  return (
    <div >
      {/* Main Pages sections */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
        {!isUserLoggedIn && !isAdminLoggedIn && (
          <>
            {" "}
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Auth />} />
          </>
        )}
        {isUserLoggedIn && !isAdminLoggedIn && (
          <>
            {" "}
            <Route path="/user" element={<UserProfile />} />
            <Route path="/booking/:id" element={<Booking />} />
            <Route path="/ticket-booked" element={<TicketBookedPopup />} />
            <Route path="/ticket-cancel" element={<CancelTicket />} />
          </>
        )}
        {isAdminLoggedIn && !isUserLoggedIn && (
          <>
            {" "}
            <Route path="/add" element={<AddMovie />} />
            <Route path="/admin" element={<AdminProfile />} />
            <Route path="/movie-created" element={<AddMoviePopup />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
