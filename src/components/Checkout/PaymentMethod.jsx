const PaymentMethod = ({ selected, onSelect }) => {
  const methods = ["Credit Card", "PayPal", "Cash on Delivery"];

  return (
    <div className="space-y-2">
      {methods.map((method) => (
        <label key={method} className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            checked={selected === method}
            onChange={() => onSelect(method)}
            className="form-radio"
          />
          {method}
        </label>
      ))}
    </div>
  );
};

export default PaymentMethod;
