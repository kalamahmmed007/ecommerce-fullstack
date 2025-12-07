import { useState } from "react";

const Tabs = ({ tabs }) => {
    const [active, setActive] = useState(0);

    return (
        <div>
            <div className="mb-4 flex border-b">
                {tabs.map((tab, idx) => (
                    <button
                        key={idx}
                        className={`px-4 py-2 -mb-px ${idx === active ? "border-b-2 border-blue-500 font-bold" : "text-gray-500"}`}
                        onClick={() => setActive(idx)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div>{tabs[active].content}</div>
        </div>
    );
};

export default Tabs;
