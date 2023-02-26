import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardSection from "../components/home/CardSection";
import LatestPost from "../components/home/LatestPost";
import Card from "../components/home/Card";

const Category = () => {
        return (
                <>
                        <header>
                                <Navbar />
                        </header>
                        <main className="latest-post-section category-section">
                                <CardSection />
                                <div className="container">
                                        <div className="card-container">
                                                {/* <Card />
                                                <Card />
                                                <Card />
                                                <Card />
                                                <Card />
                                                <Card /> */}
                                        </div>
                                </div>
                        </main>
                        <Footer />
                </>
        );
}

export default Category;