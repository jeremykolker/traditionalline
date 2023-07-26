import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from '../Navbar/NavLinks';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [top, setTop] = useState(true); // Set the initial state to true (transparent)

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${top ? 'bg-transparent' : 'bg-white shadow-lg'}`}>
      {/* Toggle the background between bg-transparent and bg-white shadow-lg */}
      <div className="flex flex-row justify-between items-center py-2">
        <div className="flex flex-row justify-center md:px-12 ml-2 md:mx-12 items-center text-center font-semibold">
          <Link to="/">
            <h1
              className="font-extrabold uppercase text-4xl uppercase text-blue-900"
              style={{
                textShadow: '0px 0px 4px rgba(255, 255, 255, 1), -px -2px 4px rgba(255, 255, 255, 1)',
              }}
            >
              Traditional Line
            </h1>
          </Link>
        </div>
        <div className="group flex flex-col items-center">
          <button className="p-2 rounded-lg lg:hidden text-blue-900" onClick={handleClick}>
            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
          <div className={`hidden space-x-6 lg:inline-block p-5 ${isOpen ? 'block' : 'hidden'}`}>
            <NavLinks />
          </div>

          <div
            className={`fixed transition-transform duration-300 ease-in-out transit flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white rounded-lg block lg:hidden shadow-xl top-14 ${
              isOpen ? 'block' : 'hidden'
            } `}
          >
            <div className="flex flex-col space-y-6">
              <NavLinks />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
