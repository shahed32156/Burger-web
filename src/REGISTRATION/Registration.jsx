import React, { useState } from 'react'

import Swal from'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Registration = ({show, setShow}) => {

    
    const navigate = useNavigate();
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [nameError, setNameError] = useState('');
    const [passError, setPassError] = useState('');


    const validateName = (value) => {
        // Check if the input contains only letters and spaces
        const regex = /^[a-zA-Z\s]*$/;
        if (!regex.test(value)) {
          setNameError('Invalid name: only letters and spaces are allowed');
        } else if (value.length < 4) {
          setNameError('Name must be more than 3 characters');
        } else {
          setNameError('');
        }
      };

      const validatePassword = (value) => {
        const passPattern =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6}$/;
        if (!passPattern.test(value)) {
          setPassError(
            'Password must be at least 6 characters long.'
          );
        } else {
          setPassError('');
        }
      };


    const handleName = (e) => {

       const value = e.target.value;
        setName(value);
        validateName(value);
      
  } 

   const handleEmail = (e) => {

       setEmail(e.target.value);

   }

   const handlePass = (e) => {
    const value = e.target.value;
    setPass(value);
    validatePassword(value);
  };

const handleSubmit = (e) => {
    e.preventDefault();
 

    Swal.fire({
        title: "Success",
        text: "Successfully reistered",
        icon: "success"
    });

    navigate("/home");
}

  return (
    
    <>

       <section className='pt-8 sm:pt-14 md:pt-20 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10 px-3'>


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


                 {/* Registration start */}



                    <div className='mt-8'>


                            <div className='text-center'>
                                <h1 className='text-3xl font-[Matemasie]'>Registration</h1>
                            </div>

                           <form onSubmit={handleSubmit} className='flex flex-col gap-6 mt-10' action="">


                           <div className='flex  justify-center relative'>

                                    
                                    <input className='w-full mx-5 bg-transparent sm:w-[320px] pl-7 pb-1 text-[18px] border-b-2 border-white focus:outline-none' 
                                    placeholder='Full name' required
                                    type="text" name="name" id="" onChange={handleName} value={name} />
                                    <i class="fa-regular fa-user text-xl absolute bottom-1 left-5 sm:left-10"></i>
                                    
                           </div>
                           
                             {nameError && <p className='text-red-500 -mt-3 text-sm text-center flex relative pl-5 sm:pl-10'>{nameError}</p>}                  
                           

                                <div className='flex justify-center relative'>

                                    
                                    <input className='w-full mx-5 bg-transparent sm:w-[320px] pl-7 pb-1 text-[18px] border-b-2 border-white focus:outline-none' 
                                    placeholder='Email' required
                                    type="email" name="email" id="" onChange={handleEmail} value={email} />
                                    <i class="fa-regular fa-envelope text-xl absolute bottom-1 left-5 sm:left-10"></i>

                                </div>

                                <div className='flex justify-center relative'>

                                     <input className='w-full mx-5 bg-transparent sm:w-[320px] pl-7 pb-1 text-[18px] border-b-2 border-white focus:outline-none' 
                                     placeholder='Password' required
                                     type="password" name="password" id="" onChange={handlePass} value={pass} />
                                     <i class="fa-solid fa-lock text-xl absolute bottom-1 left-5 sm:left-10"></i>

                                </div>

                                {passError && <p className='text-red-500 text-sm text-center flex relative pl-5 sm:pl-10 -mt-3'>{passError}</p>}                  

                                <div className='flex justify-center relative'>

                                    <button className='h-[40px] w-[130px] text-xl bg-orange-500 rounded-md duration-500 hover:bg-orange-600'>Register</button>

                                </div>

                                <div className='flex items-center justify-center relative py-4 rounded-t-3xl bg-orange-500'>

                                    <p className=' font-bold'>Already have an account? <span onClick={() => setShow("login")} className='hover:underline cursor-pointer'>Login</span></p>

                                </div>



                           </form>


                        
                    </div>



                 {/* Registration end */}



            </div>


       </section>

    </>
  
)
}

export default Registration
