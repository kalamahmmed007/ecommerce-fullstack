import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { productSchema } from '@/schemas/productSchema';
import { productApi } from '@/api/productApi';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import toast from 'react-hot-toast';

const EditProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(productSchema),
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await productApi.getProductById(id);
                reset(response.data);
            } catch (error) {
                toast.error(error.message || 'Failed to load product');
            } finally {
                setIsLoading(false);
            }
        };
        fetchProduct();
    }, [id, reset]);

    const onSubmit = async (data) => {
        try {
            setIsSubmitting(true);

            const formData = new FormData();
            for (let key in data) {
                if (key === 'images' && data.images.length) {
                    Array.from(data.images).forEach((file) => formData.append('images', file));
                } else {
                    formData.append(key, data[key]);
                }
            }

            await productApi.updateProduct(id, formData);
            toast.success('Product updated successfully');
            navigate('/admin/products');
        } catch (error) {
            toast.error(error.message || 'Failed to update product');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isLoading) return <p className="py-20 text-center">Loading...</p>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-8 text-3xl font-bold">Edit Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl space-y-6">
                <Input
                    {...register('name')}
                    label="Product Name"
                    error={errors.name?.message}
                />
                <Input
                    {...register('price')}
                    label="Price"
                    type="number"
                    error={errors.price?.message}
                />
                <Input
                    {...register('stock')}
                    label="Stock Quantity"
                    type="number"
                    error={errors.stock?.message}
                />
                <Input
                    {...register('category')}
                    label="Category ID"
                    error={errors.category?.message}
                />
                <Input
                    {...register('description')}
                    label="Description"
                    error={errors.description?.message}
                    textarea
                />
                <Input
                    {...register('images')}
                    label="Images (replace existing)"
                    type="file"
                    multiple
                    error={errors.images?.message}
                />

                <Button type="submit" loading={isSubmitting} size="lg">
                    Update Product
                </Button>
            </form>
        </div>
    );
};

export default EditProduct;
