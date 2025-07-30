import React from 'react';

const OfficeCard = ({ office }) => {
  const rentStyle = {
    color: office.rent < 60000 ? 'red' : office.rent > 60000 ? 'green' : 'black',
    fontWeight: 'bold'
  };

  return (
    <div className="office-card">
      <img src={office.image} alt={office.name} className="office-image" />
      <h2>{office.name}</h2>
      <p><span style={rentStyle}>Rent: ₹{office.rent}</span></p>
      <p>Address: {office.address}</p>
    </div>
  );
};

export default OfficeCard;
