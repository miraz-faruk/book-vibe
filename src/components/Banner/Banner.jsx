import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-[#1313130D] rounded-3xl px-14 md:px-28 py-5 md:py-10 mb-12 md:mb-24">
            <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-20 items-center">
                <div>
                    <h2 className="text-2xl md:text-[56px] font-bold heading-font mb-6 md:mb-12 leading-normal">Books to freshen up your bookshelf</h2>
                    <Link to={'/listed-books'}><button className="bg-[#23BE0A] text-white text-sm md:text-lg font-semibold md:px-7 md:py-4 px-4 py-2 rounded-lg hover:bg-slate-600">View The List</button></Link>
                </div>
                <img className="md:w-96" src="https://i.ibb.co/1fLT4hb/banner-book-removebg.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;