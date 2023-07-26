import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
        <div className='mr-20'>
            <HashLink className="text-xl px-4 font-extrabold font-xl text-gray-500 hover:text-blue-900" to="/#about">
                About
            </HashLink>
            <HashLink className="text-xl px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/#portfolio">
                Portfolio
            </HashLink>
    
            <HashLink className="text-xl px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact">
                Contact 
            </HashLink>
            </div>
        </>
    )
}

export default NavLinks;