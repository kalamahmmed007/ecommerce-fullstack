/* =================================================
   GLOBAL HELPER FUNCTIONS
   Currency: Bangladeshi Taka (৳ BDT)
================================================= */

// -------- PRICE HELPERS --------

// format price => ৳ ১,২৩৪
export const formatPrice = (price = 0) => {
    return new Intl.NumberFormat("bn-BD", {
        style: "currency",
        currency: "BDT",
        minimumFractionDigits: 0
    }).format(price);
};

// discount calculation
export const calculateDiscount = (price, percent = 0) => {
    return percent > 0
        ? price - (price * percent) / 100
        : price;
};

// cart total calculation
export const calculateCartTotal = (items = []) => {
    return items.reduce(
        (total, item) =>
            total + item.price * (item.quantity || 1),
        0
    );
};


// -------- PRODUCT HELPERS --------

// search filter
export const filterProducts = (products = [], search = "") =>
    products.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

// category filter
export const filterByCategory = (products = [], category) => {
    if (!category || category === "all") return products;
    return products.filter(
        p => p.category === category
    );
};

// price range filter
export const filterByPriceRange = (
    products = [],
    min = 0,
    max = Infinity
) =>
    products.filter(
        p => p.price >= min && p.price <= max
    );


// -------- CART HELPERS --------

// add product to cart
export const addToCartHelper = (cart = [], product) => {

    const exists = cart.find(
        item => item.id === product.id
    );

    if (exists) {
        return cart.map(item =>
            item.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1
                }
                : item
        );
    }

    return [
        ...cart,
        { ...product, quantity: 1 }
    ];
};

// increase quantity
export const increaseQty = (cart, id) =>
    cart.map(item =>
        item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1
            }
            : item
    );

// decrease quantity
export const decreaseQty = (cart, id) =>
    cart.map(item =>
        item.id === id && item.quantity > 1
            ? {
                ...item,
                quantity: item.quantity - 1
            }
            : item
    );

// remove product
export const removeItem = (cart = [], id) =>
    cart.filter(item => item.id !== id);


// -------- UI HELPERS --------

// text shorten
export const truncateText = (text = "", limit = 80) =>
    text.length > limit
        ? text.slice(0, limit) + "..."
        : text;

// random id generator
export const generateId = () =>
    Math.random().toString(36).substring(2, 10);


// -------- STORAGE HELPERS --------

export const saveToStorage = (key, data) =>
    localStorage.setItem(
        key,
        JSON.stringify(data)
    );

export const getFromStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};

export const removeFromStorage = (key) =>
    localStorage.removeItem(key);
