import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md">
      {/* Navbar Start */}
      <div className="navbar-start flex items-center">
        {/* Dropdown for Mobile */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>EDUCATION</a>
            </li>
            <li>
              <a>PROJECTS</a>
            </li>
            <li>
              <a>RESUMÉ</a>
            </li>
          </ul>
        </div>
        {/* Brand/Logo */}
        <a className="btn btn-ghost normal-case text-xl">Nikhil Tiwari</a>
      </div>

      {/* Navbar End */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-4">
          <li>
            <details>
              <summary>WHO AM I?</summary>
              <ul className="p-2 bg-base-100 shadow-md rounded-box">
                <li>
                  <a>EDUCATION</a>
                </li>
                <li>
                  <a>PROJECTS</a>
                </li>
                <li>
                  <a>RESUMÉ</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;