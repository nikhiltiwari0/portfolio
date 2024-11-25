import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
      {/* Name Section */}
      <aside className="text-center">
        <h1 className="text-3xl font-bold">Nikhil Tiwari</h1>
        <p className="text-sm italic">Established 2006.</p>
      </aside>

      {/* Social Links */}
      <nav className="mt-6">
        <h6 className="footer-title text-center">Connect with Me</h6>
        <div className="flex justify-center gap-4 mt-2">
          {/* GitHub */}
          <a href="https://github.com/nikhiltiwari0" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 .297c-6.6 0-12 5.4-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.05c-3.338.725-4.043-1.417-4.043-1.417-.546-1.387-1.333-1.757-1.333-1.757-1.087-.745.083-.73.083-.73 1.2.084 1.832 1.23 1.832 1.23 1.067 1.832 2.8 1.303 3.487.997.108-.773.417-1.304.762-1.604-2.665-.3-5.467-1.333-5.467-5.93 0-1.31.47-2.383 1.237-3.222-.123-.303-.535-1.523.118-3.176 0 0 1.01-.322 3.3 1.23.957-.267 1.983-.4 3.003-.405 1.02.005 2.046.138 3.003.405 2.29-1.552 3.3-1.23 3.3-1.23.653 1.653.242 2.873.118 3.176.768.84 1.237 1.913 1.237 3.222 0 4.61-2.805 5.625-5.475 5.92.429.37.823 1.102.823 2.222v3.293c0 .32.218.694.825.577C20.565 22.093 24 17.6 24 12.297c0-6.6-5.4-12-12-12z"></path>
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/nikhil-tiwari-094b2231a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.5-.646-1.5-1.432 0-.798.546-1.432 1.536-1.432s1.5.634 1.5 1.432c0 .786-.537 1.432-1.536 1.432zm13.5 12.268h-3v-5.606c0-1.341-.479-2.256-1.673-2.256-.912 0-1.452.631-1.689 1.239-.087.211-.109.505-.109.799v5.824h-3s.04-9.454 0-10.427h3v1.479c.4-.619 1.117-1.499 2.717-1.499 1.985 0 3.481 1.296 3.481 4.081v6.366z"></path>
            </svg>
          </a>
          {/* Email */}
          <a href="mailto:tiwarin9211@gmail.com" aria-label="Email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M20 4h-16c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm0 2v.511l-8 6.224-8-6.224v-.511h16zm-16 12v-9.339l7.573 5.888c.255.198.598.198.854 0l7.573-5.888v9.339h-16z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;