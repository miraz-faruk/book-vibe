import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Book = ({ book }) => {

    const { bookId, image, bookName, author, tags, category, rating } = book;

    return (
        <div>
            <Link to={`/book/${bookId}`}>
                <div className="card border p-6">
                    <figure className="rounded-2xl bg-[#F3F3F3] mb-6">
                        <img className="py-10 px-20 brightness-90"
                            src={image}
                            alt="books" />
                    </figure>
                    <div className="card-actions gap-3 mb-4">
                        <div className="bg-[#23BE0A0D] px-4 p-2 rounded-full text-[#23BE0A] text-base font-medium">{tags[0]}</div>
                        <div className="bg-[#23BE0A0D] px-4 p-2 rounded-full text-[#23BE0A] text-base font-medium">{tags[1]}</div>
                    </div>
                    <div className="mb-5">
                        <h2 className="card-title text-2xl font-bold heading-font mb-4">{bookName}</h2>
                        <p className="text-[#131313CC] font-medium">By : {author}</p>
                    </div>
                    <hr className="border border-dashed mb-5" />
                    <div className="flex justify-between text-[#131313CC] font-medium">
                        <p>{category}</p>
                        <div className="flex items-center gap-2">
                            <p>{rating}</p>
                            <FaRegStar></FaRegStar>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.shape({
        bookId: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        bookName: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string),
        category: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired
    }).isRequired,
};

export default Book;