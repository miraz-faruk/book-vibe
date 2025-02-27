import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBookToReadList, getStoredBookToReadList, getStoredWishlist, saveBookToWishlist } from "../../utility/localstorage";
import { useEffect, useState } from "react";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.bookId === idInt);
    console.log(book);

    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoredBookToReadList();
        setReadBooks(storedBookIds);
    }, []);

    useEffect(() => {
        const storedWishlistBooks = getStoredWishlist();
        setWishlistBooks(storedWishlistBooks);
    }, []);

    const handleReadButton = () => {
        if (readBooks.includes(idInt)) {
            toast.warning("This book is already added to the read list.");
        } else {
            saveBookToReadList(idInt);
            toast.success("Book added to read list successfully.");
            setReadBooks([...readBooks, idInt]);
            if (wishlistBooks.includes(idInt)) {
                const updatedWishlist = wishlistBooks.filter(bookId => bookId !== idInt);
                setWishlistBooks(updatedWishlist);
                localStorage.setItem('book-wishlist', JSON.stringify(updatedWishlist));
            }
        }
    };

    const handleWishlistButton = () => {
        if (readBooks.includes(idInt)) {
            toast.warning("This book is already added to the read list and cannot be added to the wishlist.");
        } else if (wishlistBooks.includes(idInt)) {
            toast.warning("This book is already added to the wishlist.");
        } else {
            saveBookToWishlist(idInt);
            toast.success("Book added to wishlist successfully.");
            setWishlistBooks([...wishlistBooks, idInt]);
        }
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen min-w-screen gap-12 mx-4 md:mx-0">
            <div className=" w-full md:w-1/2 max-h-screen p-5 md:p-28 bg-[#1313130D] flex rounded-2xl">
                <img src={book.image} alt="" />
            </div>
            <div className="w-full md:w-1/2">
                <h2 className="text-xl md:text-[40px] font-bold header-font mb-4">{book.bookName}</h2>
                <p className="text-[#131313CC] text-xl font-medium mb-5">By : {book.author}</p>
                <hr className="border mb-4" />
                <p className="text-[#131313CC] text-xl font-medium mb-4">{book.category}</p>
                <hr className="border mb-6" />
                <p className="mb-6"><span className="font-bold">Review : </span><span className="text-[#131313B3]">{book.review}</span></p>
                <div className="flex items-center mb-6">
                    <p className="font-bold pe-4">Tag</p>
                    <p className="font-medium bg-[#23BE0A0D] text-[#23BE0A] px-4 py-2 rounded-full me-3">#{book.tags[0]}</p>
                    <p className="font-medium bg-[#23BE0A0D] text-[#23BE0A] px-4 py-2 rounded-full">#{book.tags[1]}</p>
                </div>
                <hr className="border mb-5" />
                <div className="flex gap-20 mb-8">
                    <div className="text-[#131313B3] leading-loose">
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating</p>
                    </div>
                    <div className="font-semibold leading-loose">
                        <p>{book.totalPages}</p>
                        <p>{book.publisher}</p>
                        <p>{book.yearOfPublishing}</p>
                        <p>{book.rating}</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button onClick={handleReadButton} className="btn text-lg font-semibold px-7 border border-[#1313134D] rounded-lg">Read</button>
                    <button onClick={handleWishlistButton} className="btn bg-[#50B1C9] text-white px-7 text-lg font-semibold border border-[#50B1C9]">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;