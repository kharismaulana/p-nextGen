import React from "react";
import {FaInstagram, FaLinkedinIn,  FaTwitter, FaYoutube} from 'react-icons/fa'
import Link from "next/link";
import Image from "next/image";

const Main = () => {
  return (
    <div className="w-full h-screen text-center ">
       
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
     
        <div>
          <p className="uppercase text-sm tracking-widest text-[#eceff3]">
            LET"S BUILD SOMETHING MAGIC
          </p>
          <h1 className="py-4 text-[#eceff3]">
            PORTAL <span className="text-[#eeca28]">NEXT GEN</span>
          </h1>
          <h1 className="uppercase py-4 text-[#eceff3]">
            Input your project in here
          </h1>
          <p className="py-4 text-[#eceff3] max-w-[-70%] m-auto ">
            A web developer is a professional who specializes in the development
            of World Wide Web applications using a combination of languages such
            as HTML, CSS, and JavaScript. They use these languages to build and
            maintain websites, web applications, and web services.
          </p>
       
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href='/' target='_blank'>
                <div className="rounded-full shadow-lg shadow-gray-900 p-3 bg-[#eceff3] border-solid border-2 border-gray-900 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
                </div>
            </Link>
            <Link href='https://www.youtube.com/@seskotnial6076' target='_blank'>
                <div className="rounded-full shadow-lg shadow-gray-900 p-3 bg-[#eceff3] border-solid border-2 border-gray-900 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaYoutube />
                </div>
            </Link>
            <Link href='/' target='_blank'>
            <div className="rounded-full shadow-lg shadow-gray-900 p-3 bg-[#eceff3] border-solid border-2 border-gray-900 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaTwitter />
            </div>
            </Link>
            <Link href='/' target='_blank'>
            <div className="rounded-full shadow-lg shadow-gray-900 p-3 bg-[#eceff3] border-solid border-2 border-gray-900 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaInstagram />
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
