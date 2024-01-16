import React from 'react'

const CommonBtn = (props) => {
    return (
        <div>
            <button className={`bg-[#BD7D41] border-none py-[19px] px-12 text-white text-xl font-semibold font-["Poppins"] duration-300 hover:bg-yellow-800 ${props.customClass}`}>{props.text}</button>
        </div>
    )
}

export default CommonBtn
