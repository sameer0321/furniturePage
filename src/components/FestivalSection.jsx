import React from "react";
import CardBtn from "./CardBtn";

const FestivalSection = () => {
    return (
        <>
            <div>
                <div className=" mx-auto  max-w-[1320px] py-[50px] px-3 pt-[80px] sm:pt-[150px] overflow-hidden">
                    <div className="row">
                        <div className=" w-full md:w-1/2  px-3" data-aos="fade-up-left">
                            <div className="bg-[url(./assets/images/festival-bg.png)]   bg-center bg-no-repeat bg-cover hover:shadow-xl duration-500">
                                <div className="relative pt-[30px] pb-[60px] pl-[63px] lg:pl-[110px] before:absolute before:w-[50px] lg:before:w-[96px] before:h-[1px] before:bg-black before:left-0 before:top-[13%] before:ml-[3px] ">
                                    <p className="text-[#BD7D41] text-xl font-normal font-poppins  ">
                                        Festival Offer
                                    </p>
                                    <h4 className="text-[#BD7D41] text-[28px] sm:text-[35px] font-bold font-Poppins mt-[20px]">
                                        Upto 40% Off
                                    </h4>
                                    <p className="max-w-[262px] text-[#3C3C3C] text-opacity-70 leading-normal text-lg font-normal font-Poppins mt-[15px] mb-[38px]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    </p>
                                    <CardBtn text="ADD TO CART" />
                                </div>
                            </div>
                        </div>
                        <div className=" w-full md:w-1/2 px-3 pt-5 md:pt-0" data-aos="fade-up-right">
                            <div className="bg-[url(./assets/images/festival-bg-2.png)] bg-cover  bg-center bg-no-repeat hover:shadow-xl duration-500">
                                <div className="relative pt-[30px] pb-[60px] pl-[63px] lg:pl-[110px] before:absolute before:w-[50px] lg:before:w-[96px] before:h-[1px] before:bg-black before:left-0 before:top-[13%] before:ml-[3px]">
                                    <p className="text-[#BD7D41] text-xl font-normal font-poppins  ">
                                        Festival Offer
                                    </p>
                                    <h4 className="text-[#BD7D41] text-[28px] sm:text-[35px] font-bold font-Poppins mt-[20px]">
                                        Upto 40% Off
                                    </h4>
                                    <p className="max-w-[262px] text-[#3C3C3C] text-opacity-70 leading-normal text-lg font-normal font-Poppins mt-[15px] mb-[38px]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    </p>
                                    <CardBtn text="ADD TO CART" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FestivalSection