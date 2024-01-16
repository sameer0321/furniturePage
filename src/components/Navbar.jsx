import React from 'react'
import logo from '../assets/images/logo.png'
import SearchIcon from '../assets/images/search-icon.svg'
import CartIcon from '../assets/images/cart-icon.svg'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    const [nav, setNav] = useState(false)
    function show() {
        setNav(!nav)
        if (nav === false) {
            document.body.classList.add("max-lg:overflow-hidden")
        }
        else {
            document.body.classList.remove("max-lg:overflow-hidden")
        }
    }
    return (
        <>
            <nav className='max-w-[1320px] mx-auto px-3 pt-4 overflow-hidden'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <img src={logo} alt="logo" />
                        <h2 className='text-white text-[33.02px] font-bold font-["Roboto"]'>FURNITURE</h2>
                    </div>
                    <div className='flex items-center'>
                        <ul
                            className={`${nav ? "right-0" : "right-[-100%]"
                                } flex items-center gap-14 mobileView duration-300`}
                        >
                            <Link
                                to="/"
                                onClick={show}
                                className={`${location.pathname === "/" &&
                                    "after:duration-500 after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0  after:h-[3px] after:rounded-full after:bg-[#BD7D41] "
                                    } text-lg font-normal text-white  font-["Roboto"]  relative py-1.5 `}
                            >
                                HOME
                            </Link>
                            <Link
                                to="/About"
                                onClick={show}
                                className={`${location.pathname === "/About" &&
                                    "after:duration-500 after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0  after:h-[3px] after:rounded-full after:bg-[#BD7D41]"
                                    } text-lg font-normal text-white font-["Roboto"] text-nowrap relative py-1.5 `}
                            >
                                ABOUT US
                            </Link>
                            <Link
                                to="/Shop"
                                onClick={show}
                                className={`${location.pathname === "/Shop" &&
                                    "after:duration-500 after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0  after:h-[3px] after:rounded-full after:bg-[#BD7D41]"
                                    } text-lg font-normal text-white  font-["Roboto"]  relative py-1.5 `}
                            >
                                SHOP
                            </Link>
                            <Link
                                to="/Contacts"
                                onClick={show}
                                className={`${location.pathname === "/Contacts" &&
                                    "after:duration-500 after:w-full after:absolute relative after:left-0 after:right-0 after:bottom-0  after:h-[3px] after:rounded-full after:bg-[#BD7D41]"
                                    } text-lg font-normal text-white font-["Roboto"] text-nowrap uppercase relative py-1.5 `}
                            >
                                Contact Us
                            </Link>
                            <li className="gap-7 hidden max-sm:flex">
                                <a onClick={show} href="#">
                                    <img src={SearchIcon} alt="search-icon" />
                                </a>
                                <Link to="/cart" onClick={show}>
                                    <img src={CartIcon} alt="cart-icon" />
                                </Link>
                            </li>
                        </ul>
                        <ul className='flex items-center gap-7 pl-10 max-sm:hidden'>
                            <li><a href="#"><img src={SearchIcon} alt="search-icon" /></a></li>
                            <li><a href="#"><img src={CartIcon} alt="cart-icon" /></a></li>
                        </ul>
                        <label className='lg:hidden pl-7' onClick={show}>
                            {nav ? (
                                <div className='relative z-40'>
                                    <span className=' flex w-6 h-1 bg-white duration-300 rounded-2xl rotate-45 mb-1'></span>
                                    <span className=' flex w-6 h-1 bg-white duration-300 rounded-2xl absolute top-0 -rotate-45 mb-1'></span>
                                </div>
                            ) : (
                                <div className='relative z-40'>
                                    <span className=' flex w-6 h-1 bg-white duration-300 rounded-2xl mb-1'></span>
                                    <span className=' flex w-6 h-1 bg-white duration-300 rounded-2xl mb-1'></span>
                                    <span className=' flex w-6 h-1 bg-white duration-300 rounded-2xl'></span>
                                </div>
                            )}
                        </label>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar 
