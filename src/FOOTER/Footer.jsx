import React from 'react'

const Footer = () => {
  return (
    <>
    
      <section className='mt-24 relative z-10 font-bold pt-4'>


      <div className="flex items-center justify-center gap-2 relative z-10">
          <img className="h-[45px] w-[45px]" src="./Images/logo.png" alt="" />
          <h1 className="text-black text-2xl font-bold">̷C̷̷h̷̷i̷̷l̷̷l̷̷i̷̷B̷̷u̷̷r̷̷g̷ </h1>
        </div>

        <div className='flex flex-col sm:flex-row relative z-10 gap-4 items-center justify-evenly mt-10'>

                <div>
                    <a className='text-[#291b1b] cursor-pointer'>Terms and aggreements</a>
                </div>

                <div className='flex relative z-10 items-center gap-2'>
                
                                    <i className='fa-brands fa-facebook hover:bg-yellow-300 cursor-pointer  bg-yellow-400 text-black duration-500 h-[35px] w-[40px] rounded-xl flex justify-center items-center text-xl right-3'></i>
                                    <i className='fa-brands fa-whatsapp hover:bg-yellow-300 cursor-pointer bg-yellow-400 text-black duration-500 h-[35px] w-[40px] rounded-xl flex justify-center items-center text-xl right-3'></i>
                                    <i className='fa-brands fa-instagram hover:bg-yellow-300 cursor-pointer bg-yellow-400 text-black duration-500 h-[35px] w-[40px] rounded-xl flex justify-center items-center text-xl right-3'></i>
                </div>


                <div className='relative z-10'>
                    <a className='text-[#291b1b] cursor-pointer'>Privacy policy</a>
                </div>

        </div>


                <div className='relative z-10 text-center mt-10 bg-orange-500 py-3'>
                    <p className='text-[#291b1b] text-[14px] sm:text-[16px]'>&copy; All Rights Reserved by Abdullah Shahed</p>
                </div>


                <div className='curve2 w-full h-full bg-orange-600 absolute top-0 right-0'></div>



      </section>
    
    
    </>
  )
}

export default Footer
