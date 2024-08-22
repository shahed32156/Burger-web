import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Review = ({ onClose }) => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);

  const handleReview = (e) => {
    setReview(e.target.value);
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Success",
      text: "Successfully Submitted",
      icon: "success",
    });
  };

  return (
    <>
      <section className='pt-9 sm:pt-14 md:pt-20 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10 px-3'>
        <div className='bg-[#2a2323] pb-8 w-full sm:w-[400px] mx-auto text-white'>
          <div className='bg-orange-500 py-4 rounded-b-[70px]'>
            <div className='relative'>
              <img className='h-[150px] w-[200px] mx-auto' src="./Images/bg-burger.png" alt="" />
              <i onClick={onClose} className="fa-regular fa-circle-xmark cursor-pointer text-3xl absolute -top-4 right-0"></i>
            </div>
            <div className='flex justify-center items-center gap-2 relative'>
              <img className='h-[45px] w-[45px]' src="./Images/logo.png" alt="" />
              <h1 className="text-2xl font-bold">̷C̷̷h̷̷i̷̷l̷̷l̷̷i̷̷B̷̷u̷̷r̷̷g̷</h1>
            </div>
          </div>

          <div className='text-center mt-6'>
            <h1 className='text-3xl font-[Matemasie]'>Add Review</h1>
          </div>

          <form onSubmit={handleSubmit} className='flex flex-col items-center gap-5 mt-10'>
            <div className='flex items-center gap-2 text-xl text-[yellow]'>
              {[...Array(5)].map((_, index) => (
                <i
                  key={index}
                  className={`fa-solid fa-star cursor-pointer ${index < rating ? 'text-[yellow]' : 'text-gray-400'}`}
                  onClick={() => handleRating(index + 1)}
                ></i>
              ))}
            </div>

            <textarea
              onChange={handleReview}
              type="text"
              name="message"
              required
              placeholder='Type your message'
              className='h-[100px] w-[300px] text-black rounded focus:outline-none pt-2 pl-2'
            >
            </textarea>

            <div className='flex justify-center relative'>
              <button className='h-[40px] w-[120px] text-xl bg-orange-500 rounded-md duration-500 hover:bg-orange-600'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Review;
