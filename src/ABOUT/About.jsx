import React from 'react';

const About = () => {
  return (
    <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-6 mx-3 sm:mx-5 md:mx-10 lg:mx-24 xl:mx-48 2xl:mx-64">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-extrabold font-[Matemasie]">About Us</h1>
        <p className="md:w-[400px] text-justify">
          Welcome to ChilliBurg, where we craft burgers with passion and precision. Our commitment to quality means that every bite is packed with fresh ingredients, bold flavors, and the perfect balance of textures. Whether you're craving a classic cheeseburger or something more adventurous, our menu has something to satisfy every palate. We believe in serving not just food but an experience that brings comfort and joy. At ChilliBurg, every burger is a taste of our dedication to excellence.
        </p>
      </div>

      <div>
        <img
          className="h-[350px] w-[350px]  md:h-[300px] md:w-[350px] lg:h-[400px] lg:w-full mx-auto"
          src="./Images/about.png"
          alt="About ChilliBurg"
        />
      </div>
    </div>
  );
};

export default About;
