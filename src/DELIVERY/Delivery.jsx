import React from 'react';
import { NavLink } from 'react-router-dom';

const Delivery = () => {
  return (
    <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-6 mx-3 sm:mx-5 md:mx-10 lg:mx-24 xl:mx-48 2xl:mx-64">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-extrabold font-[Matemasie]">Fast Delivery</h1>
        <p className="md:w-[400px] text-justify">
          Place your order for your favourite burger and we will deliver it to your door in minutes, get in touch and don't leave hungry.
        </p>

        <div className="flex gap-24 mt-3 sm:mx-0">
          <NavLink to="/contact">
            <button className="bg-orange-400 h-[45px] w-[140px] font-semibold rounded-2xl text-white duration-500 hover:bg-orange-600 hover:text-black">
              Contact Now
            </button>
          </NavLink>

          <img
            className="h-[70px] rotate-[60px] -mt-6 opacity-60"
            src="./Images/sticker-glass.svg"
            alt=""
          />
        </div>
      </div>

      <div>
        <img
          className="h-[350px] w-[350px]  md:h-[300px] md:w-[350px] lg:h-[400px] lg:w-full mx-auto"
          src="./Images/delivery-burger.png"
          alt="Delivery Burger"
        />
      </div>
    </div>
  );
};

export default Delivery;
