import React, { useEffect, useState } from 'react';

const PagesToRead = () => {
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        // Function to retrieve stored book IDs from localStorage
        const getStoredBookToReadList = () => {
            const storedBookToReadList = localStorage.getItem('book-read-list');
            if (storedBookToReadList) {
                return JSON.parse(storedBookToReadList);
            }
            return [];
        }

        // Get stored book IDs
        const storedBookIds = getStoredBookToReadList();

        // Example function to fetch book details from an API
        const fetchBookDetails = async (bookId) => {
            try {
                // Replace this with your actual API endpoint
                const response = await fetch(`https://example-api.com/books/${bookId}`);
                if (response.ok) {
                    const bookData = await response.json();
                    return { id: bookId, title: bookData.title, author: bookData.author, pages: bookData.pages };
                } else {
                    throw new Error('Failed to fetch book details');
                }
            } catch (error) {
                console.error('Error fetching book details:', error);
                return null;
            }
        }

        // Fetch details for each stored book ID
        const fetchBooksInformation = async () => {
            const bookDetailsPromises = storedBookIds.map(async (id) => {
                return await fetchBookDetails(id);
            });
            const booksInformation = await Promise.all(bookDetailsPromises);
            setReadBooks(booksInformation.filter(book => book !== null));
        }

        // Call the function to fetch book details
        fetchBooksInformation();
    }, []); // Empty dependency array ensures useEffect runs once on component mount

    return (
        <div>
            <h2>Pages To Read</h2>
            <ul>
                {readBooks.map(book => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> by {book.author}, Pages: {book.pages}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PagesToRead;
