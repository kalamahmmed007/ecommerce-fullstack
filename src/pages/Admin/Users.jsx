import { useState, useEffect } from 'react';
import { userApi } from '@/api/userApi';
import { formatDate } from '@/utils/formatters';
import Badge from '@/components/UI/Badge';
import Card from '@/components/UI/Card';
import Loader from '@/components/UI/Loader';
import toast from 'react-hot-toast';

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // This would be a real API call
        // For now, using dummy data
        setTimeout(() => {
            setUsers([
                {
                    _id: '1',
                    name: 'John Doe',
                    email: 'john@example.com',
                    role: 'user',
                    createdAt: new Date(),
                    isEmailVerified: true,
                },
                {
                    _id: '2',
                    name: 'Admin User',
                    email: 'admin@example.com',
                    role: 'admin',
                    createdAt: new Date(),
                    isEmailVerified: true,
                },
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) return <Loader fullScreen />;

    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Users</h1>

            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="px-4 py-3 text-left">Name</th>
                                <th className="px-4 py-3 text-left">Email</th>
                                <th className="px-4 py-3 text-left">Role</th>
                                <th className="px-4 py-3 text-left">Verified</th>
                                <th className="px-4 py-3 text-left">Joined</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-3 font-medium">{user.name}</td>
                                    <td className="px-4 py-3">{user.email}</td>
                                    <td className="px-4 py-3">
                                        <Badge variant={user.role === 'admin' ? 'primary' : 'default'}>
                                            {user.role}
                                        </Badge>
                                    </td>
                                    <td className="px-4 py-3">
                                        <Badge variant={user.isEmailVerified ? 'success' : 'warning'}>
                                            {user.isEmailVerified ? 'Verified' : 'Pending'}
                                        </Badge>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        {formatDate(user.createdAt)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default AdminUsers;