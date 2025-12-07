import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserPassword } from "../../features/user/userSlice";

const ChangePassword = () => {
    const dispatch = useDispatch();
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserPassword({ oldPassword, newPassword }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 rounded bg-white p-4 shadow">
            <div>
                <label className="block text-gray-700">Old Password</label>
                <input
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    className="w-full rounded border px-3 py-2"
                />
            </div>
            <div>
                <label className="block text-gray-700">New Password</label>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full rounded border px-3 py-2"
                />
            </div>
            <button type="submit" className="rounded bg-green-500 px-4 py-2 text-white">
                Update Password
            </button>
        </form>
    );
};

export default ChangePassword;
