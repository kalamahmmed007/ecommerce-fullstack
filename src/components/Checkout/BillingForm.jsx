import { useState } from "react";

const BillingForm = ({ onNext }) => {
    const [form, setForm] = useState({ cardNumber: "", expiry: "", cvv: "" });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext(form);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input name="cardNumber" value={form.cardNumber} onChange={handleChange} placeholder="Card Number" className="w-full rounded border p-2" />
            <input name="expiry" value={form.expiry} onChange={handleChange} placeholder="MM/YY" className="w-full rounded border p-2" />
            <input name="cvv" value={form.cvv} onChange={handleChange} placeholder="CVV" className="w-full rounded border p-2" />
            <button type="submit" className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700">Next</button>
        </form>
    );
};

export default BillingForm;
