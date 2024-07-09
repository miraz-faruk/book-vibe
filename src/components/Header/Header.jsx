const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>Listed Books</a></li>
                        <li><a>Pages to Read</a></li>
                    </ul>
                </div>
                <a className="btn-ghost text-[28px] font-bold ps-2 md:ps-0">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex text-lg font-semibold">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Listed Books</a></li>
                    <li><a>Pages to Read</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-2 md:gap-4">
                <a className="bg-[#23BE0A] text-white text-sm md:text-lg font-semibold md:px-7 md:py-4 px-4 py-2 rounded-lg">Sign In</a>
                <a className="bg-[#59C6D2] text-white text-sm md:text-lg font-semibold md:px-7 md:py-4 px-4 py-2 rounded-lg">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;