// import React from 'react';
import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { CiMemoPad } from "react-icons/ci";
import { Link } from "react-router-dom";

const ReadBook = ({ book }) => {
    const { bookId, image, bookName, author, tags, yearOfPublishing, totalPages, category, rating, publisher } = book;

    return (
        <div>
            <div className="flex gap-6 p-6 border rounded-2xl mb-6">
                <div className="bg-[#1313130D] px-12 py-7 rounded-2xl">
                    <img className="w-44 " src={image} alt="" />
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <h2 className="heading-font text-2xl font-bold">{bookName}</h2>
                    <p className="text-[#131313CC] font-medium">By: {author}</p>
                    <div className="flex items-center">
                        <h3 className="font-bold me-4">Tags</h3>
                        {tags && tags.length > 0 &&
                            <>
                                <p className="font-medium bg-[#23BE0A0D] text-[#23BE0A] px-4 py-2 rounded-full me-3">#{tags[0]}</p>
                                <p className="font-medium bg-[#23BE0A0D] text-[#23BE0A] px-4 py-2 rounded-full me-5">#{tags[1]}</p>
                            </>
                        }
                        <IoLocationOutline />
                        <p className="ms-3 text-[#131313CC]">Year of Publishing: {yearOfPublishing}</p>
                    </div>
                    <div className="flex items-center text-[#131313CC] gap-4">
                        <div className="flex gap-2 items-center">
                            <HiOutlineUsers />
                            <p>Publisher: {publisher}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <CiMemoPad />
                            <p>Pages: {totalPages}</p>
                        </div>
                    </div>
                    <hr className="border" />
                    <div className="flex items-center gap-3">
                        <a className="bg-[#328EFF26] text-[#328EFF] px-5 py-3 rounded-full">Category: {category}</a>
                        <a className="bg-[#FFAC3326] px-5 py-3 rounded-full text-[#FFAC33]">Rating: {rating}</a>
                        <Link to={`/book/${bookId}`}>
                            <button className="bg-[#23BE0A] text-white px-5 py-2.5 rounded-full text-lg font-medium">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReadBook.propTypes = {
    book: PropTypes.shape({
        bookId: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        bookName: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string),
        yearOfPublishing: PropTypes.number.isRequired,
        totalPages: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        publisher: PropTypes.string.isRequired,
    }).isRequired,
};

export default ReadBook;