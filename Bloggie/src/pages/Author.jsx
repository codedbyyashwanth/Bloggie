import { useParams, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/home/Card";
import { GraphQLClient, gql } from "graphql-request";
import { useQuery } from "react-query";
import Loading from "../components/Loading";

const API = "https://api-ap-south-1.hygraph.com/v2/clduo82jb0d1f01rt58iceeod/master";

const GraphQLCMS = new GraphQLClient(API);


const Author = () => {
        const { author } = useParams();
        const location = useLocation();

        const GQLData = gql`
                {
                        posts(first:100, where: {author: {id:\"${author}\" }}) {
                                title
                                imageurl
                                author {
                                        tag
                                        name
                                        profile
                                }
                        }
                }
        `;

        const fetchData = async () => {
                const {posts} = await GraphQLCMS.request(GQLData);
                console.log(posts)
                return posts;
        }

        const { data, status } = useQuery("authors-posts-data", fetchData);

        if (status == "loading")
                return <Loading />

        if (status == "error")
                return <h1>Error</h1>

        return (
                <>
                        <header>
                                <Navbar />
                        </header>
                        <main className="authors-section">
                                <div className="authors-header">
                                        <div className="container">
                                                <div className="img-container">
                                                        <img src={location.state.profile} alt="" />
                                                </div>
                                                <div className="text-content">
                                                        <h2>{location.state.name}</h2>
                                                        <p style={{ fontWeight : "600", margin : "0", fontSize : "0.9rem" }}>{location.state.tag} - {data.length} Posts</p>
                                                        <p>
                                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere voluptates tempore harum, corrupti blanditiis quibusdam tenetur alias, suscipit est voluptatibus in nostrum perspiciatis atque distinctio eum nesciunt adipisci laborum iste!
                                                        </p>
                                                </div>
                                        </div>
                                </div>
                                <div className="latest-post-section ">
                                        <div className="container">
                                                <div className="card-container">
                                                        {
                                                                data.map((items, count) => (
                                                                        <Card data={items} key={count} />
                                                                ))
                                                        }
                                                </div>
                                        </div>
                                </div>
                        </main>
                        <Footer />
                </>
        );
}

export default Author;