import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileSidebar from '@/components/Profile/ProfileSidebar';
import { useAuth } from '@/hooks/useAuth';

const Profile = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    return (
        <div className="container mx-auto flex flex-col gap-8 px-4 py-8 lg:flex-row">
            <ProfileSidebar />

            <div className="flex-1 space-y-6">
                <h1 className="text-3xl font-bold">Welcome, {user?.fullName}</h1>
                <p className="text-gray-600">
                    Manage your orders, wishlist, reviews, addresses, and account settings from here.
                </p>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Placeholder cards linking to sections */}
                    <div className="cursor-pointer rounded-lg border p-6 hover:shadow-lg">
                        <h2 className="mb-2 text-xl font-semibold">My Orders</h2>
                        <p className="text-gray-500">View all your past orders</p>
                    </div>

                    <div className="cursor-pointer rounded-lg border p-6 hover:shadow-lg">
                        <h2 className="mb-2 text-xl font-semibold">Wishlist</h2>
                        <p className="text-gray-500">See your saved products</p>
                    </div>

                    <div className="cursor-pointer rounded-lg border p-6 hover:shadow-lg">
                        <h2 className="mb-2 text-xl font-semibold">Reviews</h2>
                        <p className="text-gray-500">Check your submitted reviews</p>
                    </div>

                    <div className="cursor-pointer rounded-lg border p-6 hover:shadow-lg">
                        <h2 className="mb-2 text-xl font-semibold">Addresses</h2>
                        <p className="text-gray-500">Manage shipping addresses</p>
                    </div>

                    <div className="cursor-pointer rounded-lg border p-6 hover:shadow-lg">
                        <h2 className="mb-2 text-xl font-semibold">Settings</h2>
                        <p className="text-gray-500">Change your password and account info</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
