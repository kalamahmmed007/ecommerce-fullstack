import AddressCard from "./AddressCard";

const AddressBook = ({ addresses }) => {
    return (
        <div className="space-y-4">
            {addresses.length > 0 ? (
                addresses.map((addr) => <AddressCard key={addr.id} address={addr} />)
            ) : (
                <p className="text-gray-500">No addresses saved yet.</p>
            )}
        </div>
    );
};

export default AddressBook;
