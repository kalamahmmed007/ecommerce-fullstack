import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

const Alert = ({
    type = 'info',
    title,
    message,
    onClose,
    className = '',
}) => {
    const types = {
        success: {
            bg: 'bg-green-50',
            border: 'border-green-200',
            text: 'text-green-800',
            icon: CheckCircle,
        },
        error: {
            bg: 'bg-red-50',
            border: 'border-red-200',
            text: 'text-red-800',
            icon: AlertCircle,
        },
        warning: {
            bg: 'bg-yellow-50',
            border: 'border-yellow-200',
            text: 'text-yellow-800',
            icon: AlertTriangle,
        },
        info: {
            bg: 'bg-blue-50',
            border: 'border-blue-200',
            text: 'text-blue-800',
            icon: Info,
        },
    };

    const { bg, border, text, icon: Icon } = types[type];

    return (
        <div className={`${bg} ${border} border rounded-lg p-4 ${className}`}>
            <div className="flex">
                <Icon className={`w-5 h-5 ${text} flex-shrink-0`} />
                <div className="ml-3 flex-1">
                    {title && (
                        <h3 className={`text-sm font-medium ${text}`}>{title}</h3>
                    )}
                    {message && (
                        <p className={`text-sm ${text} ${title ? 'mt-1' : ''}`}>
                            {message}
                        </p>
                    )}
                </div>
                {onClose && (
                    <button
                        onClick={onClose}
                        className={`ml-3 flex-shrink-0 ${text} hover:opacity-75`}
                    >
                        <X className="h-5 w-5" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Alert;