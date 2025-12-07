import { Package } from 'lucide-react';

const EmptyState = ({
    icon: Icon = Package,
    title = 'No items found',
    description,
    action,
}) => {
    return (
        <div className="flex flex-col items-center justify-center px-4 py-12 text-center">
            <Icon className="mb-4 h-16 w-16 text-gray-400" />
            <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
            {description && (
                <p className="mb-6 max-w-md text-gray-600">{description}</p>
            )}
            {action && action}
        </div>
    );
};

export default EmptyState;