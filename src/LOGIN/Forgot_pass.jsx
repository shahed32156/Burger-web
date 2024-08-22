import React, { useState } from 'react'

import Registration from '../REGISTRATION/Registration';
import Swal from'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Forgot_pass = ({show, setShow}) => {

    const navigate = useNavigate(); 
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");


    const handleEmail = (e) => {

        setEmail(e.target.value);
 
    }
 
    const handlePass = (e) => {
 
     setPass(e.target.value);
 
 }
 
 const handleSubmit = (e) => {
 
     e.preventDefault();
 
         Swal.fire({
             title: "Success",
             text: "Successfully Sent",
             icon: "success"
         }); 
 
         navigate('/home');
 
 }


  return (
    
    <>

       <section className='pt-9 sm:pt-14 md:pt-20 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10 px-3'>


            <div className='bg-[#2a2323] w-full sm:w-[400px] mx-auto text-white'>



                    <div className='bg-orange-500 py-4 rounded-b-[70px]'>

                                <div className='relative'>
                                    
                                    
                                    <img className='h-[150px] w-[200px] mx-auto' src="./Images/bg-burger.png" alt="" />
                           
                                    <i onClick={() => setShow("")} class="fa-regular fa-circle-xmark cursor-pointer text-3xl absolute -top-4 right-0"></i>

                                </div>

                                <div className='flex justify-center items-center gap-2'>
                                    <img className='h-[45px] w-[45px]' src="./Images/logo.png" alt="" />
                                    <h1 className="text-2xl font-bold">̷C̷̷h̷̷i̷̷l̷̷l̷̷i̷̷B̷̷u̷̷r̷̷g̷</h1>
                                </div>



                    </div>


                 {/* Forgot pass start */}



                    <div className='mt-8'>


                            <div className='text-center'>
                                <h1 className='text-3xl font-[Matemasie]'>Forgot Password</h1>
                            </div>

                           <form onSubmit={handleSubmit} className='flex flex-col gap-6 mt-10' action="">


                                <div className='flex justify-center relative'>

                                    
                                    <input className='w-full mx-5 sm:w-[320px] pl-7 pb-1 text-[18px] border-b-2 border-white bg-transparent focus:outline-none' 
                                    placeholder='Email' type="email" required 
                                    name="email" id="" onChange={handleEmail} value={email} />
                                    <i class="fa-regular fa-envelope text-xl absolute bottom-1 left-5 sm:left-10"></i>

                                </div>

                                <div className='flex justify-center relative'>

                                    <button className='h-[40px] w-[120px] text-xl bg-orange-500 rounded-md duration-500 hover:bg-orange-600'>Send</button>

                                </div>

                                <div className='flex items-center justify-center relative py-4 rounded-t-3xl bg-orange-500'>

                                    <p className=' font-bold'>Back to the login? <button onClick={() => setShow("login") } className='hover:underline cursor-pointer'>Yes</button></p>

                                </div>

                                




                           </form>


                        
                    </div>



                 {/* Forgot pass end */}



            </div>


       </section>

    </>
  
)
}

export default Forgot_pass
