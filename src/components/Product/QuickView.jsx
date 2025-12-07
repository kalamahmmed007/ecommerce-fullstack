import { Link } from "react-router-dom";

const QuickView = ({ product }) => {
    return (
        <div className="rounded border p-4 shadow transition hover:shadow-lg">
            <img src={product.image} alt={product.name} className="mb-2 h-32 w-full rounded object-cover" />
            <h3 className="font-semibold">{product.name}</h3>
            <p className="font-bold text-red-600">${product.price}</p>
            <Link to={`/product/${product.id}`} className="mt-2 inline-block text-blue-600">
                View Details
            </Link>
        </div>
    );
};

export default QuickView;
