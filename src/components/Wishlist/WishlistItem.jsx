import WishlistButton from "./WishlistButton";

const WishlistItem = ({ item }) => {
    return (
        <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center">
                <img src={item.image} alt={item.name} className="mr-4 h-16 w-16 object-cover" />
                <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-gray-600">${item.price}</p>
                </div>
            </div>
            <WishlistButton productId={item.id} />
        </div>
    );
};

export default WishlistItem;
