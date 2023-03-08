import Card from "./Card";
import { useNavigate } from "react-router-dom";

const LatestPost = ({data}) => {
        const navigate = useNavigate();

        return (
                <div className="latest-post-section">
                        <h1 className="section-title">
                                Latest Post
                        </h1>
                        <div className="container">
                                <div className="card-container">
                                        {
                                                data.map((card, count) => (
                                                        <Card key={count} data={card} />
                                                ))
                                        }
                                </div>
                        </div>
                        <button className="btn-primary center" onClick={() => navigate("/posts/")}>
                                <span>
                                        Load More
                                </span>
                        </button>
                </div>
        );
}

export default LatestPost;