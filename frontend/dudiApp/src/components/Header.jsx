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
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Use Cases</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                            <button>Request a quote</button>
                        </ul>
                    </div>
                    <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
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
