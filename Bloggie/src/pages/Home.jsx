import Navbar from "../components/Navbar";
import HeroSection from "../components/home/HeroSection";
import CardSection from "../components/home/CardSection";
import LatestPost from "../components/home/LatestPost";
import PopularPost from "../components/home/PopularPost";
import InterestedCardSection from "../components/home/InterestedCardSection";
import RecentlyVisited from "../components/home/RecentlyVisited";
import AuthorSection from "../components/home/AuthorSection";
import Footer from "../components/Footer";

import { gql, GraphQLClient } from "graphql-request";
import { useQuery } from "react-query";
const API_KEY = "https://api-ap-south-1.hygraph.com/v2/clduo82jb0d1f01rt58iceeod/master";
const GraphCMS = new GraphQLClient(API_KEY);

const GQLData = gql`
{
        featured: posts(first: 3, where: {viewCount_gt: 500}) {
                title
                imageurl
                author {
                        tag
                        name
                        profile
                }
        }

        latest: posts(last: 6, where: {viewCount_gt: 500}) {
                title
                imageurl
                author {
                        tag
                        name
                        profile
                }
        }

        popular: posts(first: 3, where: {viewCount_gt: 500}) {
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

const Home = () => {

        const fetchData = async () => {
                const { featured, latest, popular } = await GraphCMS.request(GQLData);
                let data = {
                        featured,
                        latest,
                        popular
                }
                return data;
        }

        const { data, status } = useQuery("featured-data", fetchData);

        if (status == "loading")
                return <h1>Loading</h1>

        return (
                <>
                        <header>
                                <Navbar />
                                <HeroSection  />
                        </header>
                        <main>
                                <CardSection />
                                <LatestPost data={data.latest} />
                                <PopularPost data={data.popular} />
                                <InterestedCardSection />
                                <AuthorSection />
                                <RecentlyVisited />
                        </main>
                        <Footer />
                </>
        );
}

export default Home;