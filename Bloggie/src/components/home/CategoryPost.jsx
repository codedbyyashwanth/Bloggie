import Navbar from "../Navbar";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import { GraphQLClient, gql } from "graphql-request";
import { useQuery } from "react-query";
import Card from "./Card";

const API = "https://api-ap-south-1.hygraph.com/v2/clduo82jb0d1f01rt58iceeod/master";

const GraphQLCMS = new GraphQLClient(API);


const CategoryPost = () => {
        const { id } = useParams();
        const GQLData = gql`
                {
                        category: posts(where: {category: \"${id}\" }) {
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
                const {category} = await GraphQLCMS.request(GQLData);
                return category;
        }

        const { data, status } = useQuery(`${id}-data`, fetchData);

        if (status == "loading")
                return <h1>Loading</h1>

        if (status == "error")
                return <h1>Error</h1>

        return (
                <>
                        <header>
                                <Navbar />
                        </header>
                        <main className="authors-section latest-post-section ">
                                <div className="authors-header">
                                        <div className="container">
                                                <div className="img-container">
                                                        <img src="https://reiro.fueko.net/content/images/size/w300/2022/10/photo-1655721529468-d0d81b2dc489.jpeg" alt="" />
                                                </div>
                                                <div className="text-content">
                                                        <h2>{id}</h2>
                                                        <p style={{ fontWeight : "600", margin : "0", fontSize : "0.9rem" }}>No of Posts - {data.length} Posts</p>
                                                </div>
                                        </div>
                                </div>
                                <div className="container">
                                        <div className="card-container">
                                                {
                                                        data.map((item, count) => (
                                                                <Card data={item} key={count} />
                                                        ))
                                                }
                                        </div>
                                </div>
                        </main>
                        <Footer />
                </>
        );
}

export default CategoryPost;