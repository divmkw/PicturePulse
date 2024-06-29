/* --------------------------------- Imports -------------------------------- */

// [Import react components]
import React from "react";

// [Import local folders/files]
// * Components
import { Navbar, Footer } from "../index";
// * Homepage Components
import { HomeHerobanner, LatestRelease, CommingSoon } from "./home_component/index";

/* ------------------------------ Main function ----------------------------- */

const Home = () => {
    return (
        <>
            <Navbar />
            <HomeHerobanner />
            <LatestRelease />
            <CommingSoon />
            <Footer />
        </>
    );
};

export default Home;
