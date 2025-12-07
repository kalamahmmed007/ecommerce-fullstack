import { useState } from "react";

const LoginForm = ({ onSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password });
    };

    return (
        <form onSubmit={handleSubmit} className="mx-auto max-w-md rounded-md bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-bold">Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-3 w-full rounded border p-2"
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-3 w-full rounded border p-2"
                required
            />
            <button type="submit" className="w-full rounded bg-red-600 py-2 text-white hover:bg-red-700">
                Login
            </button>
        </form>
    );
};

export default LoginForm;
