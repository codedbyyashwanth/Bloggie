import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import moment from 'moment';
import {BiCalendar} from "react-icons/bi";
import { useParams } from "react-router-dom";

const PostPage = () => {
        const date = moment("2023-02-23T13:58:57.679062+00:00").format("YYYY-MM-DD");
        const time = moment("2023-02-23T13:58:57.679062+00:00").format("HH:mm:ss");
        const {id} = useParams();
        
        return (
                <>
                        <header>
                                <Navbar />
                        </header>
                        <main className="post-detail-section">
                                <div className="container">
                                        <div className="text-content">
                                                <h1 className="title">Why I love Italy – my favourite Italy experiences and places</h1>
                                                <div className="title-info">
                                                        <div className="tag-container">
                                                                <span>Code</span><span>React Js</span><span>AWS</span>
                                                        </div>
                                                        <p className="published"><BiCalendar style={{marginRight: "0.3rem"}}/> Published on {date} at {time}</p>
                                                </div>
                                        </div>
                                        <div className="img-container">
                                                <img src="https://breakingmuscle.com/wp-content/uploads/2022/11/Shutterstock_2166325891.jpg" alt="" />
                                        </div>
                                        <div className="body-container">

                                        </div>
                                        <div className="published-by">
                                                <div className="heading">
                                                        <h3>Published by</h3>
                                                </div>
                                                <div className="profile-section">
                                                        <div className="img-container">
                                                                <img src="https://images.unsplash.com/photo-1609010697446-11f2155278f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                                                        </div>
                                                        <div className="text-content">
                                                                <h3 className="profile-name">Peter van Eijk</h3>
                                                                <p className="bio">Gymrat</p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </main>
                        <Footer />
                </>
        );
}

export default PostPage;