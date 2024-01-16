import React from 'react'
// import { Link } from 'react-router-dom'
import { FacebookLogo, InstagramLogo, Logo, TwitterLogo } from './icon'

const Footer = () => {
    return (
        <div className='bg-[#243040] overflow-hidden'>
            <div className='max-w-[1320px] mx-auto px-3 pt-[87px]'>
                <div className="grid md:grid-cols-2 pb-20 after:w-[1920px] after:h-[1px] relative after:absolute after:bottom-0 after:left-[-24%] after:right-0 after:bg-[#91979F]">
                    <div >
                        <div className='flex items-center gap-2'> <Logo /> <p className='text-white font-bold'>FURNITURE</p>
                        </div>
                        <p className=' text-sm font-roboto font-normal text-white max-w-[338px] pt-8 pb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien.</p>
                        <div className="flex gap-3">
                            <a href="https://www.instagram.com/" target='_blank' rel='noreferrer'> <InstagramLogo /> </a>
                            <a href="https://twitter.com/login" target='_blank' rel='noreferrer'> <TwitterLogo /> </a>
                            <a href="https://www.facebook.com/" target='_blank' rel='noreferrer'><FacebookLogo /></a>
                        </div>
                    </div>
                    <div className=' max-md:pt-5'>
                        <div className="grid sm:grid-cols-3 grid-cols-2 ">
                            <div >
                                <ul>
                                    <li className='text-white font-roboto text-sm font-semibold pb-6 relative after:absolute after:w-[130px] after:h-[1px] after:bg-[#BD7D41] after:bottom-[22px] after:left-0'>ABOUT STORE</li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-roboto'>Home</a></li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-roboto'>Shop</a></li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-roboto'>Product</a></li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-roboto'>Festival Offer</a></li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-roboto'>Log In</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul >
                                    <li className='text-white font-roboto text-sm font-semibold pb-6 relative after:absolute after:w-[130px] after:h-[1px] after:bg-[#BD7D41] after:bottom-[22px] after:left-0'>BRANDS</li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-roboto'>Album</a></li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-roboto'>Shop</a></li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-roboto'>Product</a></li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-roboto'>Festival Offer</a></li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-roboto'>Log In</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className='text-white font-roboto text-sm font-semibold pb-6 relative after:absolute after:w-[130px] after:h-[1px] after:bg-[#BD7D41] after:bottom-[22px] after:left-0'>CATEGORIES</li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-roboto'>Single</a></li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-roboto'>Aleeper Sofas</a></li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-roboto'>Accent Chairs</a></li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-roboto'>Festival Offer</a></li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-roboto'>Log In</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-center text-sm font-roboto font-normal text-white py-8'>@copyright{(new Date().getFullYear())}</p>
            </div>
        </div>
    )
}

export default Footer