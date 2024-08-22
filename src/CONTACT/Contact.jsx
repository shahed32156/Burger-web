import React from 'react'

const Contact = () => {
  return (
    <>
    
    <section className='bg-[#291b1b] text-white pb-10 md:pb-0 pt-20 mt-20'>

            
        <div className="text-center">
            <h1 className="text-3xl font-extrabold font-[Matemasie]">Contact Now</h1>
        </div>

        <div className='flex gap-5 flex-col md:flex-row items-center justify-evenly mt-10'>

                <div className='flex flex-col items-end md:items-start md:flex-row gap-10'>
                    <img className='h-[250px] w-[300px] sm:h-[300px] sm:w-[350px]' src="./Images/contact-man.png" alt="" />
                  
                     <img className='h-[60px] w-[60px]' src="./Images/sticker-burger.svg" alt="" />
                
                </div>

{/* 2nd part start */}
                <div className='flex flex-col gap-8'>


                        <div className='flex flex-col gap-6'>

                            <h3 className='text-2xl font-bold font-mono'>Write Us</h3>
                            <div className='relative flex items-center gap-4'>
                                <i className='fa-brands fa-facebook-f cursor-pointer  hover:bg-yellow-300 bg-yellow-400 text-black duration-500 h-[40px] w-[50px] rounded-xl flex justify-center items-center text-xl right-3'></i>
                                <i className='fa-brands fa-whatsapp cursor-pointer  hover:bg-yellow-300  bg-yellow-400 text-black duration-500 h-[40px] w-[50px] rounded-xl flex justify-center items-center text-xl right-3'></i>
                                <i className='fa-brands fa-instagram cursor-pointer  hover:bg-yellow-300 bg-yellow-400 text-black duration-500 h-[40px] w-[50px] rounded-xl flex justify-center items-center text-xl right-3'></i>
                            </div>

                            </div>

                            <div className='flex flex-col gap-2'>

                            <h3 className='text-2xl font-bold font-mono'>Find Us Here</h3>
                            <p className='w-[250px]'>South Kafrul, Oposite of Workshop, Dhaka-1206</p>

                            </div>

                </div>


{/* 2nd part end */}


            <div className='flex flex-col gap-3'>


                <h3 className='text-2xl font-bold font-mono'>Call Us and Order</h3>
                <div className='flex flex-col gap-1'>
                    <p>+880174-1987566</p>
                    <p>+880197-7594977</p>
                
                </div>

                <img className='h-[70px] w-[60px] mt-10 mx-auto' src="./Images/sticker-soda.svg" alt="" />

            </div>

    </div>



    </section>
    
    
    </>
  )
}

export default Contact
