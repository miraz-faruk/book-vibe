import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookToReadList } from "../../utility/localstorage";
import ReadBook from "../ReadBook/ReadBook";

const ListedBooks = () => {
    const books = useLoaderData();

    const [listedBooks, setListedBooks] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoredBookToReadList()
        if (books.length > 0) {
            const booksListed = []
            for (const id of storedBookIds) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    booksListed.push(book);
                }
            }
            setListedBooks(booksListed);
        }
    }, [books])
    return (
        <div>
            <h2 className="bg-[#1313130D] text-[28px] font-bold rounded-2xl text-center py-8 mb-8">Books {listedBooks.length}</h2>
            <ul>
                {
                    listedBooks.map(book => <li key={book.bookId}> <ReadBook book={book}></ReadBook></li>)
                }
            </ul>
        </div>
    );
};

export default ListedBooks;