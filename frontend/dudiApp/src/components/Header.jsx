// import React, { useState } from "react";
// import "./Header.css";

// const Header = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <>
//             <div className="header">
//                 <div className="container">

//                     <a href="#">
//                     <div className="logo">
//                         <img src="/src/img/ab9f7f8cd2337a044ca2d1bb5bc7926e.jpg" alt="Logo" />
//                     </div>
//                     </a>
//                     <div className={`nav ${menuOpen ? "open" : ""}`}>
//                         <ul>
//                             <li>
//                                 <a href="">About Us</a>
//                             </li>
//                             <li>
//                                 <a href="#services">Services</a>
//                             </li>
//                             <li>
//                                 <a href="#case">Use Cases</a>
//                             </li>
//                             <li>
//                                 <a href="#">Pricing</a>
//                             </li>
//                             <li>
//                                 <a href="#">Blog</a>
//                             </li>
//                             <button>Request a quote</button>
//                         </ul>
//                     </div>
//                     <button className="menu-btn btn btn-primary" onClick={() => setMenuOpen(!menuOpen)}>
//                         {menuOpen ? "✖" : "☰"}
//                     </button>
//                 </div>
//             </div>

//             {/* Sidebar Overlay */}
//             {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
//         </>
//     );
// };

// export default Header;



import React, { useState } from "react";
import "./Header.css";
import LanguageSwitcher from "./LanguageSwitcher";
 
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState(""); // State để theo dõi mục đang chọn

    const handleMenuClick = (menuItem) => {
        setActiveMenuItem(menuItem); // Cập nhật state khi click vào mục menu
        setMenuOpen(false); // Đóng menu trên mobile sau khi chọn
    };

    return (
        <>
            <div className="header">
                <div className="container">
                    <a href="#">
                        <div className="logo">
                            <img src="/src/img/ab9f7f8cd2337a044ca2d1bb5bc7926e.jpg" alt="Logo" />
                        </div>
                    </a>
                    <div className={`nav ${menuOpen ? "open" : ""}`}>
                        <ul>
                            <li>
                                <a 
                                    href="#" 
                                    className={activeMenuItem === "about" ? "active" : ""} 
                                    onClick={() => handleMenuClick("about")}
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#services" 
                                    className={activeMenuItem === "services" ? "active" : ""} 
                                    onClick={() => handleMenuClick("services")}
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#case" 
                                    className={activeMenuItem === "case" ? "active" : ""} 
                                    onClick={() => handleMenuClick("case")}
                                >
                                    Use Cases
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#us" 
                                    className={activeMenuItem === "pricing" ? "active" : ""} 
                                    onClick={() => handleMenuClick("pricing")}
                                >
                                    Contact US
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    className={activeMenuItem === "blog" ? "active" : ""} 
                                    onClick={() => handleMenuClick("blog")}
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <LanguageSwitcher/>
                            </li>
                            {/* <button>Request a quote</button> */}
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
