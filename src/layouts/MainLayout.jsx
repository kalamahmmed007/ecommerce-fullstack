import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import ScrollToTop from '@/components/Common/ScrollToTop';
import BackToTop from '@/components/Common/BackToTop';

const MainLayout = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <ScrollToTop />
            <BackToTop />
        </div>
    );
};

export default MainLayout;