import React, { useState } from 'react';

const ComplaintRegister = () => {
  const [formData, setFormData] = useState({
    ename: '',
    complaint: ''
  });

  // Generate a random reference number for complaint tracking
  const generateReferenceNumber = () => {
    return Math.floor(100000 + Math.random() * 900000); // 6-digit random number
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.ename || !formData.complaint) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const refNumber = generateReferenceNumber();

    alert(
      `Thanks ${formData.ename}!\nYour complaint was submitted successfully.\nReference ID: ${refNumber}`
    );

    // Clear form after submission
    setFormData({
      ename: '',
      complaint: ''
    });
  };

  return (
    <div>
      <h2>Register your complaints here!!!</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Name: <br />
            <input
              type="text"
              name="ename"
              value={formData.ename}
              onChange={handleChange}
              placeholder="Enter your name"
              style={{ width: '100%', padding: '8px' }}
              required
            />
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>
            Complaint: <br />
            <textarea
              name="complaint"
              value={formData.complaint}
              onChange={handleChange}
              placeholder="Enter your complaint"
              style={{ width: '100%', padding: '8px', height: '100px' }}
              required
            />
          </label>
        </div>

        <button type="submit" style={{ padding: '10px 20px' }}>Submit</button>
      </form>
    </div>
  );
};

export default ComplaintRegister;
