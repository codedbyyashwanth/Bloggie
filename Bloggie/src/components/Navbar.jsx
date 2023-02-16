import { useState } from "react";
import { BiSearchAlt, BiMenu, BiX } from "react-icons/bi"
import logo from "../assets/logo.png"

const Navbar = () => {
        const [navOpen, setNavOpen] = useState(false);
        
        return (
                <>
                        <section className="nav-section">
                                <div className="logo-container">
                                        <img src={logo} alt="Bloggie Logo" />
                                </div>
                                <div className="nav-container">
                                        <a href="#" className="nav-item">Home</a>
                                        <a href="#" className="nav-item">Categories</a>
                                        <a href="#" className="nav-item">Posts</a>
                                        <a href="#" className="nav-item">Authors</a>
                                        <a href="#" className="nav-item">Contact</a>
                                </div>
                                <div className="search-container">
                                        <button className="search-field">
                                                <BiSearchAlt className="search-icon" />
                                                <span>Search</span>
                                        </button>
                                </div>
                        </section>
                        <section className="mobile-nav-section">
                                <div className="logo-container">
                                         <img src={logo} alt="Bloggie Logo" />
                                </div>
                                <div className="mobile-navbar" id={navOpen ? "open" : "close"}>
                                        <div className="close-container">
                                                <BiX 
                                                        className="close-icon"
                                                        onClick={
                                                                () => {
                                                                        setNavOpen(!navOpen);
                                                                }
                                                        } 
                                                />
                                        </div>
                                        <div className="nav-container">
                                                <a href="#" className="nav-item">Home</a>
                                                <a href="#" className="nav-item">Categories</a>
                                                <a href="#" className="nav-item">Posts</a>
                                                <a href="#" className="nav-item">Authors</a>
                                                <a href="#" className="nav-item">Contact</a>
                                        </div>
                                </div>
                                <div className="menu-section">
                                        <div className="search-container">
                                                <button className="search-field">
                                                        <BiSearchAlt className="search-icon" />
                                                        <span>Search</span>
                                                </button>
                                        </div>
                                        <div className="menu-container">
                                                <BiMenu 
                                                        className="menu-icon" 
                                                        onClick={
                                                                () => {
                                                                        setNavOpen(!navOpen);
                                                                }
                                                        } 
                                                />
                                        </div>
                                </div>
                        </section>
                </>
        );
}

export default Navbar