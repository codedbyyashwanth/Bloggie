import Navbar from "../components/Navbar";
import HeroSection from "../components/home/HeroSection";
import CardSection from "../components/home/CardSection";
import LatestPost from "../components/home/LatestPost";
import PopularPost from "../components/home/PopularPost";
import InterestedCardSection from "../components/home/InterestedCardSection";
import RecentlyVisited from "../components/home/RecentlyVisited";
import AuthorSection from "../components/home/AuthorSection";
import Footer from "../components/Footer";

const Home = () => {
        return (
                <>
                        <header>
                                <Navbar />
                                <HeroSection />
                        </header>
                        <main>
                                <CardSection />
                                <LatestPost />
                                <PopularPost />
                                <InterestedCardSection />
                                <AuthorSection />
                                <RecentlyVisited />
                        </main>
                        
                        <Footer />
                </>
        );
}

export default Home;