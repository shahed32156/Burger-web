import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import Login from '../LOGIN/Login';
import Registration from '../REGISTRATION/Registration';
import Forgot_pass from '../LOGIN/Forgot_pass';

const Navbar = () => {
  const [show, setShow] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  navigate("/burgers");

  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#fadea9] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img className="h-[45px] w-[45px]" src="./Images/logo.png" alt="" />
          <h1 className="text-black text-2xl font-bold">̷C̷̷h̷̷i̷̷l̷̷l̷̷i̷̷B̷̷u̷̷r̷̷g̷ </h1>
        </div>

        <div className="act-link hidden md:flex space-x-8 text-black">
          <NavLink
            to="/home"
            className="relative hover:text-green-500 font-[Matemasie] duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-2 before:h-[4px] before:w-full before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100"
          >
            Home
          </NavLink>
          <NavLink
            to="/burgers"
            className="relative hover:text-green-500 font-[Matemasie] duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-2 before:h-[4px] before:w-full before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100"
          >
            Burgers
          </NavLink>
          <NavLink
            to="contact"
            className="relative hover:text-green-500 font-[Matemasie] duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-2 before:h-[4px] before:w-full before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100"
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className="relative hover:text-green-500 font-[Matemasie] duration-500 before:content-[''] before:absolute before:left-0 before:-bottom-2 before:h-[4px] before:w-full before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100"
          >
            About
          </NavLink>
        </div>

        <div className="gap-4 hidden md:flex items-center">
          <i
            className="fa-solid fa-magnifying-glass text-xl cursor-pointer"
            onClick={toggleSearch}
          ></i>
          <button onClick={() => setShow("login")} className="">
            <i className="fa-regular fa-user text-xl"></i>
          </button>
          <i
            className="fa-solid text-xl fa-cart-shopping cursor-pointer"
            onClick={toggleCart}
          ></i>
        </div>
        {show === "login" && <Login show={show} setShow={setShow} />}
        {show === "registration" && <Registration show={show} setShow={setShow} />}
        {show === "forgot_pass" && <Forgot_pass show={show} setShow={setShow} />}

        <div className="md:hidden text-black flex gap-3 items-center">
          <i
            className="fa-solid fa-magnifying-glass text-xl cursor-pointer"
            onClick={toggleSearch}
          ></i>
          <button onClick={() => setShow("login")} className="">
            <i className="fa-regular fa-user text-xl"></i>
          </button>
          <i
            className="fa-solid text-xl fa-cart-shopping cursor-pointer"
            onClick={toggleCart}
          ></i>
          <FaBars size={20} onClick={toggleNav} className="cursor-pointer" />
        </div>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSubmit} action=''
        className={`fixed top-0 left-0 w-full bg-[#fadea9] bg-opacity-95 p-4 transform ${
          searchOpen ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-300 z-40`}
      >
        <div  className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Search burger..." required
            className="w-full p-2 text-black rounded-md focus:outline-none"
          />
          <button
            
            className="ml-2 p-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
          >
            Search
          </button>
          <FaTimes size={28} onClick={toggleSearch} className="ml-4 text-black cursor-pointer" />
        </div>
      </form>

      {/* Mobile Navbar */}
      <div
        className={`act-link fixed top-0 left-0 w-full h-[400px] bg-[#fadea9] bg-opacity-90 transform ${
          navOpen ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-300 md:hidden`}
      >
        <div className="flex justify-end p-4">
          <FaTimes size={28} onClick={toggleNav} className="text-black cursor-pointer" />
        </div>
        <div className="flex flex-col items-center justify-center space-y-8 text-black text-[18px] mt-10">
         <NavLink to="/home"> <a onClick={toggleNav}>
            Home
          </a></NavLink>
          <NavLink to="/burgers" onClick={toggleNav}>
            Burgers
          </NavLink>
          < NavLink to="/contact" onClick={toggleNav}>
            Contact
          </NavLink>
          <NavLink to="/about" onClick={toggleNav}>
            About
          </NavLink>
        </div>
      </div>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-[#fadea9] shadow-lg transform ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center border-b-[3px] pb-1 border-black mx-3 mt-4">
          <i className="fa-solid text-xl fa-cart-shopping"></i>
          <FaTimes size={24} onClick={toggleCart} className="cursor-pointer" />
        </div>
        <p className="text-lg ml-3 mt-2">Your cart is empty now</p>
        <div className="text-center mt-20">
          <img className="h-[200px] w-[150px] mx-auto" src="./Images/bag.png" alt="" />
          <button
            className="mt-8 px-4 py-2 bg-orange-500 duration-500 text-white rounded-md hover:bg-orange-600 transition"
            onClick={toggleCart}
          >
            Back to the ChilliBurg <i className="fa-solid fa-arrow-right ml-1"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
