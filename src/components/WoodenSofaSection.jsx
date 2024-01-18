import React from 'react'
import SofaImg from "../assets/images/sofa-img.webp"
import CommonBtn from './CommonBtn'


const WoodenSofaSection = () => {
    return (
        <>
            <div className='bg-[#F7F7F8] pt-[64px] relative z-[1] overflow-hidden'>
                <div className='max-w-[1320px] container px-3 mx-auto'>
                    <div className="row justify-center">
                        <div className='lg:w-1/3 px-3 pt-3' data-aos="fade-right">
                            <div className='flex items-center gap-[7px]'>
                                <div className="w-[95px] h-[0px] border border-black"></div>
                                <p className="text-center text-yellow-600 sm:text-xl text-lg font-normal text-nowrap font-['Poppins']">Shopping Store</p>
                            </div>
                            <p className="max-w-[436px] mb-[53px] text-slate-800 sm:text-[35px]  text-[25px] font-bold font-['Poppins'] mt-6">Wooden Sofa Starts From ₹ 1200.00</p>
                            <CommonBtn text="SHOP NOW" />
                        </div>
                        <div className='lg:w-7/12 px-3 mt-8 lg:mt-0' data-aos="fade-left">
                            <img src={SofaImg} alt="sofaimg" className='lg:w-full max-lg:max-w-[500px] w-full relative z-[2]' />
                        </div>
                    </div>
                </div>
                <div className="min-[1440px]:w-[741px] lg:w-[600px] min-[983px]:w-[400px] sm:w-[500px] h-[270px] bg-slate-800 right-0 bottom-[-65px] absolute z-[-1]" />
            </div >

        </>
    )
}

export default WoodenSofaSection;