import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import BrowseBooks from './components/BrowseBooks/BrowseBooks';
import BookDetails from './components/BookDetails/BookDetails';
import AddBook from './components/AddBook/AddBook';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="books/:category" element={<BrowseBooks />} /> {/* Books by category */}
        <Route path="books/:id" element={<BookDetails />} /> {/* Book details by id */}
        <Route path="add-book" element={<AddBook />} />
        <Route path="*" element={<NotFound />} /> {/* 404 page */}
      </Routes>
    </Router>
  );
};

export default App;
