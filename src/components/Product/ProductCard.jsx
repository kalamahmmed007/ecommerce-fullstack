import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { formatPrice } from '@/utils/formatters';
import Badge from '@/components/UI/Badge';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem({
      productId: product._id,
      quantity: 1,
    });
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    toggleWishlist(product._id);
  };

  const discountPercentage = product.discount || 0;
  const finalPrice = product.price - (product.price * discountPercentage) / 100;

  return (
    <Link to={`/product/${product._id}`}>
      <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Badges */}
          <div className="absolute left-2 top-2 flex flex-col gap-2">
            {product.isFeatured && (
              <Badge variant="primary">Featured</Badge>
            )}
            {discountPercentage > 0 && (
              <Badge variant="danger">-{discountPercentage}%</Badge>
            )}
            {product.stock === 0 && (
              <Badge variant="default">Out of Stock</Badge>
            )}
          </div>

          {/* Quick Actions */}
          <div className="absolute right-2 top-2 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
            <button
              onClick={handleWishlist}
              className={`p-2 rounded-full bg-white shadow-md hover:scale-110 transition-transform ${isInWishlist(product._id) ? 'text-red-500' : 'text-gray-600'
                }`}
            >
              <Heart className="h-5 w-5" fill={isInWishlist(product._id) ? 'currentColor' : 'none'} />
            </button>
            <button className="rounded-full bg-white p-2 text-gray-600 shadow-md transition-transform hover:scale-110">
              <Eye className="h-5 w-5" />
            </button>
          </div>

          {/* Add to Cart - Overlay */}
          {product.stock > 0 && (
            <button
              onClick={handleAddToCart}
              className="absolute bottom-0 left-0 right-0 flex translate-y-full items-center justify-center gap-2 bg-primary-600 py-3 font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            >
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="mb-1 text-sm text-gray-500">{product.category}</p>
          <h3 className="mb-2 line-clamp-2 font-semibold text-gray-900">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="mb-2 flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(product.rating || 0)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                    }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-600">
              ({product.numReviews || 0})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary-600">
              {formatPrice(finalPrice)}
            </span>
            {discountPercentage > 0 && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.price)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;