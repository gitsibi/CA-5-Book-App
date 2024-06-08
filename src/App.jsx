/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './components/BookList';
import Header from './components/Header';
import Register from './components/Register';
import './App.css';

const App = () => {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showRegister, setShowRegister] = useState(false);

    useEffect(() => {
        const fetchBooks = async () => {
            try 
            {
                const response = await axios.get('https://reactnd-books-api.udacity.com/books', {
                    headers: { 'Authorization': 'whatever-you-want' }
                });
                setBooks(response.data.books);
            } 
            catch (error) 
            {
                console.error('Error', error);
            }
        };
        fetchBooks();
    },[]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleRegister = (userData) => {
        localStorage.setItem('userData', JSON.stringify(userData));
        setShowRegister(false);
    };
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="App">
            <Header 
                searchTerm={searchTerm} 
                onSearch={handleSearch} 
                onRegisterClick={() => setShowRegister(true)} 
                showSearch={!showRegister}
            />
            {showRegister ? (
                <div className="register-form-container">
                    <Register onRegister={handleRegister} />
                </div>
            ) : (
                <BookList books={filteredBooks} />
            )}
        </div>
    );
};

export default App;
