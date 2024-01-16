import React, { useState, useEffect } from 'react';
import Backbtn from "../assets/images/back-to-top.webp";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 200) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  return (
    <>
 <button
      className={`${
        isVisible ? 'opacity-100' : 'opacity-0'
      } fixed z-50 bottom-8 right-8 p-2  rounded-full   ease-in-out focus:outline-none`}
      onClick={scrollToTop}
    >
      <img src={Backbtn} alt="backtotop" className='rounded-[50px] max-w-[50px] max-h-[50px]' />
    </button>
    </>
  )
}

export default BackToTop