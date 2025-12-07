import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartDrawer = ({ isOpen, onClose }) => {
    const { items } = useSelector((state) => state.cart);

    return (
        <div
            className={`fixed top-0 right-0 w-96 h-full bg-white shadow-lg transform transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            <button onClick={onClose} className="p-2 font-bold text-red-600">Close</button>
            <div className="h-full overflow-y-auto p-4">
                {items.length ? items.map((item) => <CartItem key={item.id} item={item} />) : <p>Your cart is empty</p>}
            </div>
        </div>
    );
};

export default CartDrawer;
