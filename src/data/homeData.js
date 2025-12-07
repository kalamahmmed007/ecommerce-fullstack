import DealOfTheDay from "@/components/Home/DealOfTheDay";

// src/data/homeData.js
export const heroBanners = [
    {
        id: 1,
        title: "Big Sale!",
        subtitle: "Up to 50% off on selected products",
        image: "/images/banner/sale1.jpg",
        link: "/shop",
    },
    {
        id: 2,
        title: "New Arrivals",
        subtitle: "Check out our latest products",
        image: "/images/banner/new1.jpg",
        link: "/shop",
    },
    {
        id: 3,
        title: "Limited Offer",
        subtitle: "Hurry! Offer ends soon",
        image: "/images/banner/offer1.jpg",
        link: "/shop",
    },
];

export const newArrivals = [
    {
        id: 'p1',
        name: 'Wireless Headphones',
        price: 99.99,
        discount: 10,
        images: ['/images/products/headphones1.jpg'],
        isFeatured: true,
        stock: 25,
    },
    {
        id: 'p2',
        name: 'Smart Watch',
        price: 199.99,
        discount: 0,
        images: ['/images/products/smartwatch1.jpg'],
        isFeatured: false,
        stock: 15,
    },
    {
        id: 'p3',
        name: 'Gaming Mouse',
        price: 49.99,
        discount: 5,
        images: ['/images/products/mouse1.jpg'],
        isFeatured: true,
        stock: 30,
    },
    {
        id: 'p4',
        name: '4K Monitor',
        price: 399.99,
        discount: 15,
        images: ['/images/products/monitor1.jpg'],
        isFeatured: false,
        stock: 10,
    },
];
export const bestSellers = [
    {
        id: 'p5',
        name: 'Bluetooth Speaker',
        price: 59.99,
        discount: 0,
        images: ['/images/products/speaker1.jpg'],
        isFeatured: true,
        stock: 40,
    },
    {
        id: 'p6',
        name: 'Fitness Tracker',
        price: 89.99,
        discount: 20,
        images: ['/images/products/fitnesstracker1.jpg'],
        isFeatured: false,
        stock: 20,
    },
    {
        id: 'p7',
        name: 'Laptop Stand',
        price: 29.99,
        discount: 0,
        images: ['/images/products/laptopstand1.jpg'],
        isFeatured: true,
        stock: 50,
    },
    {
        id: 'p8',
        name: 'External Hard Drive',
        price: 79.99,
        discount: 10,
        images: ['/images/products/harddrive1.jpg'],
        isFeatured: false,
        stock: 35,
    },
];
export const featuredProducts = [
    {
        id: 'p9',
        name: 'Noise Cancelling Earbuds',
        price: 129.99,
        discount: 15,
        images: ['/images/products/earbuds1.jpg'],
        isFeatured: true,
        stock: 18,
    },
    {
        id: 'p10',
        name: 'Smartphone Gimbal',
        price: 149.99,
        discount: 0,
        images: ['/images/products/gimbal1.jpg'],
        isFeatured: true,
        stock: 22,
    },
    {
        id: 'p11',
        name: 'Portable Charger',
        price: 39.99,
        discount: 5,
        images: ['/images/products/charger1.jpg'],
        isFeatured: true,
        stock: 60,
    },
    {
        id: 'p12',
        name: 'Action Camera',
        price: 249.99,
        discount: 20,
        images: ['/images/products/actioncamera1.jpg'],
        isFeatured: true,
        stock: 12,
    },
];
export const testimonials = [
    {
        id: 1,
        name: "John Doe",
        feedback: "Great products and excellent customer service!",
        avatar: "/images/testimonials/user1.jpg",
        rating: 5,
    },
    {
        id: 2,
        name: "Jane Smith",
        feedback: "Fast shipping and the quality is top-notch.",
        avatar: "/images/testimonials/user2.jpg",
        rating: 4,
    },
    {

        id: 3,
        name: "Mike Johnson",
        feedback: "Wide variety of products to choose from.",
        avatar: "/images/testimonials/user3.jpg",
        rating: 5,
    },
    {
        id: 4,
        name: "Emily Davis",
        feedback: "User-friendly website and great deals!",
        avatar: "/images/testimonials/user4.jpg",
        rating: 4,
    },
];
export const faqs = [
    {
        question: "How long does shipping take?",
        answer: "Shipping usually takes 2-5 business days depending on your location.",
    },
    {
        question: "What is your return policy?",
        answer: "We accept returns within 30 days of purchase. The product must be in its original condition.",
    },
    {
        question: "Do you offer international shipping?",
        answer: "Yes, we ship to most countries worldwide. Shipping fees and delivery times may vary.",
    },
    {
        question: "How can I track my order?",
        answer: "Once your order is shipped, you will receive a tracking number via email to monitor your shipment.",
    },
];


export const dealOfTheDay = [
    {
        id: 1,
        name: '4K Ultra HD TV',
        price: 799.99,
        discount: 25,
        images: ['/images/products/tv1.jpg'],
        isFeatured: true,
        stock: 8,
    },
    {
        id: 2,
        name: 'Wireless Home Theater System',
        price: 299.99,
        discount: 15,
        images: ['/images/products/hometheater1.jpg'],
        isFeatured: true,
        stock: 12,
    },


]  
