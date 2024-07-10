import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookToReadList } from "../../utility/localstorage";
import ReadBook from "../ReadBook/ReadBook";
import { IoIosArrowDown } from "react-icons/io";

const ListedBooks = () => {
    const books = useLoaderData();

    const [listedBooks, setListedBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleBooksFilter = filter => {
        if (filter === 'sort by') {
            setDisplayBooks(listedBooks);
        }
        else if (filter === 'rating') {
            const ratingBooks = [...listedBooks].sort((a, b) => b.rating - a.rating);
            setDisplayBooks(ratingBooks);
        }
        else if (filter === 'number of pages') {
            const pagesBooks = [...listedBooks].sort((a, b) => b.totalPages - a.totalPages);
            setDisplayBooks(pagesBooks);
        }
        else if (filter === 'published year') {
            const yearBooks = [...listedBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setDisplayBooks(yearBooks);
        }
        setIsDropdownOpen(false); // Close the dropdown after selecting a filter
    };

    useEffect(() => {
        const storedBookIds = getStoredBookToReadList();
        if (books.length > 0) {
            const booksListed = [];
            for (const id of storedBookIds) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    booksListed.push(book);
                }
            }
            setListedBooks(booksListed);
            setDisplayBooks(booksListed);
        }
    }, [books]);

    return (
        <div>
            <h2 className="bg-[#1313130D] text-[28px] font-bold rounded-2xl text-center py-8 mb-8">
                Books {listedBooks.length}
            </h2>
            <div className="flex justify-center mb-14">
                <div className="relative inline-block">
                    <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="btn m-1 bg-[#23BE0A] text-white text-lg font-semibold">
                        Sort By <IoIosArrowDown />
                    </button>
                    {isDropdownOpen && (
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow absolute">
                            <li onClick={() => handleBooksFilter('sort by')}><a>Sort By</a></li>
                            <li onClick={() => handleBooksFilter('rating')}><a>Rating</a></li>
                            <li onClick={() => handleBooksFilter('number of pages')}><a>Number of Pages</a></li>
                            <li onClick={() => handleBooksFilter('published year')}><a>Published Year</a></li>
                        </ul>
                    )}
                </div>
            </div>
            {displayBooks.map(book => (
                <ReadBook key={book.bookId} book={book} />
            ))}
        </div>
    );
};

export default ListedBooks;