import React, { useState } from "react";
import "./Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="header">
                <div className="container">

                    <div className="logo">
                        <img src="/src/img/ab9f7f8cd2337a044ca2d1bb5bc7926e.jpg" alt="Logo" />
                    </div>
                    <div className={`nav ${menuOpen ? "open" : ""}`}>
                        <ul>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Use Cases</a>
                            </li>
                            <li>
                                <a href="#">Pricing</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <button>Request a quote</button>
                        </ul>
                    </div>
                    <button className="menu-btn btn btn-primary" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>

            {/* Sidebar Overlay */}
            {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
        </>
    );
};

export default Header;
