import { useState } from "react";

const Tooltip = ({ children, text }) => {
    const [visible, setVisible] = useState(false);
    return (
        <div className="relative inline-block" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            {children}
            {visible && (
                <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform rounded bg-black px-2 py-1 text-xs text-white">
                    {text}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
