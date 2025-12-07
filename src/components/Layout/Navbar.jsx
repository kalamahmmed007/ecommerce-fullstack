import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-red-600">
          MyShop
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/shop" className="hover:text-red-600">
            Shop
          </Link>
          <Link to="/cart" className="hover:text-red-600">
            Cart
          </Link>
          <Link to="/profile" className="hover:text-red-600">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
