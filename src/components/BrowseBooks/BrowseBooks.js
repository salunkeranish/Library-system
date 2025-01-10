import React from "react";
import "./BrowseBooks.css";

const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: `https://picsum.photos/seed/1/240/360` },
  { id: 2, title: "1984", author: "George Orwell", image: `https://picsum.photos/seed/2/240/360` },
  { id: 3, title: "Becoming", author: "Michelle Obama", image: `https://picsum.photos/seed/3/240/360` },
  { id: 4, title: "To Kill a Mockingbird", author: "Harper Lee", image: `https://picsum.photos/seed/4/240/360` },
  { id: 5, title: "Pride and Prejudice", author: "Jane Austen", image: `https://picsum.photos/seed/5/240/360` },
  { id: 6, title: "The Catcher in the Rye", author: "J.D. Salinger", image: `https://picsum.photos/seed/6/240/360` },
  { id: 7, title: "Moby-Dick", author: "Herman Melville", image: `https://picsum.photos/seed/7/240/360` },
  { id: 8, title: "The Hobbit", author: "J.R.R. Tolkien", image: `https://picsum.photos/seed/8/240/360` },
  { id: 9, title: "Harry Potter", author: "J.K. Rowling", image: `https://picsum.photos/seed/9/240/360` },
  { id: 10, title: "The Alchemist", author: "Paulo Coelho", image: `https://picsum.photos/seed/10/240/360` },
  { id: 11, title: "The Road", author: "Cormac McCarthy", image: `https://picsum.photos/seed/11/240/360` },
  { id: 12, title: "War and Peace", author: "Leo Tolstoy", image: `https://picsum.photos/seed/12/240/360` },
];

const BrowseBooks = () => {
  return (
    <div className="browse-books">
      <h1 className="title">Browse Our Collection</h1>
      <div className="book-grid">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.image} alt={book.title} className="book-image" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">by {book.author}</p>
              <button className="details-button">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;
