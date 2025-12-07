import { NavLink } from "react-router-dom";

const ProfileSidebar = () => {
    const links = [
        { name: "Profile", path: "/profile" },
        { name: "Orders", path: "/profile/orders" },
        { name: "Wishlist", path: "/profile/wishlist" },
        { name: "Reviews", path: "/profile/reviews" },
        { name: "Addresses", path: "/profile/addresses" },
        { name: "Settings", path: "/profile/settings" },
    ];

    return (
        <div className="h-full w-64 border-r bg-white p-4">
            {links.map((link) => (
                <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                        `block px-4 py-2 rounded hover:bg-gray-100 ${isActive ? "bg-gray-200 font-semibold" : ""}`
                    }
                >
                    {link.name}
                </NavLink>
            ))}
        </div>
    );
};

export default ProfileSidebar;
