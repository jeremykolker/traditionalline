import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '/Users/jeremykolker/dev/Ollivanders/mld/src/index.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer">
                <div className='line2'></div>

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-2 md:py-12q  border-black-200 lg:ml-11">

                    {/* 1st block */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="box-border border-b-4 border-blue-900 p-6 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                            <h3 className="font-bold text-4xl uppercase mb-4">Traditional Line</h3>
                            <div className='text-md font-medium text-gray-600'>
                                <h5>General Contractor & Construction</h5>
                                <p>143 West 21st Street</p>
                                <p>New York, NY 10011</p>
                                <p>212-627-3555</p>
                            </div>
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-4 mx-auto text-center">
                    <h6 className="text-[#013289] text-xl mb-2">OUR SERVICES</h6>
                        <ul className="text-sm">
                        <li className="mb-2">
                          Historic Restoration
                        </li>
                        <li className="mb-2">
                          General Contracting
                        </li>
                        <li className="mb-2">
                       Antiques & Furniture
                        </li>
                        <li className="mb-2">
                           Fine Woodworking & Carpentry
                        </li>
                        <li className="mb-2">
                           Art Services
                        </li>
                        <li className="mb-0">
                        Full-Service Rennovations
                        </li>
                        </ul>


                    </div>

                    {/* 3rd block */}
                   
                    <div className="col-span-12 text-left mx-auto lg:col-span-3 font-bold uppercase text-black-900">
                    
                        <h6 className="text-[#013289] text-xl  text-center font-bold mb-1">LINKS</h6>
                        <ul className="text-md text-center">
                    


    <li className="mb-2">
                        <HashLink className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out" smooth to="/#about">
                About
            </HashLink>
            </li>
            <li className="mb-2"> <HashLink className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out" to="/#portfolio">
                Portfolio
            </HashLink></li>
         
           <li className="mb-0"> <HashLink className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out" to="/contact">
                Contact 
            </HashLink>
            </li>
            </ul>
                    </div>

                    {/* 4th block
                    <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
                        <div className="text-xl mb-6">
                            Social Media Links.
                        </div>

                                <div className="text-md font-medium mb-6">
                                    Follow us on social media.
                                </div>
                        <div className="mx-auto text-center mt-2">
                                <ul className="flex justify-center mb-4 md:mb-0">
                                    <li>
                                        <Link to="#" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                                        </svg>
                                        </Link>
                                    </li>
                                    <li className="ml-4">
                                        <Link to="#" className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                        </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                    </div>           */}

                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-gray-200 font-semibold py-1">
                    Copyright &copy; {new Date().getFullYear()}{"  "}
                    <HashLink
                        to="#"
                        className=" hover:text-gray-900"
                    >
                        Traditional Line
                    </HashLink>
                    </div>
                </div>
                </div>

                </div>
                
            </footer>
        </>
    )
}
export default Footer;
