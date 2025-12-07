import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

/**
 * Custom Redux Hook
 * Makes it easier to use Redux in components
 */
export const useRedux = () => {
    const dispatch = useDispatch();

    // ===== CART SELECTORS =====
    const cartItems = useSelector((state) => state.cart.items);
    const cartTotal = useSelector((state) => state.cart.total);
    const cartItemCount = useSelector((state) => state.cart.itemCount);

    // ===== PRODUCT SELECTORS =====
    const products = useSelector((state) => state.products.items);
    const productsLoading = useSelector((state) => state.products.loading);
    const productsError = useSelector((state) => state.products.error);
    const selectedProduct = useSelector((state) => state.products.selectedProduct);

    // ===== USER SELECTORS =====
    const user = useSelector((state) => state.user.currentUser);
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const userLoading = useSelector((state) => state.user.loading);

    // ===== WISHLIST SELECTORS =====
    const wishlistItems = useSelector((state) => state.wishlist.items);
    const wishlistCount = useSelector((state) => state.wishlist.count);

    // ===== HELPER FUNCTIONS =====

    /**
     * Check if product is in cart
     */
    const isInCart = useCallback(
        (productId) => {
            return cartItems.some((item) => item.id === productId);
        },
        [cartItems]
    );

    /**
     * Check if product is in wishlist
     */
    const isInWishlist = useCallback(
        (productId) => {
            return wishlistItems.some((item) => item.id === productId);
        },
        [wishlistItems]
    );

    /**
     * Get cart item by product ID
     */
    const getCartItem = useCallback(
        (productId) => {
            return cartItems.find((item) => item.id === productId);
        },
        [cartItems]
    );

    /**
     * Get product by ID
     */
    const getProductById = useCallback(
        (productId) => {
            return products.find((product) => product.id === productId);
        },
        [products]
    );

    /**
     * Calculate cart subtotal
     */
    const getCartSubtotal = useCallback(() => {
        return cartItems.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }, [cartItems]);

    /**
     * Get total cart quantity
     */
    const getTotalQuantity = useCallback(() => {
        return cartItems.reduce((total, item) => {
            return total + item.quantity;
        }, 0);
    }, [cartItems]);

    return {
        // Dispatch
        dispatch,

        // Cart State
        cartItems,
        cartTotal,
        cartItemCount,

        // Product State
        products,
        productsLoading,
        productsError,
        selectedProduct,

        // User State
        user,
        isAuthenticated,
        userLoading,

        // Wishlist State
        wishlistItems,
        wishlistCount,

        // Helper Functions
        isInCart,
        isInWishlist,
        getCartItem,
        getProductById,
        getCartSubtotal,
        getTotalQuantity,
    };
};

export default useRedux;