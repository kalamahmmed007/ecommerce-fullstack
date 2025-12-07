// src/hooks/useWishlist.js
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist, removeFromWishlist } from "@/features/wishlist/wishlistSlice";

export const useWishlist = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.wishlist.items);

    const add = (product) => dispatch(addToWishlist(product));
    const remove = (productId) => dispatch(removeFromWishlist(productId));
    const isInWishlist = (productId) => items.some((item) => item._id === productId);

    return { items, add, remove, isInWishlist };
};
