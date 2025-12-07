import ReviewCard from "./ReviewCard";

const ReviewList = ({ reviews }) => {
    if (!reviews.length) return <p className="py-10 text-center">No reviews yet.</p>;

    return (
        <div>
            {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
            ))}
        </div>
    );
};

export default ReviewList;
