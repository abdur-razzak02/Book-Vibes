import { NavLink } from "react-router-dom";

const NavBar = () => {
  const links = <>
  <li><NavLink to={'/'}>Home</NavLink></li>
  <li><NavLink to={'/listed-books'}>Listed Books</NavLink></li>
  <li><NavLink to={'/read-pages'}>Pages to Read</NavLink></li>
  </>
  return (
    <div className="navbar bg-base-100 px-5 lg:px-0 m-0 container mx-auto">
      <div className="navbar-start items-center font-bold">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="lg:hidden mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-normal"
          >
            {links}
          </ul>
        </div>
        <a className="text-xl">Book Vibes</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-normal">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-2 text-sm sm:text-base">
        <a className="bg-green-400 py-2 px-3 sm:px-5 rounded-md text-white font-semibold">Sign In</a>
        <a className="bg-violet-400 py-2 px-3 sm:px-5 rounded-md text-white font-semibold">Sign Up</a>
      </div>
    </div>
  );
};

export default NavBar;
