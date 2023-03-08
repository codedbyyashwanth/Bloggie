import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
        return (
                <footer>
                        <div className="container">
                        <div className="logo-section">
                                <div className="img-container">
                                        <img src={Logo} alt="" />
                                </div>
                                <div className="text-content">
                                        <p>
                                        Bloggie is a simple blogging website where people can share their articles of various categories around the world through our platform.
                                        </p>
                                </div>
                        </div>
                        <div className="content">
                                <h4>Sitemap</h4>
                                <ul>
                                        <li><Link to="/" >Home</Link></li>
                                        <li><Link to="/categories" >Categories</Link></li>
                                        <li><Link to="/posts" >Posts</Link></li>
                                        <li><Link to="/authors" >Authors</Link></li>
                                        {/* <li><a href="">Contact</a></li> */}
                                </ul>
                        </div>
                        <div className="content">
                                <h4>Social Links</h4>
                                <ul>
                                        <li><a href="">Instagram</a></li>
                                        <li><a href="">Facebook</a></li>
                                        <li><a href="">Twitter</a></li>
                                        {/* <li><a href="">Whatsapp</a></li> */}
                                        <li><a href="">Discord</a></li>
                                </ul>
                        </div>
                        <div className="content">
                                <h4>Personal Contact</h4>
                                <ul>
                                        <li>+34 000 0000</li>
                                        <li>example@email.com</li>
                                        <li>Bangalore, India</li>
                                </ul>
                        </div>
                        </div>
                        <hr />
                        <div className="copy-right-section">
                                <h4>© Copyright Reserved to Bloggie </h4>
                        </div>
                </footer>
        );
}

export default Footer;