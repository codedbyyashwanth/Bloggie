import { Link } from "react-router-dom";

const InterestedCardSection = ({data}) => {
        return (
                <div className="interested-section">
                        <h1 className="section-title">You may also like</h1>
                        <div className="container">
                                {
                                        data.map((items, count) => (
                                                <div className="card" key={count}>
                                                        <Link to={`/posts/${items.slug}`}><img src={items.imageurl} alt="" /></Link>
                                                        <div className="overlay"></div>
                                                        <div className="text-container">
                                                                <div className="profile-section">
                                                                        <div className="img-container">
                                                                        <Link to={`/authors/${items.author.id}`}><img src={items.author.profile} alt="" /></Link>
                                                                        </div>
                                                                        <Link to={`/authors/${items.author.id}`}><div className="text-content">
                                                                                <h5 className="profile-name">{items.author.name}</h5>
                                                                                <p className="bio">{items.author.tag}</p>
                                                                        </div></Link>
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