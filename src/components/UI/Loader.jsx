import Spinner from './Spinner';

const Loader = ({ fullScreen = false, text = 'Loading...' }) => {
    if (fullScreen) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
                <div className="text-center">
                    <Spinner size="lg" />
                    {text && <p className="mt-4 text-gray-600">{text}</p>}
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center py-12">
            <div className="text-center">
                <Spinner size="lg" />
                {text && <p className="mt-4 text-gray-600">{text}</p>}
            </div>
        </div>
    );
};

export default Loader;