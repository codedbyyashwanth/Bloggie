import { useParams, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/home/Card";
import { GraphQLClient, gql } from "graphql-request";
import { useQuery } from "react-query";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
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
                                slug
                        }

                        author(where: { id: \"${author}\"}) {
                                profile
                                name
                                bio
                                tag
                        }
                }
        `;

        const fetchData = async () => {
                const {posts, author} = await GraphQLCMS.request(GQLData);
                let article = {
                        posts,
                        author
                }
                return article;
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
                                                        <img src={data.author.profile} alt="" />
                                                </div>
                                                <div className="text-content">
                                                        <h2>{data.author.name}</h2>
                                                        <p style={{ fontWeight : "600", margin : "0", fontSize : "0.9rem" }}>{data.author.tag} - {data.posts.length} Posts</p>
                                                        <p>{data.author.bio}</p>
                                                </div>
                                        </div>
                                </div>
                                <div className="latest-post-section ">
                                        <div className="container">
                                                <div className="card-container">
                                                        {
                                                                data.posts.map((items, count) => (
                                                                        <div className="card" key={count}>
                                                                                <Link to={`/posts/${items.slug}`}>
                                                                                        <div className="img-container">
                                                                                                <img src={items.imageurl} alt="" />
                                                                                        </div>
                                                                                </Link>
                                                                                <h3 className="title">
                                                                                        <Link to={`/posts/${items.slug}`}>{items.title}</Link>
                                                                                </h3>
                                                                        </div>
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