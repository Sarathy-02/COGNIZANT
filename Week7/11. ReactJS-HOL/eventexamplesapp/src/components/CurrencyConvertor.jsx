import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = () => {
    const conversionRate = 0.011; // 1 INR = 0.011 EUR (example)
    const result = (parseFloat(rupees) * conversionRate).toFixed(2);
    setEuro(result);
  };

  return (
    <div>
      <h2>Currency Convertor (₹ to €)</h2>
      <input
        type="number"
        value={rupees}
        placeholder="Enter amount in ₹"
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert</button>
      {euro && <p>Converted Amount: €{euro}</p>}
    </div>
  );
};

export default CurrencyConvertor;
