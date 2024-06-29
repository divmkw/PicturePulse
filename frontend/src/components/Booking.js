/* --------------------------------- Imports -------------------------------- */

// [Import react components]
import React from "react";

// [Import local folders/files]
// * Components
import { Navbar } from "../index";
// * Homepage Components
import BookingPage  from "./booking_components/BookingPage";

/* ------------------------------ Main function ----------------------------- */

const Home = () => {
    return (
        <>
            <Navbar />
            <BookingPage />
        </>
    );
};

export default Home;
