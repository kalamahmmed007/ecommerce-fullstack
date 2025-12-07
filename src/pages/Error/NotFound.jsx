import { useNavigate } from 'react-router-dom';
import Button from '@/components/UI/Button';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex h-[80vh] flex-col items-center justify-center px-4 text-center">
            <h1 className="mb-4 text-6xl font-bold text-red-600">404</h1>
            <p className="mb-6 text-xl">Oops! The page you are looking for does not exist.</p>
            <Button onClick={() => navigate('/')} size="lg">
                Go Home
            </Button>
        </div>
    );
};

export default NotFound;
