import { useState } from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="rounded bg-red-600 p-2 text-white">
                Menu
            </button>
            {open && (
                <div className="absolute left-0 top-16 flex w-full flex-col gap-2 bg-white p-4 shadow-md">
                    <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link to="/shop" onClick={() => setOpen(false)}>Shop</Link>
                    <Link to="/cart" onClick={() => setOpen(false)}>Cart</Link>
                    <Link to="/profile" onClick={() => setOpen(false)}>Profile</Link>
                </div>
            )}
        </div>
    );
};

export default MobileNav;
