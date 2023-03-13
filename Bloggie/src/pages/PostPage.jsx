import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import moment from 'moment';
import {BiCalendar} from "react-icons/bi";
import { useParams, Link } from "react-router-dom";
import { GraphQLClient, gql } from "graphql-request";
import { useQuery } from "react-query";
import Loading from "../components/Loading";
import RecentlyVisited from "../components/home/RecentlyVisited";
import { useState } from "react";


const GraphQLCMS = new GraphQLClient(import.meta.env.VITE_SECRET_KEY);

const PostPage = () => {
        const {slug} = useParams();

        const GrpahGQL = gql`
                {
                        post(
                                where: {slug: \"${slug}\"}
                              ) {
                                imageurl
                                slug
                                tags
                                title
                                content {
                                        html
                                }
                                publishedAt
                                featured
                                category
                                author {
                                  profile
                                  name
                                  tag
                                  id
                                }
                        }
                }
        `;

        const fetchData = async () => {
                const {post} = await GraphQLCMS.request(GrpahGQL);
                return post;
        }

        const { data, status } = useQuery("post-ind-data", fetchData);

        

        if (status == "loading")
                return <Loading />

        if (status == "error")
                return <h1>Error</h1>

                
        const date = moment(data.publisedAt).format("YYYY-MM-DD");
        const time = moment(data.publisedAt).format("HH:mm:ss");

        return (
                <>
                        <header>
                                <Navbar />
                        </header>
                        <main className="post-detail-section">
                                <div className="container">
                                        <div className="text-content">
                                                <h1 className="title">{data.title}</h1>
                                                <div className="title-info">
                                                        <div className="tag-container">
                                                                {
                                                                        data.tags.map((item, count) => (
                                                                                <span key={count}>{item}</span>
                                                                        ))
                                                                }
                                                        </div>
                                                        <p className="published"><BiCalendar style={{marginRight: "0.3rem"}}/> Published on {date} at {time}</p>
                                                </div>
                                        </div>
                                        <div className="img-container">
                                                <img src={data.imageurl} alt="" />
                                        </div>
                                        <div className="body-container" dangerouslySetInnerHTML={{__html : data.content.html}}>
                                        </div>
                                        <div className="published-by">
                                                <div className="heading">
                                                        <h3>Published by</h3>
                                                </div>
                                                <div className="profile-section">
                                                        <div className="img-container">
                                                        <Link to={`/authors/${data.author.id}`}><img src={data.author.profile} alt="" /></Link>
                                                        </div>
                                                        <Link to={`/authors/${data.author.id}`}><div className="text-content">
                                                                <h3 className="profile-name">{data.author.name}</h3>
                                                                <p className="bio">{data.author.tag}</p>
                                                        </div></Link>
                                                </div>
                                        </div>
                                </div>
                        </main>
                        <Footer />
                </>
        );
}

export default PostPage;