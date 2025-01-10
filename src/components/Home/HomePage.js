import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home">
      <div className="welcome-section">
        <h1>Welcome to the Online Library</h1>
        <h2>Discover, Explore, and Dive into the World of Books</h2>
      </div>

      <div className="categories-section">
        <h3>Explore by Categories</h3>
        <ul className="categories-list">
          <li><Link to="/books/fiction">Fiction</Link></li>
          <li><Link to="/books/non-fiction">Non-Fiction</Link></li>
          <li><Link to="/books/sci-fi">Sci-Fi</Link></li>
          <li><Link to="/books/biography">Biography</Link></li>
        </ul>
      </div>

      <div className="add-book-section">
        <h3>Add Your Book to Our Library</h3>
        <p>Feel like sharing your book with the world? Click below to add it!</p>
        <Link to="/add-book" className="add-book-btn">Add Your Book</Link>
      </div>

      <div className="footer">
        <p>&copy; 2025 Online Library | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default HomePage;
