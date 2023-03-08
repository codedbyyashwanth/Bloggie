import { Link } from "react-router-dom";

const Card = ({data}) => {
        return (
                <>
                        <div className="card">
                                <Link to={`/posts/${data.slug}`}>
                                        <div className="img-container">
                                                <img src={data.imageurl} alt="" />
                                        </div>
                                </Link>
                                <h3 className="title">
                                        <Link to={`/posts/${data.slug}`}>{data.title}</Link>
                                </h3>
                                {/* <p className="desc">
                                        Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus quis tellus scelerisque, sagittis tortor et,
                                </p> */}
                                <div className="profile-section">
                                        <div className="img-container">
                                                <Link to={`/authors/${data.author.id}`}><img src={data.author.profile} alt="" /></Link>
                                        </div>
                                        <Link to={`/authors/${data.author.id}`}>
                                                <div className="text-content">
                                                        <h5 className="profile-name">{data.author.name}</h5>
                                                        <p className="bio">{data.author.tag}</p>
                                                </div> 
                                        </Link>
                                </div>
                        </div>
                </>
        );
}

export default Card;