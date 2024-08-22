import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Recipe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      <div className="mt-20 text-center">
        <h1 className={`text-3xl font-extrabold font-[Matemasie] transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          Our Secret Recipe
        </h1>
      </div>

      <div 
        ref={ref} 
        className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6 mx-3 md:mx-20 lg:mx-36 xl:mx-56 2xl:mx-72"
      >
        <div className={`transition-transform duration-1000 ${inView ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <img className='' src="./Images/r_b.png" alt="Burger" />
        </div>

        <div className={`transition-transform duration-1000 delay-200 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          {/* Sub part start */}
          <div className="relative flex flex-col gap-8 md:gap-10 z-10">
            <div className="flex items-center gap-4">
              <div className="h-[65px] w-[85px] bg-yellow-400 flex justify-center items-center rounded-lg">
                <img className="h-[45px] w-[60px]" src="./Images/bread.png" alt="Bread" />
              </div>
              <div className="flex flex-col gap-1">
                <h5 className="font-mono font-bold text-2xl">Bread</h5>
                <p className="w-[185px]">Fresh bread, baked to perfection.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-1">
                <h5 className="font-mono font-bold text-2xl">Cheese</h5>
                <p className="w-[185px]">Cheese for a fantastic and healthy future.</p>
              </div>
              <div className="h-[65px] w-[85px] bg-yellow-400 flex justify-center items-center rounded-lg">
                <img className="h-[45px] w-[60px]" src="./Images/cheese.png" alt="Cheese" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-[65px] w-[85px] bg-yellow-400 flex justify-center items-center rounded-lg">
                <img className="h-[45px] w-[60px]" src="./Images/meat.png" alt="Meat" />
              </div>
              <div className="flex flex-col gap-1">
                <h5 className="font-mono font-bold text-2xl">Meat</h5>
                <p className="w-[185px]">100% pure beef, big and meaty.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-1">
                <h5 className="font-mono font-bold text-2xl">Vegetables</h5>
                <p className="w-[185px]">Vegetables full of the essence of nature and organic.</p>
              </div>
              <div className="h-[65px] w-[85px] bg-yellow-400 flex justify-center items-center rounded-lg">
                <img className="h-[50px] w-[60px]" src="./Images/veg.png" alt="Vegetables" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-[65px] w-[85px] bg-yellow-400 flex justify-center items-center rounded-lg">
                <img className="h-[45px] w-[60px]" src="./Images/sauces.png" alt="Sauces" />
              </div>
              <div className="flex flex-col gap-1">
                <h5 className="font-mono font-bold text-2xl">Sauces</h5>
                <p className="w-[180px]">Fresh sauces, delicious for the palate.</p>
              </div>
            </div>
          </div>
          {/* Sub part end */}
        </div>
      </div>
    </>
  );
};

export default Recipe;
