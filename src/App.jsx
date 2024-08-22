import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RevealOnScroll from './HOOK/RevealOnScroll';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Navbar from './NAVBAR/Navbar';
import Carousel from './CAROUSEL/Carousel';
import Recipe from './RECIPE/Recipe';
import Popular from './POPULAR/Popular';
import Delivery from './DELIVERY/Delivery';
import Contact from './CONTACT/Contact';
import Footer from './FOOTER/Footer';
import Chefs from './OUR_CHEFS/Chefs';
import { FaArrowUp } from 'react-icons/fa'; 
import About from './ABOUT/About';
import Contact_form from './CONTACT_FORM/Contact_form';
import Order from './ORDER_NOW/Order';
import Review from './ORDER_NOW/Review';
import Burgers from './BURGERS/Burgers';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    // Scroll detection
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isLoading ? (
        <div className='flex justify-center items-center h-[100vh]'>
          <ClimbingBoxLoader color="#f68726" />
        </div>
      ) : (
        <div className='bg-[#fadea9]'>
          
          <BrowserRouter>
          
          <Navbar />

            <RevealOnScroll>
              <Carousel />
            </RevealOnScroll>
            

          <Routes>


          <Route path='/home' element={ <>
          
          

            <RevealOnScroll>
              <Recipe />
            </RevealOnScroll>

            <RevealOnScroll>
              <Popular />
            </RevealOnScroll>

            <RevealOnScroll>
              <Delivery />
            </RevealOnScroll>

            <RevealOnScroll>
              <Chefs />
            </RevealOnScroll>

            <RevealOnScroll>
              <Contact />
            </RevealOnScroll>

            

          </>

          } 
          
          /> 

          <Route path='/*' element={ <>
          
          
            

            <RevealOnScroll>
              <Recipe />
            </RevealOnScroll>

            <RevealOnScroll>
              <Popular />
            </RevealOnScroll>

            <RevealOnScroll>
              <Delivery />
            </RevealOnScroll>

            <RevealOnScroll>
              <Chefs />
            </RevealOnScroll>

            <RevealOnScroll>
              <Contact />
            </RevealOnScroll>
            

            

          </>


          } 
          
          /> 

          <Route path='/about' element={ 
            
            <>
              
               <RevealOnScroll>

                <About />
                
               </RevealOnScroll>

            </>


          }  
          
          
          />

          <Route path='/contact' element={ 
            
            <>
              
               <RevealOnScroll>

                
                <Contact_form/>
                <Contact />
                
               </RevealOnScroll>

            </>


          }  
          
          
          />

          <Route path='/burgers' element={ 
            
            <>
              
               <RevealOnScroll>

                
                <Burgers />
                
               </RevealOnScroll>

            </>


          }  
          
          
          />

          <Route path='/order_now' element={ 
            
            <>
              
              
               <RevealOnScroll>

                <Order />
                
               </RevealOnScroll>

            </>


          }  
          
          
          />



          </Routes>
          
          
          <Footer />
          </BrowserRouter>

          {/* Scroll-to-top button */}
          {showScrollTop && (
            <button 
              onClick={scrollToTop} 
              className="fixed bottom-5 right-5 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition-colors duration-300"
            >
              <FaArrowUp size={20} />
            </button>
          )}

        </div>
      )}
    </>
  );
}

export default App;
