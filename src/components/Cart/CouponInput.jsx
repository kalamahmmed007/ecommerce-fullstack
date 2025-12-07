import { useState } from "react";

const CouponInput = ({ applyCoupon }) => {
    const [code, setCode] = useState("");

    const handleApply = () => {
        applyCoupon(code);
        setCode("");
    };

    return (
        <div className="mt-4 flex gap-2">
            <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter coupon code"
                className="flex-1 rounded border p-2"
            />
            <button onClick={handleApply} className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700">
                Apply
            </button>
        </div>
    );
};

export default CouponInput;
