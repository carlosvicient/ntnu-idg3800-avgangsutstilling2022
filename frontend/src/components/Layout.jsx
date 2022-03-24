import React from "react";

// Components
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;