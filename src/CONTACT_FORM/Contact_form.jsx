import React, { useState } from 'react';

import Swal from'sweetalert2';

const Contact_form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [nameError, setNameError] = useState('');

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

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    validateName(value);
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleMsg = (e) => {
    const value = e.target.value;
    setMsg(value);
  };

  const handleSubmit = (e) => {

    e.preventDefault();
 
         Swal.fire({
             title: "Success",
             text: "Successfully Submiited",
             icon: "success"
         }); 
 
  };

  return (
    <>
      <section className='mt-20'>
        <header className='flex flex-col md:flex-row gap-5 items-center justify-between mx-3 md:mx-14 lg:mx-24 xl:mx-48 2xl:mx-64'>
          <div>
            <img src="./Images/contact-form.png" alt="Contact" />
          </div>

          <form onSubmit={handleSubmit} action="" className='flex flex-col items-center gap-5 mt-5'>
            <div className='flex flex-col gap-3'>
              <div className="flex justify-center sm:justify-start items-center gap-2">
                <img className="h-[45px] w-[45px]" src="./Images/logo.png" alt="ChilliBurg Logo" />
                <h1 className="text-black text-2xl font-bold">̷C̷̷h̷̷i̷̷l̷̷l̷̷i̷̷B̷̷u̷̷r̷̷g̷</h1>
              </div>

              <div>
                <p className='font-semibold text-center sm:text-start sm:w-[350px]'>
                  Feel free to contact or send your feedback, if you have any query or suggestion.
                </p>
              </div>
            </div>

            <div>
              <input
                className='h-[45px] w-[300px] sm:w-[350px] pl-2 border-black border-2 rounded focus:outline-none bg-transparent'
                type="text"
                name="name"
                value={name}
                onChange={handleNameChange}
                required
                placeholder='Full name'
              />
              {nameError && <p className='text-red-500 text-sm mt-1'>{nameError}</p>}
            </div>

            <div>
              <input
                className='h-[45px] w-[300px] sm:w-[350px] pl-2 border-black border-2 rounded focus:outline-none bg-transparent'
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
                required
                placeholder='Email'
              />
            </div>

            <div>
              <textarea
                className='h-[100px] w-[300px] sm:w-[350px] pt-1 pl-2 border-black border-2 rounded focus:outline-none bg-transparent'
                required
                value={msg}
                onChange={handleMsg}
                placeholder='Type your message'
              ></textarea>
            </div>

            <div className='flex relative'>
              <button
                className='h-[40px] w-[120px] text-xl bg-orange-500 text-white rounded-md duration-500 text-[16px] hover:bg-orange-600'
                type="submit"
                disabled={!!nameError} // Disable the button if there's an error
              >
                Submit
              </button>
            </div>
          </form>
        </header>
      </section>
    </>
  );
};

export default Contact_form;
