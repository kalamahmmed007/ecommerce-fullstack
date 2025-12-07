import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaBox, FaUsers, FaClipboardList, FaTags } from "react-icons/fa";

const Sidebar = () => {
    const links = [
        { name: "Dashboard", path: "/admin", icon: <FaTachometerAlt /> },
        { name: "Products", path: "/admin/products", icon: <FaBox /> },
        { name: "Orders", path: "/admin/orders", icon: <FaClipboardList /> },
        { name: "Users", path: "/admin/users", icon: <FaUsers /> },
        { name: "Categories", path: "/admin/categories", icon: <FaTags /> },
    ];

    return (
        <div className="h-full w-64 bg-gray-800 p-4 text-white">
            <h2 className="mb-6 text-xl font-bold">Admin Panel</h2>
            {links.map((link) => (
                <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                        `flex items-center gap-2 px-4 py-2 rounded hover:bg-gray-700 ${isActive ? "bg-gray-700 font-semibold" : ""}`
                    }
                >
                    {link.icon} {link.name}
                </NavLink>
            ))}
        </div>
    );
};

export default Sidebar;
