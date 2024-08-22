import React from 'react';
import { NavLink } from 'react-router-dom';

const Carousel = () => {
  return (
    <>
      <section className=''>
        <div className='relative'>
          <div className='relative pt-36 flex flex-col md:flex-row gap-6 items-center justify-between z-10 mx-3 md:mx-8 lg:mx-14 xl:mx-28 2xl:mx-44'>
            <div className='text-black flex flex-col gap-4'>
              <h1 className='text-[50px] md:text-[70px] font-extrabold leading-[60px] md:leading-[70px]'>
                Crush On Our <span className='text-[#47381d]'>Burgers</span>
              </h1>
              <p className='sm:w-[330px] mt-5'>
                We serve the best burger on this planet, paying the way for cooking and
                preparing hot, delicious burgers.
              </p>
              
                <div className='flex gap-16 mt-3'>

                   <NavLink to="/burgers"> <button className='bg-orange-400 h-[45px] w-[130px] font-semibold rounded-2xl text-white duration-500 hover:bg-orange-600 hover:text-black'>
                    Bite Now
                    </button></NavLink>

                    <img className='h-[50px] w-[55px] -mt-4 opacity-60' src="./Images/sticker-potatoes.svg" alt="" />

                </div>

            </div>

            
              
                <div className=''>
                <img className='w-[360px] h-[270px] sm:w-[400px] sm:h-[300px] md:h-[350px] md:w-[430px] lg:h-[380px] lg:w-[460px]  xl:h-[420px] xl:w-[500px]' src='./Images/bg-burger.png' alt='Jersey 1' />
                </div>
              
            
            
            <div className='relative cursor-pointer flex flex-row md:flex-col gap-4'>
             <i className='fa-brands fa-facebook-f hover:bg-black hover:text-white bg-white text-black duration-500 h-[50px] w-[50px] rounded-full flex justify-center items-center text-2xl right-3'></i>
             <i className='fa-brands fa-whatsapp hover:bg-black hover:text-white bg-white text-black duration-500 h-[50px] w-[50px] rounded-full flex justify-center items-center text-2xl right-3'></i>
             <i className='fa-brands fa-instagram hover:bg-black hover:text-white bg-white text-black duration-500 h-[50px] w-[50px] rounded-full flex justify-center items-center text-2xl right-3'></i>
           </div>

          </div>

          

          <div className='curve1 w-[100%] h-[100vh] bg-orange-600 absolute top-0 right-0'></div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
