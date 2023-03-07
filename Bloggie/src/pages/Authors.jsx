import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { GraphQLClient, gql } from "graphql-request";
import { useQuery } from "react-query";

const API = "https://api-ap-south-1.hygraph.com/v2/clduo82jb0d1f01rt58iceeod/master";
const GraphQLCMS = new GraphQLClient(API);
const GraphQL = gql`
        {
                authors {
                        name
                        profile
                        tag
                        id
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
        console.log(data)

        if (status == "loading")
                return <h1>Loading...</h1>

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
                                                        <img src="https://reiro.fueko.net/content/images/size/w300/2022/10/photo-1655721529468-d0d81b2dc489.jpeg" alt="" />
                                                </div>
                                                <div className="text-content">
                                                        <h2>Authors</h2>
                                                        <p>
                                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere voluptates tempore harum, corrupti blanditiis quibusdam tenetur alias, suscipit est voluptatibus in nostrum perspiciatis atque distinctio eum nesciunt adipisci laborum iste!
                                                        </p>
                                                </div>
                                        </div>
                                </div>
                                <div className="authors-account-section">
                                        <div className="container">
                                                {
                                                        data.map((values, count) => (
                                                                <div className="item" key={count}>
                                                                        <div className="img-container" onClick={ () => navigate(`/authors/${values.id}`, { state: { name : values.name, profile : values.profile, tag : values.tag } }) }>
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