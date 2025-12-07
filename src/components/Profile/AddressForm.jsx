import { useState } from "react";

const AddressForm = ({ onSave }) => {
    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ name, street, city, state, zip, phone });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 rounded bg-white p-4 shadow">
            <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded border px-3 py-2" />
            <input placeholder="Street" value={street} onChange={(e) => setStreet(e.target.value)} className="w-full rounded border px-3 py-2" />
            <input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} className="w-full rounded border px-3 py-2" />
            <input placeholder="State" value={state} onChange={(e) => setState(e.target.value)} className="w-full rounded border px-3 py-2" />
            <input placeholder="ZIP" value={zip} onChange={(e) => setZip(e.target.value)} className="w-full rounded border px-3 py-2" />
            <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded border px-3 py-2" />
            <button type="submit" className="rounded bg-blue-500 px-4 py-2 text-white">Save Address</button>
        </form>
    );
};

export default AddressForm;
