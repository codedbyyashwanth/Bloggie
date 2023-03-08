import Card from "./Card";

const RecentlyVisited = ({data}) => {
        return (
                <div className="recently-section">
                        <h1 className="section-title">
                                Recently Visited
                        </h1>
                        <div className="container">
                                <div className="card-container">
                                        {
                                                data.map((card, count) => (
                                                        <Card key={count} data={card} />
                                                ))
                                        }
                                </div>
                        </div>
                </div>
        );
}

export default RecentlyVisited;