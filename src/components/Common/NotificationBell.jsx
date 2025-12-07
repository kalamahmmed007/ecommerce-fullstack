import { useState } from "react";

const NotificationBell = ({ notifications = [] }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <button onClick={() => setOpen(!open)} className="relative p-2">
                🔔
                {notifications.length > 0 && (
                    <span className="absolute right-0 top-0 inline-block h-2 w-2 rounded-full bg-red-600"></span>
                )}
            </button>
            {open && (
                <div className="absolute right-0 z-50 mt-2 w-64 rounded border bg-white p-2 shadow-lg">
                    {notifications.length === 0 ? (
                        <p className="text-sm text-gray-500">No notifications</p>
                    ) : (
                        notifications.map((n, idx) => (
                            <div key={idx} className="cursor-pointer rounded p-2 hover:bg-gray-100">
                                {n.message}
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default NotificationBell;
