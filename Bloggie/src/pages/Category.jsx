import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardSection from "../components/home/CardSection";
import LatestPost from "../components/home/LatestPost";
import Card from "../components/home/Card";
import { GraphQLClient, gql } from "graphql-request";
import { useQuery } from "react-query";

const API = "https://api-ap-south-1.hygraph.com/v2/clduo82jb0d1f01rt58iceeod/master";

const GraphQLCMS = new GraphQLClient(API);
const GQLData = gql`
        {
                posts {
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

const Category = () => {
        const fetchData = async () => {
                const {posts} = await GraphQLCMS.request(GQLData);
                return posts;
        }

        const { data, status } = useQuery("post-data", fetchData);

        if (status == "loading")
                return <h1>Loading</h1>

        if (status == "error")
                return <h1>Error</h1>

        return (
                <>
                        <header>
                                <Navbar />
                        </header>
                        <main className="latest-post-section category-section">
                                <CardSection />
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

export default Category;