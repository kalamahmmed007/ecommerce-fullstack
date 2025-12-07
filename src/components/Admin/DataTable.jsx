const DataTable = ({ columns, data }) => {
    return (
        <table className="min-w-full overflow-hidden rounded border">
            <thead className="bg-gray-200">
                <tr>
                    {columns.map((col) => (
                        <th key={col.key} className="px-4 py-2 text-left">{col.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, i) => (
                    <tr key={i} className="border-t hover:bg-gray-50">
                        {columns.map((col) => (
                            <td key={col.key} className="px-4 py-2">{row[col.key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;
