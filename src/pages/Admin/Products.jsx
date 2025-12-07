import { useState, useEffect } from 'react';
import { productApi } from '@/api/productApi';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { formatPrice } from '@/utils/formatters';
import Button from '@/components/UI/Button';
import Card from '@/components/UI/Card';
import Badge from '@/components/UI/Badge';
import Loader from '@/components/UI/Loader';
import toast from 'react-hot-toast';

const AdminProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await productApi.getProducts({ limit: 50 });
            setProducts(response.data.products);
        } catch (error) {
            toast.error('Failed to fetch products');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await productApi.deleteProduct(id);
                toast.success('Product deleted successfully');
                fetchProducts();
            } catch (error) {
                toast.error('Failed to delete product');
            }
        }
    };

    if (loading) return <Loader fullScreen />;

    return (
        <div>
            <div className="mb-8 flex items-center justify-between">
                <h1 className="text-3xl font-bold">Products</h1>
                <Button>
                    <Plus className="h-5 w-5" />
                    Add Product
                </Button>
            </div>

            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="px-4 py-3 text-left">Product</th>
                                <th className="px-4 py-3 text-left">Category</th>
                                <th className="px-4 py-3 text-left">Price</th>
                                <th className="px-4 py-3 text-left">Stock</th>
                                <th className="px-4 py-3 text-left">Status</th>
                                <th className="px-4 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product._id} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={product.images[0]}
                                                alt={product.name}
                                                className="h-12 w-12 rounded object-cover"
                                            />
                                            <div>
                                                <p className="line-clamp-1 font-medium">{product.name}</p>
                                                <p className="text-sm text-gray-600">#{product._id.slice(-6)}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">{product.category}</td>
                                    <td className="px-4 py-3 font-semibold">
                                        {formatPrice(product.price)}
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className={product.stock < 10 ? 'text-red-600' : ''}>
                                            {product.stock}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <Badge variant={product.isActive ? 'success' : 'danger'}>
                                            {product.isActive ? 'Active' : 'Inactive'}
                                        </Badge>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="rounded p-2 hover:bg-gray-100">
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(product._id)}
                                                className="rounded p-2 text-red-600 hover:bg-red-50"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default AdminProducts;