import { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        alert(`Subscribed with ${email}`);
        setEmail("");
    };

    return (
        <section className="bg-blue-50 px-4 py-12 text-center">
            <h2 className="mb-4 text-2xl font-bold">Subscribe to our Newsletter</h2>
            <form onSubmit={handleSubscribe} className="flex flex-wrap justify-center gap-2">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-64 rounded border px-4 py-2"
                    required
                />
                <button type="submit" className="rounded bg-blue-500 px-4 py-2 text-white">
                    Subscribe
                </button>
            </form>
        </section>
    );
};

export default Newsletter;
