import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import AuthLayout from '@/layouts/AuthLayout';
import AdminLayout from '@/layouts/AdminLayout';
import CheckoutLayout from '@/layouts/CheckoutLayout';

import Home from '@/pages/Home/Home';
import Shop from '@/pages/Shop/Shop';
import CategoryPage from '@/pages/Shop/CategoryPage';
import ProductPage from '@/pages/Product/ProductPage';
import CartPage from '@/pages/Cart/CartPage';
import Checkout from '@/pages/Checkout/Checkout';
import PaymentSuccess from '@/pages/Checkout/PaymentSuccess';
import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';
import ForgotPassword from '@/pages/Auth/ForgotPassword';
import ResetPassword from '@/pages/Auth/ResetPassword';
import Profile from '@/pages/Profile/Profile';
import Orders from '@/pages/Profile/Orders';
import Wishlist from '@/pages/Profile/Wishlist';
import NotFound from '@/pages/Error/NotFound';
import ServerError from '@/pages/Error/ServerError';

import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:category" element={<CategoryPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/search" element={/* lazy load */ <SearchPage />} />
            </Route>

            {/* Checkout */}
            <Route element={<CheckoutLayout />}>
                <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
                <Route path="/payment-success" element={<PrivateRoute><PaymentSuccess /></PrivateRoute>} />
            </Route>

            {/* Auth */}
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password/:token" element={<ResetPassword />} />
            </Route>

            {/* Profile */}
            <Route element={<PrivateRoute><MainLayout /></PrivateRoute>}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/wishlist" element={<Wishlist />} />
            </Route>

            {/* Admin */}
            <Route element={<AdminRoute><AdminLayout /></AdminRoute>}>
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/products" element={<Products />} />
                <Route path="/admin/orders" element={<Orders />} />
                <Route path="/admin/users" element={<Users />} />
                <Route path="/admin/reviews" element={<Reviews />} />
                <Route path="/admin/coupons" element={<Coupons />} />
                <Route path="/admin/settings" element={<Settings />} />
            </Route>

            {/* Error */}
            <Route path="*" element={<NotFound />} />
            <Route path="/500" element={<ServerError />} />
        </Routes>
    );
};

export default AppRoutes;
