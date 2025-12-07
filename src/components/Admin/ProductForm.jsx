import { useState } from "react";

const ProductForm = ({ onSubmit, initialData }) => {
    const [title, setTitle] = useState(initialData?.title || "");
    const [price, setPrice] = useState(initialData?.price || 0);
    const [description, setDescription] = useState(initialData?.description || "");
    const [category, setCategory] = useState(initialData?.category || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, price, description, category });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 rounded bg-white p-4 shadow">
            <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full rounded border px-3 py-2" />
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full rounded border px-3 py-2" />
            <input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full rounded border px-3 py-2" />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full rounded border px-3 py-2" />
            <button type="submit" className="rounded bg-blue-500 px-4 py-2 text-white">Save Product</button>
        </form>
    );
};

export default ProductForm;
