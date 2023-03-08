import { Link, useNavigate } from "react-router-dom";

const PopularPost = ({ data }) => {
        const navigate = useNavigate();

        return (
                <div className="popular-post-section">
                        <h1 className="section-title">
                                Popular Post
                        </h1>
                        <div className="container">
                                <div className="card-container">
                                        {
                                                data.map((value, count) => (
                                                        <div key={count} className="card">
                                                                <div className="img-container">
                                                                        <Link to={`/posts/${value.slug}`}><img src={value.imageurl} alt="" /></Link>
                                                                </div>
                                                                <div className="text-container">
                                                                        <h1 className="title"><Link to={`/posts/${value.slug}`}>{value.title}</Link></h1>
                                                                        <p className="desc">
                                                                        The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not....
                                                                                <a href="">Read More</a>
                                                                        </p>
                                                                        <div className="profile-section">
                                                                                <div className="profile-img-container">
                                                                                <Link to={`/authors/${value.author.id}`}><img src={value.author.profile} alt="" /></Link>
                                                                                </div>
                                                                                <Link to={`/authors/${value.author.id}`}><div className="text-content">
                                                                                        <h5 className="profile-name">{value.author.name}</h5>
                                                                                        <p className="bio">{value.author.tag}</p>
                                                                                </div></Link>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                ))
                                        }
                                </div>
                        </div>
                        <button className="btn-primary center" onClick={() => navigate("/posts/")}>
                                <span>Load More</span>
                        </button>
                </div>
        );
}

export default PopularPost;