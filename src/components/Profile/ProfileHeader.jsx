import { useSelector } from "react-redux";

const ProfileHeader = () => {
    const user = useSelector((state) => state.user.currentUser);

    return (
        <div className="flex items-center space-x-4 border-b p-4">
            <img
                src={user?.avatar || "/placeholder.png"}
                alt={user?.name}
                className="h-16 w-16 rounded-full object-cover"
            />
            <div>
                <h2 className="text-xl font-semibold">{user?.name}</h2>
                <p className="text-gray-600">{user?.email}</p>
            </div>
        </div>
    );
};

export default ProfileHeader;
