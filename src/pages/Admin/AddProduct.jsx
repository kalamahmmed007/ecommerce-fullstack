import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { productSchema } from '@/schemas/productSchema';
import { productApi } from '@/api/productApi';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(productSchema),
    });

    const onSubmit = async (data) => {
        try {
            setIsSubmitting(true);

            const formData = new FormData();
            for (let key in data) {
                if (key === 'images') {
                    Array.from(data.images).forEach((file) => formData.append('images', file));
                } else {
                    formData.append(key, data[key]);
                }
            }

            await productApi.createProduct(formData);
            toast.success('Product added successfully');
            navigate('/admin/products');
        } catch (error) {
            toast.error(error.message || 'Failed to add product');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-8 text-3xl font-bold">Add Product</h1>
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
                    label="Images"
                    type="file"
                    multiple
                    error={errors.images?.message}
                />

                <Button type="submit" loading={isSubmitting} size="lg">
                    Add Product
                </Button>
            </form>
        </div>
    );
};

export default AddProduct;
