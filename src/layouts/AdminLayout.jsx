import { Outlet } from 'react-router-dom';
import AdminSidebar from '@/components/Admin/Sidebar';

const AdminLayout = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <AdminSidebar />
            <div className="flex-1 overflow-auto">
                <div className="p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;