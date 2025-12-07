import Skeleton from '@/components/UI/Skeleton';

const ProductSkeleton = () => {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow-md">
            <Skeleton height="300px" className="w-full" />
            <div className="space-y-3 p-4">
                <Skeleton height="16px" width="60%" />
                <Skeleton height="20px" />
                <Skeleton height="20px" width="80%" />
                <div className="flex items-center gap-2">
                    <Skeleton height="24px" width="80px" />
                    <Skeleton height="16px" width="60px" />
                </div>
            </div>
        </div>
    );
};

export default ProductSkeleton;