

const InterestedCardSection = ({data}) => {
        return (
                <div className="interested-section">
                        <h1 className="section-title">You may also like</h1>
                        <div className="container">
                                {
                                        data.map((items, count) => (
                                                <div className="card" key={count}>
                                                        <img src={items.imageurl} alt="" />
                                                        <div className="overlay"></div>
                                                        <div className="text-container">
                                                                {/* <h1 className="title">
                                                                <a href="">{items.title}</a>
                                                                </h1> */}
                                                                <div className="profile-section">
                                                                        <div className="img-container">
                                                                                <img src={items.author.profile} alt="" />
                                                                        </div>
                                                                        <div className="text-content">
                                                                                <h5 className="profile-name">{items.author.name}</h5>
                                                                                <p className="bio">{items.author.tag}</p>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        ))
                                }
                        </div>
                </div>
        );
}

export default InterestedCardSection;