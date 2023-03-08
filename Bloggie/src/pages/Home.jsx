import Navbar from "../components/Navbar";
import HeroSection from "../components/home/HeroSection";
import CardSection from "../components/home/CardSection";
import LatestPost from "../components/home/LatestPost";
import PopularPost from "../components/home/PopularPost";
import InterestedCardSection from "../components/home/InterestedCardSection";
import RecentlyVisited from "../components/home/RecentlyVisited";
import AuthorSection from "../components/home/AuthorSection";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

import { gql, GraphQLClient } from "graphql-request";
import { useQuery } from "react-query";
const API_KEY = "https://api-ap-south-1.hygraph.com/v2/clduo82jb0d1f01rt58iceeod/master";
const GraphCMS = new GraphQLClient(API_KEY);

const GQLData = gql`
{
        featured: posts(last: 3, where: {featured: true}) {
                title
                imageurl
                author {
                        tag
                        name
                        profile
                }
        }

        others: posts(first:3, where: {viewCount_lt: 500}) {
                title
                imageurl
                author {
                  tag
                  name
                  profile
                }
        }

        latest: posts(last: 6, where: {viewCount_gt: 500, featured: false}) {
                title
                imageurl
                author {
                        tag
                        name
                        profile
                }
        }

        authors: authors(first: 8) {
                name
                id
                profile
                rating
                tag
              }

        popular: posts(first: 3, where: {viewCount_gt: 500, featured: false}) {
                title
                imageurl
                author {
                        tag
                        name
                        profile
                }
        }

        published: posts(
                first: 3
                orderBy: publishedAt_DESC
                where: {featured: false, viewCount_lt: 500}
              ) {
                imageurl
                title
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
                const { featured, latest, popular, others, authors, published } = await GraphCMS.request(GQLData);
                let data = {
                        featured,
                        latest,
                        popular,
                        others,
                        authors,
                        published
                }
                return data;
        }

        const { data, status } = useQuery("featured-data", fetchData);

        if (status == "loading")
                return <Loading />

        return (
                <>
                        <header>
                                <Navbar />
                                <HeroSection data={data.featured}  />
                        </header>
                        <main>
                                <CardSection />
                                <LatestPost data={data.latest} />
                                <PopularPost data={data.popular} />
                                <InterestedCardSection data={data.others} />
                                <AuthorSection data={data.authors} />
                                <RecentlyVisited data={data.published} />
                        </main>
                        <Footer />
                </>
        );
}

export default Home;