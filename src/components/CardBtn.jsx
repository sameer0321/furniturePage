import React from "react";

const CardBtn = (props) => {
    return (
        <>
            <button
                className={` bg-[#BD7D41] px-[13px] py-[10px] text-center text-white text-xl max-md:text-[14px] font-medium font-["Poppins"] duration-300 hover:bg-yellow-800  ${props.className}`}
            >
                {props.text}
            </button>
        </>
    );
};

export default CardBtn;