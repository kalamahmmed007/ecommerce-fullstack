import { useEffect, useState } from 'react';
import { couponApi } from '@/api/couponApi';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import Card from '@/components/UI/Card';
import toast from 'react-hot-toast';

const Coupons = () => {
    const [coupons, setCoupons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [newCoupon, setNewCoupon] = useState({ code: '', discount: '' });

    const fetchCoupons = async () => {
        try {
            setLoading(true);
            const response = await couponApi.getCoupons();
            setCoupons(response.data);
        } catch (error) {
            toast.error(error.message || 'Failed to fetch coupons');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCoupons();
    }, []);

    const handleCreateCoupon = async (e) => {
        e.preventDefault();
        try {
            if (!newCoupon.code || !newCoupon.discount) {
                toast.error('Please fill in all fields');
                return;
            }
            setLoading(true);
            const response = await couponApi.createCoupon(newCoupon);
            setCoupons([...coupons, response.data]);
            setNewCoupon({ code: '', discount: '' });
            toast.success('Coupon created successfully!');
        } catch (error) {
            toast.error(error.message || 'Failed to create coupon');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteCoupon = async (id) => {
        try {
            setLoading(true);
            await couponApi.deleteCoupon(id);
            setCoupons(coupons.filter(c => c._id !== id));
            toast.success('Coupon deleted successfully!');
        } catch (error) {
            toast.error(error.message || 'Failed to delete coupon');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold">Manage Coupons</h1>

            <Card className="mb-6">
                <form className="flex gap-3" onSubmit={handleCreateCoupon}>
                    <Input
                        placeholder="Coupon Code"
                        value={newCoupon.code}
                        onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value })}
                    />
                    <Input
                        type="number"
                        placeholder="Discount (%)"
                        value={newCoupon.discount}
                        onChange={(e) => setNewCoupon({ ...newCoupon, discount: e.target.value })}
                    />
                    <Button type="submit" loading={loading}>
                        Add Coupon
                    </Button>
                </form>
            </Card>

            <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border p-2">Code</th>
                            <th className="border p-2">Discount</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coupons.map(coupon => (
                            <tr key={coupon._id} className="hover:bg-gray-50">
                                <td className="border p-2">{coupon.code}</td>
                                <td className="border p-2">{coupon.discount}%</td>
                                <td className="border p-2">
                                    <Button
                                        size="sm"
                                        variant="danger"
                                        onClick={() => handleDeleteCoupon(coupon._id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        {coupons.length === 0 && !loading && (
                            <tr>
                                <td colSpan="3" className="py-4 text-center text-gray-500">
                                    No coupons available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Coupons;
