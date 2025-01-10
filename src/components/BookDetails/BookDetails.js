import React from 'react';
import './BookDetails.css'; // Import the styles

const BookDetails = ({ match }) => {
  // Mock data for book details
  const book = {
    id: match.params.id,
    title: 'Sample Book Title',
    description: 'This is a detailed description of the book.',
    author: 'John Doe',
    category: match.params.category,
  };

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <h3>By {book.author}</h3>
      <p><strong>Category:</strong> {book.category}</p>
      <p>{book.description}</p>
      <a href="/">Back to Home</a>
    </div>
  );
};

export default BookDetails;
