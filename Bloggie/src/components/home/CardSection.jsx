import { Link } from "react-router-dom";

const CardSection = () => {
        return (
                <div className="popular-category-section">
                        {/* <h1 className="section-title">Popular Category</h1> */}
                        <div className="container">
                                <div className="img-container">
                                        <Link to="/categories/Travel">
                                        <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" />
                                        <h4>Travel</h4>
                                        </Link>
                                </div>
                                <div className="img-container">
                                        <Link to="/categories/Food">
                                        <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                                        <h4>Food</h4>
                                        </Link>
                                </div>
                                <div className="img-container">
                                        <Link to="/categories/Fitness">
                                        <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                                        <h4>Fitness</h4>
                                        </Link>
                                </div>
                                <div className="img-container">
                                        <Link to="/categories/Fashion">
                                        <img src="https://images.unsplash.com/photo-1585914924626-15adac1e6402?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
                                        <h4>Fashion</h4>
                                        </Link>
                                </div>
                                <div className="img-container">
                                        <Link to="/categories/Programming">
                                        <img src="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                        <h4>Programming</h4>
                                        </Link>
                                </div>
                                <div className="img-container">
                                        <Link to="/categories/Entertainment">
                                        <img src="https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
                                        <h4>Entertainment</h4>
                                        </Link>
                                </div>
                        </div>
                </div>
        );
}

export default CardSection;