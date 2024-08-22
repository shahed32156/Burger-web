import React from 'react';

const Recipe = () => {
  return (
    <>
      <div className="mt-20 text-center">
        <h1 className="text-3xl font-extrabold font-[Matemasie]">
          Our Secret Recipe
        </h1>
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6 mx-3 md:mx-20 lg:mx-36 xl:mx-56 2xl:mx-72">
        <div>
          <img src="./Images/r_b.png" alt="Burger" />
        </div>

        <div>
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
