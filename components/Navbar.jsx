
import Image from "next/image";
import Link from "next/link";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import React, {useState} from "react";
import {FaInstagram, FaLinkedinIn, FaTwitch, FaTwitter, FaYoutube} from 'react-icons/fa'



const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav);
    }

    return (
        <div className="fixed w-full h-20 bg-[#eeca28]  shadow-xl z-[100]">
            <div className="flex justify-between items-center w-full px-2  2xl:px-16">
              <Image src='/../public/assets/navLogo2.png' alt='/' width='100' height='40' />

                <ul className="hidden md:flex"> 
                    <Link href='/'>
                        <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                    </Link>
                    <Link href='/'>
                        <li className="ml-10 text-sm uppercase hover:border-b">Apps</li>
                    </Link>
                    <Link href='/'>
                        <li className="ml-10 text-sm uppercase hover:border-b">News</li>
                    </Link>
                    <Link href='/'>
                        <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className="md:hidden">
                    <AiOutlineMenu size={25} />
                </div>
            </div>

            <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
                <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease duration-500" : "fixed left-[-100%] top-0 p-10 ease duration-500"}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image src='/../public/assets/images.png' width='87' height='35' alt='/' />
                            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 ny-4 m-1">
                            <p className="w-[85%] md:w-[90%] py-4">Dharma Wiratama</p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href='/'>
                                <li className="py-4 text-sm">Home</li>
                            </Link>
                            <Link href='/'>
                                <li className="py-4 text-sm">Apps</li>
                            </Link>
                            <Link href='/'>
                                <li className="py-4 text-sm">News</li>
                            </Link>
                            <Link href='/'>
                                <li className="py-4 text-sm">Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#2b2a2a]">Let's Connect</p>
                            <div className="flex items-center justify-between ny-4 w-full sm:w-[80%]">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaLinkedinIn />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaYoutube />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaTwitter />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaInstagram />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
            
}

export default Navbar