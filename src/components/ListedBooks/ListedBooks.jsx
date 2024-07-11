import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookToReadList, getStoredWishlist } from "../../utility/localstorage";
import ReadBook from "../ReadBook/ReadBook";
import WishlistBook from "../WishlistBook/WishlistBook";
import { IoIosArrowDown } from "react-icons/io";

const ListedBooks = () => {
    const books = useLoaderData();

    const [listedBooks, setListedBooks] = useState({ read: [], wishlist: [] });
    const [displayBooks, setDisplayBooks] = useState([]);
    const [activeTab, setActiveTab] = useState('read');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleBooksFilter = (filter) => {
        let sortedBooks = [];
        if (filter === 'rating') {
            sortedBooks = [...displayBooks].sort((a, b) => b.rating - a.rating);
        } else if (filter === 'number of pages') {
            sortedBooks = [...displayBooks].sort((a, b) => b.totalPages - a.totalPages);
        } else if (filter === 'published year') {
            sortedBooks = [...displayBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        } else {
            sortedBooks = activeTab === 'read' ? listedBooks.read : listedBooks.wishlist;
        }
        setDisplayBooks(sortedBooks);
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        const storedBookIds = getStoredBookToReadList();
        const storedWishlistBooks = getStoredWishlist();

        if (books.length > 0) {
            const readBooksListed = [];
            const wishlistBooksListed = [];

            for (const id of storedBookIds) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    readBooksListed.push(book);
                }
            }

            for (const id of storedWishlistBooks) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    wishlistBooksListed.push(book);
                }
            }

            setListedBooks({
                read: readBooksListed,
                wishlist: wishlistBooksListed,
            });

            setDisplayBooks(activeTab === 'read' ? readBooksListed : wishlistBooksListed);
        }
    }, [books, activeTab]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setDisplayBooks(tab === 'read' ? listedBooks.read : listedBooks.wishlist);
    };

    return (
        <div>
            <h2 className="bg-[#1313130D] text-[28px] font-bold rounded-2xl text-center py-8 mb-8">
                Books {listedBooks[activeTab].length}
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
            <div className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" id="tab-read" role="tab" className={`tab visually-hidden text-lg ${activeTab === 'read' ? 'text-black' : 'text-[#13131380]'}`} aria-label="Read Books" checked={activeTab === 'read'} onChange={() => handleTabChange('read')} />
                <input type="radio" name="my_tabs_2" id="tab-wishlist" role="tab" className={`tab visually-hidden text-lg ${activeTab === 'read' ? 'text-[#13131380]' : 'text-black'}`} aria-label="Wishlist Books" checked={activeTab === 'wishlist'} onChange={() => handleTabChange('wishlist')} />
            </div>
            <div className="books-container mt-5">
                {
                    displayBooks.map(book => (
                        activeTab === 'read' ? (
                            <ReadBook key={book.bookId} book={book} />
                        ) : (
                            <WishlistBook key={book.bookId} book={book} />
                        )
                    ))
                }
            </div>
        </div>
    );
};

export default ListedBooks;