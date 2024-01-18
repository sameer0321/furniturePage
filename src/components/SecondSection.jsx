import React from "react";
import chairImg from "../assets/images/Chair-img.png";
import CommonBtn from "./CommonBtn";
import { Play } from "./icon";
const SecondSection = () => {
    return (
        <div className="max-w-[1320px] px-3 mx-auto py-[50px] overflow-hidden">
            <div className="row sm:pt-32">
                <div className="w-full lg:w-1/2 px-3 max-lg:text-center" data-aos="fade-right">
                    <div className="relative ml-[61px] max-sm:ml-0 max-sm:after:hidden after:absolute after:max-w-[416px] after:w-full after:h-[336px] after:bg-gradient-to-l from-gray-300 to-gray-800 after:top-[-10%] after:left-[-10%] inline-block shadow-[3px_8px_26px_0_rgba(0,0,0,0.12)]">
                        <img className="relative z-[3] " src={chairImg} alt="chair-img" />
                        <div className=" px-4 flex items-center bg-white max-sm:py-[2px] py-3 absolute bottom-0 right-0 z-[5]">
                            <p className="relative before:absolute before:w-[66px] before:h-[1px] before:bg-black before:right-[10px] before:top-[56%] pr-[85px] text-[#243040] text-sm font-normal font-poppins">
                                Explore Video
                            </p>{" "}
                            <a href="">
                                <Play />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 px-3 max-lg:pt-7" data-aos="fade-left">
                    <p className="text-[#BD7D41] text-xl font-normal font-poppins relative before:absolute before:w-[96px] before:h-[1px] before:bg-black before:left-0 before:top-[45%] pl-[110px]">
                        Welcome Our Story
                    </p>
                    <h2 className="text-[#243040] text-[35px] font-bold font-poppins max-w-[436px] pt-5">
                        We create the product you tell us you wish existed.
                    </h2>
                    <p className="text-[#4D4D4D] text-lg font-normal font-poppins max-w-[596px] pt-5 pb-9">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        faucibus, urna at pulvinar porta, augue lorem ullamcorper orci, non
                        rhoncus nisi neque sit amet nibh. Phasellus consectetur semper ante
                        et mattis
                    </p>
                    <CommonBtn text="READ MORE" />
                </div>
            </div>
        </div>
    );
};

export default SecondSection;