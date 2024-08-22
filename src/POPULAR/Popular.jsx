import React from 'react';
import { NavLink } from 'react-router-dom';

import Swal from'sweetalert2';

const Popular = () => {

const handleCart = () => {

  Swal.fire({
    title: "Success",
    text: "Successfully added to cart",
    icon: "success"
});

}

  const burgers = [
    {
      name: 'Chicken Burger',
      price: '210 BDT',
      image: './Images/burger-chicken.png',
    },
    {
      name: 'Beef Burger',
      price: '250 BDT',
      image: './Images/burger-meat.png',
    },
    {
      name: 'Grill Burger',
      price: '180 BDT',
      image: './Images/burger-grill.png',
    },
    {
      name: 'Classic Burger',
      price: '220 BDT',
      image: './Images/burger-classic.png',
    },
    {
      name: 'Cheese Burger',
      price: '300 BDT',
      image: './Images/burger-big.png',
    },
    {
      name: 'Pastrami burger',
      price: '230 BDT',
      image: './Images/Pastrami-burger.png',
    },
  ];

  return (
    <>
      <div className="mt-20 text-center">
        <h1 className="text-3xl font-extrabold font-[Matemasie]">Most Devoured Burgers</h1>
      </div>

      <div className="mt-20 grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-3 sm:mx-10 md:mx-14 lg:mx-40 xl:mx-[300px] 2xl:mx-[400px]">
        {burgers.map((burger, index) => (
          <div
            key={index}
            className="flex mx-auto flex-col rounded-3xl justify-center gap-4 bg-yellow-400 border-[8px] border-white w-[220px] px-3 pb-4"
          >
            <img
              className="h-[150px] w-[150px] -mt-16 mx-auto duration-500 hover:scale-105"
              src={burger.image}
              alt={burger.name}
            />
            <div className='flex items-center justify-between'>
              <h3 className="font-bold text-2xl w-[10px] font-mono leading-6">{burger.name}</h3>
              <i onClick={handleCart} className="fa-solid text-xl fa-cart-shopping cursor-pointer"></i>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-bold text-2xl font-mono">{burger.price}</p>
              <NavLink to="/order_now" className="text-white flex justify-center items-center h-[40px] font-bold rounded-lg w-[60px] bg-black">
                Buy
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Popular;