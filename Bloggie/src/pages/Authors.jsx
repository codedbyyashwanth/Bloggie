import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Authors = () => {
        const navigate = useNavigate();

        return (
                <>
                        <header>
                                <Navbar />
                        </header>
                        <main className="authors-section">
                                <div className="authors-header">
                                        <div className="container">
                                                <div className="img-container">
                                                        <img src="https://reiro.fueko.net/content/images/size/w300/2022/10/photo-1655721529468-d0d81b2dc489.jpeg" alt="" />
                                                </div>
                                                <div className="text-content">
                                                        <h2>Authors</h2>
                                                        <p>
                                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere voluptates tempore harum, corrupti blanditiis quibusdam tenetur alias, suscipit est voluptatibus in nostrum perspiciatis atque distinctio eum nesciunt adipisci laborum iste!
                                                        </p>
                                                </div>
                                        </div>
                                </div>
                                <div className="authors-account-section">
                                        <div className="container">
                                                <div className="item">
                                                        <div className="img-container" onClick={ () => navigate("/authors/Breana Flatley") }>
                                                                <img src="https://reiro.fueko.net/content/images/size/w600/2022/10/andrea-ba-bMAbzit4DYk-unsplash.jpg" alt="" />
                                                        </div>
                                                        <div className="text-content">
                                                                <h2 className="name">Breana Flatley</h2>
                                                                <p className="bio">Software Developer</p>
                                                        </div>
                                                </div>
                                                <div className="item">
                                                        <div className="img-container">
                                                                <img src="https://reiro.fueko.net/content/images/size/w600/2022/10/andrea-ba-bMAbzit4DYk-unsplash.jpg" alt="" />
                                                        </div>
                                                        <div className="text-content">
                                                                <h2 className="name">Breana Flatley</h2>
                                                                <p className="bio">Software Developer</p>
                                                        </div>
                                                </div>
                                                <div className="item">
                                                        <div className="img-container">
                                                                <img src="https://reiro.fueko.net/content/images/size/w600/2022/10/andrea-ba-bMAbzit4DYk-unsplash.jpg" alt="" />
                                                        </div>
                                                        <div className="text-content">
                                                                <h2 className="name">Breana Flatley</h2>
                                                                <p className="bio">Software Developer</p>
                                                        </div>
                                                </div>
                                                <div className="item">
                                                        <div className="img-container">
                                                                <img src="https://reiro.fueko.net/content/images/size/w600/2022/10/andrea-ba-bMAbzit4DYk-unsplash.jpg" alt="" />
                                                        </div>
                                                        <div className="text-content">
                                                                <h2 className="name">Breana Flatley</h2>
                                                                <p className="bio">Software Developer</p>
                                                        </div>
                                                </div>
                                                <div className="item">
                                                        <div className="img-container">
                                                                <img src="https://reiro.fueko.net/content/images/size/w600/2022/10/andrea-ba-bMAbzit4DYk-unsplash.jpg" alt="" />
                                                        </div>
                                                        <div className="text-content">
                                                                <h2 className="name">Breana Flatley</h2>
                                                                <p className="bio">Software Developer</p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </main>
                        <Footer />
                </>
        );
}

export default Authors;