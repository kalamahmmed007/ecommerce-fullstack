import { useEffect, useState } from 'react';
import StatsCard from '@/components/Admin/StatsCard';
import { orderApi } from '@/api/orderApi';
import { productApi } from '@/api/productApi';
import { userApi } from '@/api/userApi';
import { reviewApi } from '@/api/reviewApi';

const Dashboard = () => {
    const [stats, setStats] = useState({
        totalOrders: 0,
        totalRevenue: 0,
        totalUsers: 0,
        totalProducts: 0,
        totalReviews: 0,
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const ordersRes = await orderApi.getAllOrders();
                const productsRes = await productApi.getAllProducts();
                const usersRes = await userApi.getAllUsers();
                const reviewsRes = await reviewApi.getAllReviews();

                const totalRevenue = ordersRes.data.reduce((sum, order) => sum + order.totalAmount, 0);

                setStats({
                    totalOrders: ordersRes.data.length,
                    totalRevenue,
                    totalUsers: usersRes.data.length,
                    totalProducts: productsRes.data.length,
                    totalReviews: reviewsRes.data.length,
                });
            } catch (err) {
                console.error('Failed to fetch admin stats', err);
            }
        };

        fetchStats();
    }, []);

    return (
        <div className="container mx-auto space-y-8 px-4 py-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                <StatsCard title="Total Orders" value={stats.totalOrders} />
                <StatsCard title="Revenue" value={`$${stats.totalRevenue.toFixed(2)}`} />
                <StatsCard title="Users" value={stats.totalUsers} />
                <StatsCard title="Products" value={stats.totalProducts} />
                <StatsCard title="Reviews" value={stats.totalReviews} />
            </div>

            {/* Future: charts, recent orders, top products, etc. */}
        </div>
    );
};

export default Dashboard;
