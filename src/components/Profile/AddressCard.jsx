const AddressCard = ({ address }) => {
    return (
        <div className="flex items-center justify-between rounded border p-4">
            <div>
                <h4 className="font-semibold">{address.name}</h4>
                <p>{address.street}, {address.city}, {address.state}, {address.zip}</p>
                <p>{address.phone}</p>
            </div>
            <button className="text-red-500 hover:underline">Delete</button>
        </div>
    );
};

export default AddressCard;
