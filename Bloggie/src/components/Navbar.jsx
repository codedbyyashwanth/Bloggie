import { useState } from "react";
import { BiSearchAlt, BiMenu, BiX } from "react-icons/bi"
import logo from "../assets/logo.png"
import { NavLink, Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { gql, GraphQLClient } from "graphql-request";
import { useQuery } from "react-query";
const API_KEY = "https://api-ap-south-1.hygraph.com/v2/clduo82jb0d1f01rt58iceeod/master";
const GraphCMS = new GraphQLClient(API_KEY);


const Navbar = () => {
        const [navOpen, setNavOpen] = useState(false);
        const [searchData, setSearchData] = useState("");
        const [searchSec, setSearchSec] = useState(false);
        const navigate = useNavigate();

        const GQLData = gql`
                {
                        posts(first: 10, where: {title_contains: \"${searchData}\"}) {
                                title
                                slug
                                imageurl
                                author {
                                        name
                                        id
                                }
                        }
                }
        `;

        const fetchData = async () => {
                const {posts} = await GraphCMS.request(GQLData);
                return posts;
        }

        const { data, status } = useQuery("posts-search-data", fetchData, {keepPreviousData: false});

        const showSearchSec = () => {
                setSearchSec(!searchSec);
        }
        
        if (status == "loading")
                return <Loading />

        if (status == "error")
                return <h1>Error</h1>

        
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
                                                        {
                                                                data.filter(values => values.title.toLowerCase().includes(searchData.toLowerCase()) && searchData.length > 3).map((items, count) => (
                                                                        <div className="item" key={count}>
                                                                                <a href={`/posts/${items.slug}`}>
                                                                                        <div className="img-container">
                                                                                                <img src={items.imageurl} alt="" />
                                                                                        </div> 
                                                                                </a>
                                                                                <div className="text-content">
                                                                                        <h3><a href={`/posts/${items.slug}`}>{items.title}</a></h3>
                                                                                        <p>Written by <Link to={`/authors/${items.author.id}`}>{items.author.name}</Link></p>
                                                                                </div>
                                                                        </div>
                                                                ))
                                                        }
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