import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

function Bars({ children }) {
    return (
        <>
        <Nav/>
        <main data-testid="main-content">{children}</main>
        <Footer/>
        </>
    )
};

export default Bars;
