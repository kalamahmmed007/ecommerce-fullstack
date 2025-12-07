import { useEffect, useState } from 'react';
import { categoryApi } from '@/api/categoryApi';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import toast from 'react-hot-toast';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchCategories = async () => {
        try {
            setLoading(true);
            const response = await categoryApi.getCategories();
            setCategories(response.data);
        } catch (error) {
            toast.error(error.message || 'Failed to load categories');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleAdd = async () => {
        if (!newCategory.trim()) return toast.error('Category name is required');
        try {
            setLoading(true);
            const response = await categoryApi.createCategory({ name: newCategory });
            setCategories([...categories, response.data]);
            setNewCategory('');
            toast.success('Category added successfully');
        } catch (error) {
            toast.error(error.message || 'Failed to add category');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this category?')) return;
        try {
            setLoading(true);
            await categoryApi.deleteCategory(id);
            setCategories(categories.filter(cat => cat._id !== id));
            toast.success('Category deleted');
        } catch (error) {
            toast.error(error.message || 'Failed to delete category');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold">Manage Categories</h1>

            <div className="mb-6 flex gap-3">
                <Input
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="New category name"
                />
                <Button onClick={handleAdd} loading={loading}>
                    Add
                </Button>
            </div>

            <div className="space-y-2">
                {categories.map((cat) => (
                    <div
                        key={cat._id}
                        className="flex items-center justify-between rounded border p-3"
                    >
                        <span>{cat.name}</span>
                        <Button
                            size="sm"
                            variant="danger"
                            onClick={() => handleDelete(cat._id)}
                        >
                            Delete
                        </Button>
                    </div>
                ))}
                {categories.length === 0 && !loading && (
                    <p className="text-gray-500">No categories found.</p>
                )}
            </div>
        </div>
    );
};

export default Categories;
