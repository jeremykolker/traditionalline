import React from 'react';
import { Link } from 'react-router-dom';
import img from '/Users/jeremykolker/dev/Ollivanders/mld/src/images/TL3.jpeg';

const Intro = () => {
  return (
    
    <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id='about'>
      <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
          <img alt="card img" className="rounded-t float-right transform max-height80%" src={img} />
        </div>
        <div className="flex flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
          <h3 className="text-2xl text-blue-900 font-bold text-center">Est. 1984, Traditional Line is a general contractor specializing in historic preservation, restoration, and full service renovations.</h3>
          <div>
            <p className='my-3 text-xl text-gray-600'> We specialize in wood restoration, wood finishing, and reproduction of historic architectural elements, furniture and period hardware. Traditional Line coordinates and supervises all subcontractors necessary to complete any project. Close relationships developed with a large range of tradespeople enable us to achieve the high level of quality and finish that our projects demand. Our close-knit structure allows us to provide the kind of personal attention that our projects require. It is our belief that every home is capable of being a dream home, given enough love and commitment. Contact us and let us apply our expertise today.</p>
          </div>
          <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
            Contact us
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
   
  );
};

export default Intro;
