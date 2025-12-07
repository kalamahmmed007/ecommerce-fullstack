import DataTable from "./DataTable";

const OrderTable = ({ orders }) => {
    const columns = [
        { key: "id", label: "Order ID" },
        { key: "user", label: "User" },
        { key: "total", label: "Total" },
        { key: "status", label: "Status" },
    ];

    return <DataTable columns={columns} data={orders} />;
};

export default OrderTable;
