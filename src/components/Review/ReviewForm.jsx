import { useState } from "react";

const ReviewForm = ({ onSubmit }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!rating || !comment) return;
        onSubmit({ rating, comment });
        setRating(0);
        setComment("");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 rounded border p-4 shadow">
            <div>
                <label className="mb-1 block font-semibold">Rating</label>
                <select value={rating} onChange={(e) => setRating(Number(e.target.value))} className="w-full rounded border p-2">
                    <option value={0}>Select rating</option>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>{num} Star{num > 1 ? 's' : ''}</option>
                    ))}
                </select>
            </div>
            <div>
                <label className="mb-1 block font-semibold">Comment</label>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="w-full rounded border p-2" rows={4}></textarea>
            </div>
            <button type="submit" className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700">
                Submit Review
            </button>
        </form>
    );
};

export default ReviewForm;
