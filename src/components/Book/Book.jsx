import { FaRegStar } from "react-icons/fa";


const Book = ({ book }) => {

    const { image, bookName, author, tags, category, rating } = book;
    return (
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
    );
};

export default Book;