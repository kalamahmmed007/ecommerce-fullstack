import { useState } from "react";

const ShippingForm = ({ onNext }) => {
    const [form, setForm] = useState({ name: "", address: "", city: "", zip: "" });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext(form);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="w-full rounded border p-2" />
            <input name="address" value={form.address} onChange={handleChange} placeholder="Address" className="w-full rounded border p-2" />
            <input name="city" value={form.city} onChange={handleChange} placeholder="City" className="w-full rounded border p-2" />
            <input name="zip" value={form.zip} onChange={handleChange} placeholder="ZIP Code" className="w-full rounded border p-2" />
            <button type="submit" className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700">Next</button>
        </form>
    );
};

export default ShippingForm;
