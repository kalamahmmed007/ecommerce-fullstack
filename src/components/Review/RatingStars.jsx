const RatingStars = ({ rating }) => {
    return (
        <div className="text-yellow-500">
            {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        </div>
    );
};

export default RatingStars;
