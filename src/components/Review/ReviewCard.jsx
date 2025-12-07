const ReviewCard = ({ review }) => {
    return (
        <div className="mb-4 rounded border p-4 shadow">
            <div className="mb-2 flex items-center justify-between">
                <p className="font-bold">{review.user}</p>
                <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
            <p className="mt-1 text-sm text-gray-400">{new Date(review.date).toLocaleDateString()}</p>
        </div>
    );
};

export default ReviewCard;
