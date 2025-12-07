import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 p-4">
            <div className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <Link to="/" className="inline-block">
                        <h1 className="text-4xl font-bold text-primary-600">ShopHub</h1>
                    </Link>
                </div>
                <div className="rounded-2xl bg-white p-8 shadow-xl">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;