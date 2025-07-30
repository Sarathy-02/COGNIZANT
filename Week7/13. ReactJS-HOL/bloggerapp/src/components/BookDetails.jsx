import React from 'react';

const BookDetails = ({ books }) => {
  return (
    <ul>
      {books.map(book => (
        <li key={book.id} style={{ marginBottom: '10px' }}>
          <h3>{book.bname}</h3>
          <h4>Price: ₹{book.price}</h4>
        </li>
      ))}
    </ul>
  );
};

export default BookDetails;
