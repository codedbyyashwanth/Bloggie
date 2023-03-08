import { Link } from "react-router-dom";

const HeroSection = ({ data }) => {

        return (
                <section className="hero-section">
                        <div className="container">
                                <div className="card">
                                        <Link to={`/posts/${data[2].slug}`}>
                                        <img src={data[2].imageurl} alt="" />
                                        </Link>
                                        <div className="overlay"></div>
                                        <div className="text-container">
                                                <h1 className="title">
                                                <Link to={`/posts/${data[2].slug}`}>{data[2].title}</Link>
                                                </h1>
                                                <div className="profile-section">
                                                        <div className="img-container">
                                                                <Link to={`/authors/${data[2].author.id}`}><img src={data[2].author.profile} alt="" /></Link>
                                                        </div>
                                                        <Link to={`/authors/${data[2].author.id}`}>
                                                        <div className="text-content">
                                                                <h5 className="profile-name">{data[2].author.name}</h5>
                                                                <p className="bio">{data[2].author.tag}</p>
                                                        </div>
                                                        </Link>
                                                </div>
                                        </div>
                                </div>
                                <div className="card">
                                <Link to={`/posts/${data[1].slug}`}>
                                        <img src={data[1].imageurl} alt="" />
                                        </Link>
                                        <div className="overlay"></div>
                                        <div className="text-container">
                                                {/* <h1 className="title">
                                                <a href="">Will Humans be able to live in Mars in the future?</a>
                                                </h1> */}
                                                <div className="profile-section">
                                                        <div className="img-container">
                                                                <Link to={`/authors/${data[1].author.id}`}><img src={data[1].author.profile} alt="" /></Link>
                                                        </div>
                                                        <Link to={`/authors/${data[1].author.id}`}>
                                                        <div className="text-content">
                                                                <h5 className="profile-name">{data[1].author.name}</h5>
                                                                <p className="bio">{data[1].author.tag}</p>
                                                        </div>
                                                        </Link>
                                                </div>
                                        </div>
                                </div>
                                <div className="card">
                                <Link to={`/posts/${data[0].slug}`}>
                                        <img src={data[0].imageurl} alt="" />
                                        </Link>
                                        <div className="overlay"></div>
                                        <div className="text-container">
                                                {/* <h1 className="title">
                                                <a href="">Will Humans be able to live in Mars in the future?</a>
                                                </h1> */}
                                                <div className="profile-section">
                                                        <div className="img-container">
                                                                <Link to={`/authors/${data[0].author.id}`}><img src={data[0].author.profile} alt="" /></Link>
                                                        </div>
                                                        <Link to={`/authors/${data[0].author.id}`}>
                                                        <div className="text-content">
                                                                <h5 className="profile-name">{data[0].author.name}</h5>
                                                                <p className="bio">{data[0].author.tag}</p>
                                                        </div>
                                                        </Link>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>
        );
}

export default HeroSection;