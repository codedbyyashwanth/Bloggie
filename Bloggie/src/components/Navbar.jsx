import { useState } from "react";
import { BiSearchAlt, BiMenu, BiX } from "react-icons/bi"
import logo from "../assets/logo.png"
import { NavLink } from "react-router-dom"

const Navbar = () => {
        const [navOpen, setNavOpen] = useState(false);
        const [searchData, setSearchData] = useState("");
        const [searchSec, setSearchSec] = useState(false);

        const showSearchSec = () => {
                setSearchSec(!searchSec);
        }
        
        return (
                <>
                        <div className="closing-bg"  style={{ display : searchSec ? "block" : "none" }} onClick={showSearchSec}></div>
                        <div className="search-section" style={{ display : searchSec ? "block" : "none" }} >
                                <div className="container"> 
                                        <div className="input-container">
                                                <input type="text" placeholder="Search" value={searchData} onChange={ (e) => setSearchData(e.target.value) } />
                                                <BiX className="icon" onClick={() => setSearchData("")}/>
                                        </div>
                                        <div className="search-data-container">
                                                <div className="card-container">
                                                        <div className="item">
                                                                <div className="img-container">
                                                                        <img src="https://reiro-dark.fueko.net/content/images/2022/10/photo-1434494878577-86c23bcb06b9.jpeg" alt="" />
                                                                </div>
                                                                <div className="text-content">
                                                                        <h3>A healthy outside starts from the inside</h3>
                                                                        <p>Written by Aman Dattarwal</p>
                                                                </div>
                                                        </div>
                                                        <div className="item">
                                                                <div className="img-container">
                                                                        <img src="https://reiro-dark.fueko.net/content/images/2022/10/photo-1434494878577-86c23bcb06b9.jpeg" alt="" />
                                                                </div>
                                                                <div className="text-content">
                                                                        <h3>A healthy outside starts from the inside</h3>
                                                                        <p>Written by Aman Dattarwal</p>
                                                                </div>
                                                        </div>
                                                        <div className="item">
                                                                <div className="img-container">
                                                                        <img src="https://reiro-dark.fueko.net/content/images/2022/10/photo-1434494878577-86c23bcb06b9.jpeg" alt="" />
                                                                </div>
                                                                <div className="text-content">
                                                                        <h3>A healthy outside starts from the inside</h3>
                                                                        <p>Written by Aman Dattarwal</p>
                                                                </div>
                                                        </div>
                                                        <div className="item">
                                                                <div className="img-container">
                                                                        <img src="https://reiro-dark.fueko.net/content/images/2022/10/photo-1434494878577-86c23bcb06b9.jpeg" alt="" />
                                                                </div>
                                                                <div className="text-content">
                                                                        <h3>A healthy outside starts from the inside</h3>
                                                                        <p>Written by Aman Dattarwal</p>
                                                                </div>
                                                        </div>
                                                        <div className="item">
                                                                <div className="img-container">
                                                                        <img src="https://reiro-dark.fueko.net/content/images/2022/10/photo-1434494878577-86c23bcb06b9.jpeg" alt="" />
                                                                </div>
                                                                <div className="text-content">
                                                                        <h3>A healthy outside starts from the inside</h3>
                                                                        <p>Written by Aman Dattarwal</p>
                                                                </div>
                                                        </div>
                                                        <div className="item">
                                                                <div className="img-container">
                                                                        <img src="https://reiro-dark.fueko.net/content/images/2022/10/photo-1434494878577-86c23bcb06b9.jpeg" alt="" />
                                                                </div>
                                                                <div className="text-content">
                                                                        <h3>A healthy outside starts from the inside</h3>
                                                                        <p>Written by Aman Dattarwal</p>
                                                                </div>
                                                        </div>
                                                        <div className="item">
                                                                <div className="img-container">
                                                                        <img src="https://reiro-dark.fueko.net/content/images/2022/10/photo-1434494878577-86c23bcb06b9.jpeg" alt="" />
                                                                </div>
                                                                <div className="text-content">
                                                                        <h3>A healthy outside starts from the inside</h3>
                                                                        <p>Written by Aman Dattarwal</p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <section className="nav-section">
                                <div className="logo-container">
                                        <img src={logo} alt="Bloggie Logo" />
                                </div>
                                <div className="nav-container">
                                        <NavLink style={({isActive}) => ({ color : isActive ? "#2962ff" : "#232323"})} to="/" className="nav-item">Home</NavLink>
                                        <NavLink style={({isActive}) => ({ color : isActive ? "#2962ff" : "#232323"})} to="/categories" className="nav-item">Categories</NavLink>
                                        <NavLink style={({isActive}) => ({ color : isActive ? "#2962ff" : "#232323"})} to="/posts" className="nav-item">Posts</NavLink>
                                        <NavLink style={({isActive}) => ({ color : isActive ? "#2962ff" : "#232323"})} to="/authors" className="nav-item">Authors</NavLink>
                                        {/* <NavLink style={({isActive}) => ({ color : isActive ? "#2962ff" : "#232323"})} to="/contact" className="nav-item">Contact</NavLink> */}
                                </div>
                                <div className="search-container">
                                        <button className="search-field" onClick={showSearchSec}>
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
                                                <NavLink style={({isActive}) => ({ color : isActive ? "#2962ff" : "#232323"})} to="/" className="nav-item">Home</NavLink>
                                                <NavLink style={({isActive}) => ({ color : isActive ? "#2962ff" : "#232323"})} to="/categories" className="nav-item">Categories</NavLink>
                                                <NavLink style={({isActive}) => ({ color : isActive ? "#2962ff" : "#232323"})} to="/posts" className="nav-item">Posts</NavLink>
                                                <NavLink style={({isActive}) => ({ color : isActive ? "#2962ff" : "#232323"})} to="/authors" className="nav-item">Authors</NavLink>
                                                {/* <NavLink style={({isActive}) => ({ color : isActive ? "#2962ff" : "#232323"})} to="/contact" className="nav-item">Contact</NavLink> */}
                                        </div>
                                </div>
                                <div className="menu-section">
                                        <div className="search-container">
                                                <button className="search-field"  onClick={showSearchSec}>
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