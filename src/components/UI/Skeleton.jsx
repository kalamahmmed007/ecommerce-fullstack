const Skeleton = ({ className = '', width, height }) => {
    return (
        <div
            className={`animate-pulse bg-gray-200 rounded ${className}`}
            style={{ width, height }}
        />
    );
};

export const SkeletonCard = () => {
    return (
        <div className="rounded-lg bg-white p-4 shadow-md">
            <Skeleton height="200px" className="mb-4" />
            <Skeleton height="20px" className="mb-2" />
            <Skeleton height="20px" width="60%" className="mb-4" />
            <div className="flex justify-between">
                <Skeleton height="30px" width="80px" />
                <Skeleton height="30px" width="100px" />
            </div>
        </div>
    );
};

export default Skeleton;