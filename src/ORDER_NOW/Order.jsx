import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { HiCheckBadge } from "react-icons/hi2";
import Swal from'sweetalert2';
import Review from './Review';

const Order = () => {

    const [show, setShow] = useState(false);

    const [count, setCount] = useState(1);

    const navigate = useNavigate(); 

    const handlePlus = () => {
        setCount(count + 1);
      }
    
      const handleMinus = () => {
        setCount(count - 1);
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Success",
            text: "Order confirmed",
            icon: "success"
        });
        navigate("/home");
      }

  return (
    <>
    
    
    <section className='mt-40 bg-black py-10 '>


            <div className=' text-white flex items-center flex-col md:flex-row gap-5 justify-between mx-3 md:mx-[70px] lg:mx-48 xl:mx-[300px] 2xl:mx-[400px]'>


                    <div>
                        <img className='sm:h-[300px] sm:w-[320px] md:h-[350px] md:w-[370px]' src="./Images/burger-meat.png" alt="" />
                    </div>

                    <div>


                            <div className='flex flex-col gap-3'>
                                <h1 className='text-3xl font-bold'>Beef Burger</h1>
                                <p className='text-2xl font-semibold'>250 BDT</p>
                                <div className='flex items-center gap-1'>
                                <i className="fa-solid fa-star text-[14px]"></i> 
                                <i className="fa-solid fa-star text-[14px]"></i> 
                                <i className="fa-solid fa-star text-[14px]"></i> 
                                <i className="fa-solid fa-star text-[14px]"></i> 
                                <i className="fa-solid fa-star text-[14px]"></i> 
                                </div>
                                <p>Letuce, tomtato, cheese, onion and beef. </p>
                            </div>

                            <form className='mt-10 flex flex-col gap-3' onSubmit={handleSubmit} action="">

                            <div className='flex items-center gap-3 -mt-2'>
                                <a className='border-[1px] duration-500 hover:bg-orange-500 hover:border-orange-500 hover:text-white flex justify-center items-center cursor-pointer h-[40px] w-[40px] rounded-full text-[20px]' onClick={handlePlus}>+</a>
                                <p className='text-xl'>{count}</p>
                                <a className={`border-[1px] border-white duration-500 hover:bg-orange-500 hover:border-orange-500 hover:text-white flex justify-center items-center cursor-pointer h-[40px] w-[40px] rounded-full text-[25px] ${count === 0 ? 'disabled' : ''}`} onClick={handleMinus} style={{ pointerEvents: count === 1 ? 'none' : 'auto' }}>-</a>
                           </div>

                           <div className='flex items-center gap-3 mt-3'>
                                <div className='flex items-center justify-center gap-1 border-y-2 border-orange-500 h-[45px] w-[130px] font-semibold text-white duration-500 hover:bg-orange-600 hover:text-black'>
                                <HiCheckBadge className='text-xl' />    
                                <button className=''> Order Now</button>
                                </div>
                                <a onClick={() => setShow(true)} className='flex items-center justify-center gap-1 cursor-pointer border-y-2 border-orange-500 h-[45px] w-[130px] font-semibold text-white duration-500 hover:bg-orange-600 hover:text-black'><i className="fa-solid fa-star text-[15px]"></i> Add Review</a>
                                
                           </div>
                                 

                            </form>


                    </div>


            </div>

          

    </section>
    
    {show && <Review  onClose={() => setShow(false)} />}
    
    </>
  )
}

export default Order
