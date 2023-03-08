import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { GraphQLClient, gql } from "graphql-request";
import { useQuery } from "react-query";
import Loading from "../components/Loading";

const API = "https://api-ap-south-1.hygraph.com/v2/clduo82jb0d1f01rt58iceeod/master";
const GraphQLCMS = new GraphQLClient(API);
const GraphQL = gql`
        {
                authors {
                        name
                        profile
                        tag
                        id
                        bio
                      }
        }
`

const Authors = () => {
        const navigate = useNavigate();

        const fetchData = async () => {
                const {authors} = await GraphQLCMS.request(GraphQL);
                return authors;
        }

        const { data, status } = useQuery("author-data", fetchData);


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
                                                        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" alt="" />
                                                </div>
                                                <div className="text-content">
                                                        <h2>Authors</h2>
                                                        <p>
                                                        A story is a letter that the author writes to himself, to tell himself things that he would be unable to discover otherwise. ~Carlos Ruiz Zafón        
                                                         </p>
                                                </div>
                                        </div>
                                </div>
                                <div className="authors-account-section">
                                        <div className="container">
                                                {
                                                        data.map((values, count) => (
                                                                <div className="item" key={count}>
                                                                        <div className="img-container" onClick={ () => navigate(`/authors/${values.id}`, { state: { name : values.name, profile : values.profile, tag : values.tag, bio: values.bio } }) }>
                                                                                <img src={values.profile} alt="" />
                                                                        </div>
                                                                        <div className="text-content">
                                                                                <h2 className="name">{values.name}</h2>
                                                                                <p className="bio">{values.tag}</p>
                                                                        </div>
                                                                </div>
                                                        ))
                                                }
                                        </div>
                                </div>
                        </main>
                        <Footer />
                </>
        );
}

export default Authors;