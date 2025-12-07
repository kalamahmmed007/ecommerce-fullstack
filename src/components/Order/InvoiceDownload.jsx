const InvoiceDownload = ({ order }) => {
    const handleDownload = () => {
        const invoice = `
      Order ID: ${order.id}
      Total: $${order.total.toFixed(2)}
      Items:\n${order.items.map(item => `${item.name} x ${item.quantity} - $${item.price.toFixed(2)}`).join("\n")}
    `;
        const blob = new Blob([invoice], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `Invoice_${order.id}.txt`;
        link.click();
    };

    return (
        <button onClick={handleDownload} className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700">
            Download Invoice
        </button>
    );
};

export default InvoiceDownload;
