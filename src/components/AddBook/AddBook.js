import React, { useState } from 'react';
import './AddBook.css'; // Import the styles

const AddBook = () => {
  const [book, setBook] = useState({ title: '', author: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to add the book goes here
    console.log('Book added:', book);
  };

  return (
    <div className="add-book">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Book Title</label>
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          required
        />

        <label>Author</label>
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={book.description}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
