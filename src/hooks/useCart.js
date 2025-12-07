// src/hooks/useCart.js
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, updateCartItemQuantity } from "@/features/cart/cartSlice";

export const useCart = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);

    const add = (product) => dispatch(addToCart(product));
    const remove = (productId) => dispatch(removeFromCart(productId));
    const updateQuantity = (productId, quantity) => dispatch(updateCartItemQuantity({ productId, quantity }));

    return { items, add, remove, updateQuantity };
};
