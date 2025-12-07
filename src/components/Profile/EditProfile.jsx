import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfile } from "../../features/user/userSlice";

const EditProfile = () => {
    const user = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();

    const [name, setName] = useState(user?.name || "");
    const [email, setEmail] = useState(user?.email || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserProfile({ name, email }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 rounded bg-white p-4 shadow">
            <div>
                <label className="block text-gray-700">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded border px-3 py-2"
                />
            </div>
            <div>
                <label className="block text-gray-700">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded border px-3 py-2"
                />
            </div>
            <button type="submit" className="rounded bg-blue-500 px-4 py-2 text-white">
                Save Changes
            </button>
        </form>
    );
};

export default EditProfile;
