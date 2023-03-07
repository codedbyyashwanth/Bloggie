import { Link } from "react-router-dom";

const CardSection = () => {
        return (
                <div className="popular-category-section">
                        {/* <h1 className="section-title">Popular Category</h1> */}
                        <div className="container">
                                <div className="img-container">
                                        <Link to="/categories/Travel">
                                        <img src="https://reiro.fueko.net/content/images/size/w300/2022/10/photo-1557704595-ecd34dc3a4b9.jpeg" alt="" />
                                        <h4>Travel</h4>
                                        </Link>
                                </div>
                                <div className="img-container">
                                        <Link to="/categories/Food">
                                        <img src="https://reiro.fueko.net/content/images/size/w300/2022/10/photo-1611486212557-88be5ff6f941.jpeg" alt="" />
                                        <h4>Food</h4>
                                        </Link>
                                </div>
                                <div className="img-container">
                                        <Link to="/categories/Fitness">
                                        <img src="https://reiro.fueko.net/content/images/size/w300/2022/10/photo-1657299170129-858a7f31a794.jpeg" alt="" />
                                        <h4>Fitness</h4>
                                        </Link>
                                </div>
                                <div className="img-container">
                                        <Link to="/categories/Fashion">
                                        <img src="https://reiro.fueko.net/content/images/size/w300/2022/10/photo-1631679706909-1844bbd07221.jpeg" alt="" />
                                        <h4>Fashion</h4>
                                        </Link>
                                </div>
                                <div className="img-container">
                                        <Link to="/categories/Programming">
                                        <img src="https://reiro.fueko.net/content/images/size/w300/2022/10/photo-1655721529468-d0d81b2dc489.jpeg" alt="" />
                                        <h4>Programming</h4>
                                        </Link>
                                </div>
                                <div className="img-container">
                                        <Link to="/categories/Entertainment">
                                        <img src="https://reiro.fueko.net/content/images/size/w300/2022/10/vonvix-mYc0ivMNvCI-unsplash.jpg" alt="" />
                                        <h4>Entertainment</h4>
                                        </Link>
                                </div>
                        </div>
                </div>
        );
}

export default CardSection;