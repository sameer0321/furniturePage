import React from 'react'
import Navbar from './Navbar'
import CommonBtn from './CommonBtn'

const HeroSection = () => {
    return (
        <>
            <div className='bg-[url(./assets/images/hero-bg-img.webp)] bg-cover bg-no-repeat lg:h-screen bg-center overflow-hidden'>
                <Navbar />
                <div className='flex flex-col justify-center pt-[25px] sm:pt-36 pb-28' data-aos="zoom-in"  data-aos-delay="2000">
                    <h1 className='mx-auto max-w-[908px] leading-normal text-center text-white text-[25px] sm:text-5xl font-bold font-["Poppins"]'>Awesome Design Best Furniture For Your Interior</h1>
                    <p className='pt-4 text-center text-white sm:text-xl text-lg font-normal font-["Poppins"]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus </p>
                    <div className='flex justify-center'>
                        <CommonBtn customClass="mt-[51px]" text="SHOP NOW" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
