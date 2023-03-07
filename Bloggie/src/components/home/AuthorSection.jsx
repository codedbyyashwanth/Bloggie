import { BiStar } from 'react-icons/bi';

const AuthorSection = ({data}) => {
        return (
                <div className="author-section">
                        <h1 className="section-title">
                                Popular Author's
                        </h1>
                        <div className="container">
                                {
                                        data.map((items, count) => (
                                                <div className="card" key={count}>
                                                        <div className="profile-section">
                                                                <div className="img-container">
                                                                        <img src={items.profile} alt="" />
                                                                </div>
                                                                <div className="text-content">
                                                                        <h4 className="profile-name">{items.name}</h4>
                                                                        <p className="bio">{items.tag}</p>
                                                                </div>
                                                        </div>
                                                        <div className="rating">
                                                                <h4>{items.rating}</h4>
                                                                <BiStar className='start-icon' />
                                                        </div>
                                                </div>
                                        ))
                                }
                        </div>
                </div>
        );
}

export default AuthorSection;