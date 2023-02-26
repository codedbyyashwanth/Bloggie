
const PopularPost = ({ data }) => {
        return (
                <div className="popular-post-section">
                        <h1 className="section-title">
                                Popular Post
                        </h1>
                        <div className="container">
                                <div className="card-container">
                                        {
                                                data.map((value, count) => (
                                                        <div key={count} className="card">
                                                <div className="img-container">
                                                                        <img src={value.imageurl} alt="" />
                                                </div>
                                                <div className="text-container">
                                                                        <h1 className="title"><a href="">{value.title}</a></h1>
                                                        <p className="desc">
                                                        The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not....
                                                                <a href="">Read More</a>
                                                        </p>
                                                        <div className="profile-section">
                                                                <div className="profile-img-container">
                                                                                        <img src={value.author.profile} alt="" />
                                                                </div>
                                                                <div className="text-content">
                                                                                        <h5 className="profile-name">{value.author.name}</h5>
                                                                                        <p className="bio">{value.author.tag}</p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                                ))
                                        }
                                        {/* <div className="card">
                                                <div className="img-container">
                                                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsPeLaPbZ2RdY92IrwtBLy_yiXcDpS7srsxGI9j98_djcOk8ddUt2jSqW-lGuyCMgFASBSjpkRJWttBrBAWD40_GfrH6-qycERnGGlaPXF4ga0NYDUrG_infvbS2NMF0MJpcemjB7zGqUBJgBjZr3IVFT99UBFymv-p2MnIy2JazFL2SKKO1-1Z6jfGQ/w640-h426/fashion-n.jpg" alt="" />
                                                </div>
                                                <div className="text-container">
                                                        <h1 className="title"><a href="">Winter Dressing Tips When It's Really Cold Out</a></h1>
                                                        <p className="desc">
                                                        The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not....
                                                                <a href="">Read More</a>
                                                        </p>
                                                        <div className="profile-section">
                                                                <div className="profile-img-container">
                                                                        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                                                </div>
                                                                <div className="text-content">
                                                                        <h5 className="profile-name">Julian Wan</h5>
                                                                        <p className="bio">Aerospace Engineer</p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="card">
                                                <div className="img-container">
                                                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhna5HccJKIruBlXY3NNVoqd_Dafuz9klPgr5T0Y0zNAJ2Xr2_3qnr4uFCsJPjyGgdUrYMslNRbIIcMyZxeXvnGeoJV7aZBA65qmrP_QVFcRnrA0mQfvQWEBL5UB4_K3_hPlmuMzCy4vJuNIFZR_CWYi1sZ3cFZJigtBgBvQvNesQU4K1iFBQjKE7EnLA/w640-h386/blog-post-102.jpg" alt="" />
                                                </div>
                                                <div className="text-container">
                                                        <h1 className="title"><a href="">Fashion, Tips, Trends and Celebrity Style</a></h1>
                                                        <p className="desc">
                                                        The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not....
                                                                <a href="">Read More</a>
                                                        </p>
                                                        <div className="profile-section">
                                                                <div className="profile-img-container">
                                                                        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                                                                </div>
                                                                <div className="text-content">
                                                                        <h5 className="profile-name">Julian Wan</h5>
                                                                        <p className="bio">Aerospace Engineer</p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div> */}
                                </div>
                        </div>
                        <button className="btn-primary center">
                                <span>Load More</span>
                        </button>
                </div>
        );
}

export default PopularPost;