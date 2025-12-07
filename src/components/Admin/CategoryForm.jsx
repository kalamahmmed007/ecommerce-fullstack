import { useState } from "react";

const CategoryForm = ({ onSubmit, initialData }) => {
    const [name, setName] = useState(initialData?.name || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 rounded bg-white p-4 shadow">
            <input placeholder="Category Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded border px-3 py-2" />
            <button type="submit" className="rounded bg-green-500 px-4 py-2 text-white">Save Category</button>
        </form>
    );
};

export default CategoryForm;
