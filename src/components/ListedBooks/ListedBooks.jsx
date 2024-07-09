import { IoIosArrowDown } from "react-icons/io";

const ListedBooks = () => {
    return (
        <div>
            <div>
                <h2 className="bg-[#1313130D] text-[28px] font-bold rounded-2xl text-center py-8 mb-8">Books</h2>
                <div className="flex justify-center">
                    <button className="flex items-center gap-4 bg-[#23BE0A] text-white text-sm md:text-lg font-semibold md:px-7 md:py-4 px-4 py-2 rounded-lg">Sort By <IoIosArrowDown></IoIosArrowDown></button>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;