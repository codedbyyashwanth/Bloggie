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
const GraphCMS = new GraphQLClient(import.meta.env.VITE_SECRET_KEY);

const GQLData = gql`
{
        featured: posts(last: 3, where: {featured: true}) {
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

        posts(first:100) {
                title
                slug
                imageurl
                author {
                        name
                        id
                }
        }

        others: posts(first:3, where: {viewCount_lt: 500}) {
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

        latest: posts(last: 6, where: {viewCount_gt: 500, featured: false}) {
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
                slug
                author {
                        tag
                        name
                        profile
                        id
                }
        }

        published: posts(
                first: 3
                orderBy: publishedAt_DESC
                where: {featured: false, viewCount_lt: 500}
              ) {
                imageurl
                title
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

const Home = () => {

        const fetchData = async () => {
                const { featured, latest, popular, others, authors, published, posts } = await GraphCMS.request(GQLData);
                let data = {
                        featured,
                        latest,
                        popular,
                        others,
                        authors,
                        published,
                        posts
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