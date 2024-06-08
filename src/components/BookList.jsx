/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const BookList = ({ books }) => {
    return (
        <div className="book-container">
            {books.map(book => (
                <div key={book.id} className="book-list">
                    <img src={book.imageLinks.thumbnail} alt={book.title} />
                    <div className="book-info">
                        <h3>{book.title}</h3>
                        <p>Author: {book.authors.join(', ')}</p>
                        <p>Price: Free</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookList;
