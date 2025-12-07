// src/components/Wishlist/Wishlist.jsx
import React from "react";
import WishlistItem from "./WishlistItem";
import WishlistEmpty from "./WishlistEmpty";
import { useSelector } from "react-redux";

const Wishlist = () => {
    const items = useSelector((state) => state.wishlist.items);

    if (!items.length) return <WishlistEmpty />;

    return (
        <div className="space-y-4">
            {items.map((item) => (
                <WishlistItem key={item._id} item={item} />
            ))}
        </div>
    );
};

export default Wishlist;
