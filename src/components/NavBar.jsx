import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md z-[10] relative">
      
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow"
          >
            {/* <li>
              <button
                onClick={() => (window.location.href = "/about")}
                className="btn btn-ghost"
              >
                ABOUT ME
              </button>
            </li>
            <li>
              <button
                onClick={() => (window.location.href = "/projects")}
                className="btn btn-ghost"
              >
                PROJECTS
              </button>
            </li> */}
            <li>
              <button
                onClick={() => (window.location.href = "/resume")}
                className="btn btn-ghost"
              >
                RESUMÉ
              </button>
            </li>
          </ul>
        </div>
        
        {/* Brand/Logo */}
        
        <button
          onClick={() => (window.location.href = "/")}
          className="btn btn-ghost normal-case text-xl"
        >
          NIKHIL TIWARI
        </button>
      </div>

      {/* Navbar End */}
      
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-4 z-[50] relative">
          <li>
            <details>
              <summary>WHO AM I?</summary>
              <ul className="p-2 bg-base-100 shadow-md rounded-box z-[50]">
                {/* <li>
                  <button
                    onClick={() => (window.location.href = "/about")}
                    className="btn btn-ghost"
                  >
                    ABOUT ME
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => (window.location.href = "/projects")}
                    className="btn btn-ghost"
                  >
                    PROJECTS
                  </button>
                </li> */}
                <li>
                  <button
                    onClick={() => (window.location.href = "/resume")}
                    className="btn btn-ghost"
                  >
                    RESUMÉ
                  </button>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      {/* Social Media Links */}
      
      <div
        className="fixed bottom-5 right-4 flex gap-4 z-50 animate__animated animate__fadeIn animate__delay-5s"
        style={{ margin: 0, padding: 0 }}
      >
        <a
          href="https://www.linkedin.com/in/nikhil-tiwari-094b2231a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:opacity-75"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 24 24"
            className="fill-current text-white"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.5-.646-1.5-1.432 0-.798.546-1.432 1.536-1.432s1.5.634 1.5 1.432c0 .786-.537 1.432-1.536 1.432zm13.5 12.268h-3v-5.606c0-1.341-.479-2.256-1.673-2.256-.912 0-1.452.631-1.689 1.239-.087.211-.109.505-.109.799v5.824h-3s.04-9.454 0-10.427h3v1.479c.4-.619 1.117-1.499 2.717-1.499 1.985 0 3.481 1.296 3.481 4.081v6.366z"></path>
          </svg>
        </a>
        <a
          href="mailto:tiwarin9211@gmail.com"
          aria-label="Email"
          className="hover:opacity-75"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            className="fill-current text-white"
          >
            <path d="M20 4h-16c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm0 2v.511l-8 6.224-8-6.224v-.511h16zm-16 12v-9.339l7.573 5.888c.255.198.598.198.854 0l7.573-5.888v9.339h-16z"></path>
          </svg>
        </a>
        <a
          href="/resume"
          aria-label="Resume"
          className="hover:opacity-75"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 24 24"
            className="fill-current text-white"
          >
            <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm0 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm-.25-15h.5c.138 0 .25.112.25.25v9.5c0 .138-.112.25-.25.25h-.5c-.138 0-.25-.112-.25-.25v-9.5c0-.138.112-.25.25-.25zm0-3.75h.5c.138 0 .25.112.25.25v.5c0 .138-.112.25-.25.25h-.5c-.138 0-.25-.112-.25-.25v-.5c0-.138.112-.25.25-.25z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default NavBar;