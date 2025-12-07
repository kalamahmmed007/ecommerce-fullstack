import { useState } from "react";

const ResetPassword = ({ onSubmit }) => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) return alert("Passwords do not match");
        onSubmit(password);
    };

    return (
        <form onSubmit={handleSubmit} className="mx-auto max-w-md rounded-md bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-bold">Reset Password</h2>
            <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-3 w-full rounded border p-2"
                required
            />
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mb-3 w-full rounded border p-2"
                required
            />
            <button type="submit" className="w-full rounded bg-red-600 py-2 text-white hover:bg-red-700">
                Reset Password
            </button>
        </form>
    );
};

export default ResetPassword;
