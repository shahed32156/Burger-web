import React from 'react';

const Chefs = () => {
  return (
    <>
      <div className="mt-20 text-center">
        <h1 className="text-3xl font-extrabold font-[Matemasie]">Our Chefs</h1>
      </div>

      <div className='mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-3 sm:mx-5 md:mx-10 lg:mx-24 xl:mx-48 2xl:mx-64'>

        <div className="relative group mx-auto rounded-xl overflow-hidden">
          <img className='border-[6px] border-yellow-400 h-[280px] w-[300px]' src="./Images/chef1.jpg" alt="Chef 1" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <div className="text-center">
              <h2 className="text-white text-xl font-bold mb-2">John Doe</h2>
              <div className="flex justify-center space-x-4">
                <a className="text-white text-2xl cursor-pointer">
                  <i className="fab fa-facebook text-yellow-400"></i>
                </a>
                <a className="text-white text-2xl cursor-pointer">
                  <i className="fab fa-whatsapp text-yellow-400"></i>
                </a>
                <a className="text-white text-2xl cursor-pointer">
                  <i className="fab fa-instagram text-yellow-400"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group mx-auto rounded-xl overflow-hidden">
          <img className='border-[6px] border-yellow-400 h-[280px] w-[300px]' src="./Images/chef2.jpg" alt="Chef 2" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <div className="text-center">
              <h2 className="text-white text-xl font-bold mb-2">Sarah Taylor</h2>
              <div className="flex justify-center space-x-4">
                <a className="text-white text-2xl cursor-pointer">
                  <i className="fab fa-facebook text-yellow-400"></i>
                </a>
                <a className="text-white text-2xl cursor-pointer">
                  <i className="fab fa-whatsapp text-yellow-400"></i>
                </a>
                <a className="text-white text-2xl cursor-pointer">
                  <i className="fab fa-instagram text-yellow-400"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group mx-auto rounded-xl overflow-hidden">
          <img className='border-[6px] border-yellow-400 h-[280px] w-[300px]' src="./Images/chef3.jpg" alt="Chef 3" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <div className="text-center">
              <h2 className="text-white text-xl font-bold mb-2">Joseph Smith</h2>
              <div className="flex justify-center space-x-4">
                <a className="text-white text-2xl cursor-pointer">
                  <i className="fab fa-facebook text-yellow-400"></i>
                </a>
                <a className="text-white text-2xl cursor-pointer">
                  <i className="fab fa-whatsapp text-yellow-400"></i>
                </a>
                <a className="text-white text-2xl cursor-pointer">
                  <i className="fab fa-instagram text-yellow-400"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Chefs;
