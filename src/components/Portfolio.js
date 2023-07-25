import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img2 from '/Users/jeremykolker/dev/Ollivanders/mld/src/images/TL 1.jpeg'
import img3 from '/Users/jeremykolker/dev/Ollivanders/mld/src/images/TL 5.jpeg'
import img4 from '/Users/jeremykolker/dev/Ollivanders/mld/src/images/TL 2.jpeg'
import img5 from '/Users/jeremykolker/dev/Ollivanders/mld/src/images/TL 6.jpeg'
import img6 from '/Users/jeremykolker/dev/Ollivanders/mld/src/images/Dakota-26.jpg'
import img7 from '/Users/jeremykolker/dev/Ollivanders/mld/src/images/Dakota-37.jpg'
import img8 from '/Users/jeremykolker/dev/Ollivanders/mld/src/images/Dakota-29.jpg'
import img9 from '/Users/jeremykolker/dev/Ollivanders/mld/src/images/Daklota-51.jpeg'

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <img src={selectedImage} alt="Enlarged Image" className="max-h-screen max-w-full" onClick={closeModal} />
        </div>
      )}
      <div className="my-4 py-4" id='portfolio'>
      <h2 class="my-2 text-center text-3xl text-blue-900 uppercase font-bold text-decoration-underline">Our Work</h2>
        <div className='flex justify-center'>
        
        </div>

        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
              <img src={img2} alt="Image 2" className="w-full h-48 object-cover cursor-pointer" onClick={() => openModal(img2)} />
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <img src={img3} alt="Image 3" className="w-full h-48 object-cover cursor-pointer" onClick={() => openModal(img3)} />
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <img src={img4} alt="Image 4" className="w-full h-48 object-cover cursor-pointer" onClick={() => openModal(img4)} />
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <img src={img5} alt="Image 5" className="w-full h-48 object-cover cursor-pointer" onClick={() => openModal(img5)} />
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <img src={img6} alt="Image 6" className="w-full h-48 object-cover cursor-pointer" onClick={() => openModal(img6)} />
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <img src={img7} alt="Image 7" className="w-full h-48 object-cover cursor-pointer" onClick={() => openModal(img7)} />
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <img src={img9} alt="Image 9" className="w-full h-48 object-cover cursor-pointer" onClick={() => openModal(img9)} />
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <img src={img8} alt="Image " className="w-full h-48 object-cover cursor-pointer" onClick={() => openModal(img8)} />
            </div>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio;
