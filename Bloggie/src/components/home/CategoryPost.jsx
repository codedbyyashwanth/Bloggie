import Navbar from "../Navbar";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import { GraphQLClient, gql } from "graphql-request";
import { useQuery } from "react-query";
import Card from "./Card";
import Loading from "../Loading";

const API = "https://api-ap-south-1.hygraph.com/v2/clduo82jb0d1f01rt58iceeod/master";

const GraphQLCMS = new GraphQLClient(API);
const images = {
        Travel : "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        Food : "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        Fitness: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        Fashion : "https://images.unsplash.com/photo-1585914924626-15adac1e6402?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        Programming: "https://images.unsplash.com/photo-1597239450996-ea7c2c564412?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        Entertainment: "https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
}


const CategoryPost = () => {
        const { id } = useParams();
        const GQLData = gql`
                {
                        category: posts(where: {category: \"${id}\" }) {
                                title
                                imageurl
                                slug
                                author {
                                tag
                                name
                                profile
                                id
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
                return <Loading />

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
                                                        <img src={images[id]} alt="" />
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