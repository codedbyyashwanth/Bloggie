import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/home/Card";
import { GraphQLClient, gql } from "graphql-request";
import { useQuery } from "react-query";
import Loading from "../components/Loading";


const GraphQLCMS = new GraphQLClient(import.meta.env.VITE_SECRET_KEY);
const GQLData = gql`
        {
                posts(first:100) {
                        title
                        imageurl
                        slug
                        author {
                                tag
                                name
                                profile
                        }
                }
        }
`;

const Post = () => {
        const fetchData = async () => {
                const {posts} = await GraphQLCMS.request(GQLData);
                return posts;
        }

        const { data, status } = useQuery("all-posts-data", fetchData);

        if (status == "loading")
                return <Loading />

        if (status == "error")
                return <h1>Error</h1>

        return (
                <>
                        <header>
                                <Navbar />
                        </header>
                        <main className="latest-post-section category-section">
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

export default Post;