import React from 'react';
import img from '/Users/jeremykolker/dev/Ollivanders/mld/src/images/TL8.jpeg'; 



const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
             <section>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                            
                            </div>
                            <img alt="card img" className="rounded-t" src={img} />

                            
                        </div>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-blue-900 mb-4'>
                             
                            </div>
                            <h3 className="text-3xl text-blue-900 font-bold my-3">Past Clients</h3>
                            
                            <div className='w-45 border-b-4 border-blue-900'></div>
                     
                            <div>
  <ul className='my-3 text-l text-gray-600 font-semibold flex flex-wrap'>
    <div className="w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
      <li>Metropolitan Museum of Art</li>
      <li>Museum of the City of New York</li>
      <li>Brooklyn Museum</li>
      <li>The Frick Museum</li>
      <li>Boston Museum of Fine Art</li>
      <li>Columbia University</li>
    </div>
    <div className="w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
      <li>Gracie Mansion</li>
      <li>Grand Central Station</li>
      <li>New York Landmarks Conservancy</li>
      <li>1 West 72nd Street (The Dakota)</li>
      <li>...and many more!</li>
    </div>
  </ul>
</div>

                        </div>
                    </div>
                </div>
            </section>
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Services</h2>
                        
                        <div className='flex justify-center'>
                           
                        </div>
                     
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            
                               
                                    <h2 className="font-semibold my-4 text-2xl text-center">Historic Restoration</h2>
                                    <p className="text-md font-medium text-center">
                                       The meticulous process of preserving and renovating historically significant structures, aiming to retain their original character, architectural integrity, and cultural value for future generations to appreciate and cherish. 
                                    </p>
                                </div>
                      

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                               
                            
                                    <h2 className="font-semibold my-4 text-2xl text-center ">General Contracting</h2>
                                    <p className="text-md font-medium text-center">
                                      We provide comprehensive oversight and management for construction projects, handling logistics and coordination to ensure efficient and top-quality results from project initiation to completion.
                                    </p>
                                </div>
                           

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                             
                                
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Antiques & Furniture Repair</h2>
                                    <p className="text-md font-medium text-center">
                                    Our expert staff employs a diverse array of techniques to restore and refurbish antiques and furniture, meticulously preserving their historical and aesthetic value. We take pride in rejuvenating each item to its former glory.
                                    </p>
                           
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                            
                               
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Art Services</h2>
                                    <p className="text-md font-medium text-center">
                                        Our Art Services include consulting, custom framing, art installation, art restoration, and gallery management. The goal is to support and enhance the art industry by providing specialized expertise and solutions to art curators and collectors alike.
                                    </p>
                           
                            </div>                    
                        </div>
                    </div>
            </section>

           
        </div>
    )
}

export default Services;
