import { useState } from "react";
import "./BillPayment.css"; // Importing the CSS file

const BillPayment = () => {
  const [amount, setAmount] = useState("");
  const [provider, setProvider] = useState("");

  const handlePayment = () => {
    alert(`Paying ₹${amount} to ${provider}`);
  };

  return (
    <div className="bill-container">
      <h2 className="bill-title">Electricity Bill Payment</h2>
      <input
        type="text"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="bill-input"
      />
      <input
        type="text"
        placeholder="Electricity Provider"
        value={provider}
        onChange={(e) => setProvider(e.target.value)}
        className="bill-input"
      />
      <button onClick={handlePayment} className="bill-button">
        Pay Now
      </button>
    </div>
  );
};

export default BillPayment;
