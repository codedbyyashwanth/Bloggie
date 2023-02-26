

const Card = ({data}) => {
        return (
                <>
                        <div className="card">
                                <div className="img-container">
                                        <img src={data.imageurl} alt="" />
                                </div>
                                <h3 className="title">
                                        <a href="">{data.title}</a>
                                </h3>
                                <p className="desc">
                                        Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus quis tellus scelerisque, sagittis tortor et,
                                </p>
                                <div className="profile-section">
                                        <div className="img-container">
                                                <img src={data.author.profile} alt="" />
                                        </div>
                                        <div className="text-content">
                                                <h5 className="profile-name">{data.author.name}</h5>
                                                <p className="bio">{data.author.tag}</p>
                                        </div>
                                </div>
                        </div>
                </>
        );
}

export default Card;