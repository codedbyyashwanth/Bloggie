

const HeroSection = ({ data }) => {

        return (
                <section className="hero-section">
                        <div className="container">
                                <div className="card">
                                        <img src={data[2].imageurl} alt="" />
                                        <div className="overlay"></div>
                                        <div className="text-container">
                                                <h1 className="title">
                                                <a href="">{data[2].title}</a>
                                                </h1>
                                                <div className="profile-section">
                                                        <div className="img-container">
                                                                <img src={data[2].author.profile} alt="" />
                                                        </div>
                                                        <div className="text-content">
                                                                <h5 className="profile-name">{data[2].author.name}</h5>
                                                                <p className="bio">{data[2].author.tag}</p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className="card">
                                        <img src={data[1].imageurl} alt="" />
                                        <div className="overlay"></div>
                                        <div className="text-container">
                                                {/* <h1 className="title">
                                                <a href="">Will Humans be able to live in Mars in the future?</a>
                                                </h1> */}
                                                <div className="profile-section">
                                                        <div className="img-container">
                                                                <img src={data[1].author.profile} alt="" />
                                                        </div>
                                                        <div className="text-content">
                                                                <h5 className="profile-name">{data[1].author.name}</h5>
                                                                <p className="bio">{data[1].author.tag}</p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className="card">
                                        <img src={data[0].imageurl} alt="" />
                                        <div className="overlay"></div>
                                        <div className="text-container">
                                                {/* <h1 className="title">
                                                <a href="">Will Humans be able to live in Mars in the future?</a>
                                                </h1> */}
                                                <div className="profile-section">
                                                        <div className="img-container">
                                                                <img src={data[0].author.profile} alt="" />
                                                        </div>
                                                        <div className="text-content">
                                                                <h5 className="profile-name">{data[0].author.name}</h5>
                                                                <p className="bio">{data[0].author.tag}</p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </section>
        );
}

export default HeroSection;