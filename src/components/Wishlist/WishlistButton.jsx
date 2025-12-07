import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../../features/wishlist/wishlistSlice";

const WishlistButton = ({ productId }) => {
    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.wishlist.items);
    const isInWishlist = wishlist.includes(productId);

    return (
        <button
            onClick={() => dispatch(toggleWishlist(productId))}
            className={`p-2 rounded-full transition-colors ${isInWishlist ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"
                }`}
        >
            {isInWishlist ? "♥" : "♡"}
        </button>
    );
};

export default WishlistButton;
