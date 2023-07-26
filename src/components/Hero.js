import React, { useEffect, useState } from 'react';
import '/Users/jeremykolker/dev/Ollivanders/mld/src/index.css';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '/Users/jeremykolker/dev/Ollivanders/mld/src/images/Screenshot 2023-07-24 at 2.27.10 PM.png';
import img1 from '/Users/jeremykolker/dev/Ollivanders/mld/src/images/Daklota-13.jpg'
import '/Users/jeremykolker/dev/Ollivanders/mld/src/index.css'

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const shouldMoveImageToTop = windowWidth < 1000; // Changed the width threshold to 1000

  return (
    <>
     
      <div className="hero" id="hero">
        <div>
          <NavBar />

        </div>

        <img
            
                
                  src={img1}
                 
                />
<div className='line'></div>
        <div
 
          className={`m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6 ${
            shouldMoveImageToTop ? 'flex-col items-center' : 'flex'
          }`}
          data-aos="zoom-in"
        >
          <div className="flex flex-col lg:flex-row py-8 justify-betwezen text-center lg:text-left">
            <div className={`lg:w-1/2 flex flex-col justify-center ${shouldMoveImageToTop ? 'mb-4' : ''}`} data-aos="zoom-in" data-aos-delay="200">
              <h1 className="mb-5 text-3xl font-bold uppercase  text-blue-900">
                Architectural Restoration
              </h1>
              <div className="text-2xl tracking-tight mb-5 text-gray-600">
                High-quality general contracting: delivering masterful construction services throughout the New York metropolitan area.
              </div>
              <div className=" mt-3 ">
                <Link to="/#portfolio" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                  Learn more
                </Link>
              </div>
            </div>
            {!shouldMoveImageToTop && windowWidth >= 1000 && ( // Add a condition to check for windowWidth >= 1000
              <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                <img
                  alt="card img"
                  className="rounded-t float-right duration-1000"
                  src={heroImg}
                  style={{ width: '85%', height: 'auto', border: '1px solid black', borderWidth: '0.5px', marginLeft: '10px', objectFit: 'cover' }} // Adjusted the borderWidth to make it thinner
                />
              </div>
            )}
          </div>
          {shouldMoveImageToTop && windowWidth >= 1000 && ( // Add a condition to check for windowWidth >= 1000
            <div className="w-full text-center">
              <img
                alt="card img"
                className="rounded-t duration-1000 inline-block"
                src={heroImg}
                style={{ height: '120%', width: 'auto', border: '1px solid black' }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
