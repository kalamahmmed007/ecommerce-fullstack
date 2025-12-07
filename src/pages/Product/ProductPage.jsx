// src/pages/Product/ProductPage.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '@/features/products/productSlice';
import { Heart, ShoppingCart, Minus, Plus, Star } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { formatPrice } from '@/utils/formatters';
import Button from '@/components/UI/Button';
import Badge from '@/components/UI/Badge';
import Loader from '@/components/UI/Loader';
import ProductDetails from '../../components/Product/ProductDetails';
import RelatedProducts from '../../components/Product/RelatedProducts';

const ProductPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { selectedProduct: product, loading: isLoading } = useSelector((state) => state.products);
    const { addItem } = useCart();
    const { isInWishlist, toggleWishlist } = useWishlist();

    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [dispatch, id]);

    if (isLoading) return <Loader fullScreen />;
    if (!product) return <div className="py-20 text-center">Product not found</div>;

    const discountPercentage = product.discount || 0;
    const finalPrice = product.price - (product.price * discountPercentage) / 100;

    const handleAddToCart = () => {
        addItem({
            productId: product._id,
            quantity,
        });
    };

    const incrementQuantity = () => {
        if (quantity < product.stock) setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Images */}
                <div>
                    <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-gray-100">
                        <img
                            src={product.images[selectedImage]}
                            alt={product.name}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {product.images.map((img, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedImage(i)}
                                className={`aspect-square rounded-lg overflow-hidden border-2 ${selectedImage === i ? 'border-primary-600' : 'border-transparent'
                                    }`}
                            >
                                <img src={img} alt={`${product.name} ${i + 1}`} className="h-full w-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Details */}
                <div>
                    {/* Badges */}
                    <div className="mb-4 flex gap-2">
                        {product.isFeatured && <Badge variant="primary">Featured</Badge>}
                        {product.stock === 0 && <Badge variant="danger">Out of Stock</Badge>}
                        {product.stock > 0 && product.stock < 10 && <Badge variant="warning">Only {product.stock} left</Badge>}
                    </div>

                    {/* Title & Category */}
                    <h1 className="mb-2 text-3xl font-bold">{product.name}</h1>
                    <p className="mb-4 text-gray-600">{product.category}</p>

                    {/* Rating */}
                    <div className="mb-6 flex items-center gap-2">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-5 h-5 ${i < Math.floor(product.rating || 0) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                />
                            ))}
                        </div>
                        <span className="text-gray-600">
                            {product.rating?.toFixed(1)} ({product.numReviews} reviews)
                        </span>
                    </div>

                    {/* Price */}
                    <div className="mb-6 flex items-center gap-3">
                        <span className="text-4xl font-bold text-primary-600">{formatPrice(finalPrice)}</span>
                        {discountPercentage > 0 && (
                            <>
                                <span className="text-2xl text-gray-500 line-through">{formatPrice(product.price)}</span>
                                <Badge variant="danger">-{discountPercentage}%</Badge>
                            </>
                        )}
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <h3 className="mb-2 font-semibold">Description</h3>
                        <p className="leading-relaxed text-gray-700">{product.description}</p>
                    </div>

                    {/* Quantity */}
                    {product.stock > 0 && (
                        <div className="mb-6">
                            <label className="mb-2 block font-semibold">Quantity</label>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center rounded-lg border border-gray-300">
                                    <button onClick={decrementQuantity} className="p-3 hover:bg-gray-100">
                                        <Minus className="h-4 w-4" />
                                    </button>
                                    <span className="px-6 py-2 font-semibold">{quantity}</span>
                                    <button onClick={incrementQuantity} className="p-3 hover:bg-gray-100">
                                        <Plus className="h-4 w-4" />
                                    </button>
                                </div>
                                <span className="text-gray-600">{product.stock} available</span>
                            </div>
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-4">
                        <Button onClick={handleAddToCart} size="lg" disabled={product.stock === 0} className="flex-1">
                            <ShoppingCart className="h-5 w-5" />
                            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                        </Button>
                        <Button
                            onClick={() => toggleWishlist(product._id)}
                            variant={isInWishlist(product._id) ? 'primary' : 'outline'}
                            size="lg"
                        >
                            <Heart className="h-5 w-5" fill={isInWishlist(product._id) ? 'currentColor' : 'none'} />
                        </Button>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-8 space-y-3 text-sm">
                        <div className="flex justify-between border-b py-2">
                            <span className="text-gray-600">SKU:</span>
                            <span className="font-medium">{product.sku || 'N/A'}</span>
                        </div>
                        <div className="flex justify-between border-b py-2">
                            <span className="text-gray-600">Category:</span>
                            <span className="font-medium">{product.category}</span>
                        </div>
                        {product.brand && (
                            <div className="flex justify-between border-b py-2">
                                <span className="text-gray-600">Brand:</span>
                                <span className="font-medium">{product.brand}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Additional Sections */}
            <ProductDetails product={product} />
            <RelatedProducts category={product.category} currentId={product._id} />
        </div>
    );
};

export default ProductPage;
