const RatingSummary = ({ reviews }) => {
    if (!reviews.length) return <p>No ratings yet.</p>;

    const avgRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

    return (
        <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">{avgRating}</span>
            <span className="text-yellow-500">{'★'.repeat(Math.round(avgRating))}</span>
            <span className="text-gray-500">({reviews.length} Reviews)</span>
        </div>
    );
};

export default RatingSummary;
