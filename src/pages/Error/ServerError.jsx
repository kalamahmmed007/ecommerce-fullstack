import { useNavigate } from 'react-router-dom';
import Button from '@/components/UI/Button';

const ServerError = () => {
    const navigate = useNavigate();

    return (
        <div className="flex h-[80vh] flex-col items-center justify-center px-4 text-center">
            <h1 className="mb-4 text-6xl font-bold text-yellow-600">500</h1>
            <p className="mb-6 text-xl">Something went wrong on our end. Please try again later.</p>
            <Button onClick={() => navigate('/')} size="lg">
                Go Home
            </Button>
        </div>
    );
};

export default ServerError;
