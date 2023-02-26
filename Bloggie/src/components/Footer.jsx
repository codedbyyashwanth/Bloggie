import Logo from "../assets/logo.png";

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
                                        Nullam auctor nisi non tortor porta, id dapibus
                                        lectus rhoncus. Vivamus lobortis posuere
                                        enim finibus sodales. 
                                        </p>
                                </div>
                        </div>
                        <div className="content">
                                <h4>Sitemap</h4>
                                <ul>
                                        <li><a href="">Home</a></li>
                                        <li><a href="">Categories</a></li>
                                        <li><a href="">Posts</a></li>
                                        <li><a href="">Authors</a></li>
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