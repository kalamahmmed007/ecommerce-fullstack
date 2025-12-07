import DataTable from "./DataTable";

const UserTable = ({ users }) => {
    const columns = [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "role", label: "Role" },
    ];

    return <DataTable columns={columns} data={users} />;
};

export default UserTable;
