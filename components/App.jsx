import Image from "next/image";
import React from "react";

const App = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1248px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#eeca28]">
          Aplication
        </p>
        <h2 className="py-4 text-[#eceff3]">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            
            <div className="p-4 shadow-xl rounded-xl shadow-gray-900 bg-[#eceff3] border-solid border-2 border-gray-900 hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                <div className="m-auto">
                    <Image
                    src="/../public/assets/AcademiSys2.png"
                    width="100"
                    height="100"
                    alt="/"
                    />
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <h3>Academic Information</h3>
                </div>
                </div>
            </div>
            <div className="p-4 shadow-xl rounded-xl shadow-gray-900 bg-[#eceff3] border-solid border-2 border-gray-900 hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                <div className="m-auto">
                    <Image
                    src="/../public/assets/Librarios2.png"
                    width="100"
                    height="100"
                    alt="/"
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h3>Librarios</h3>
                </div>
                </div>
            </div>

            <div className="p-4 shadow-xl rounded-xl shadow-gray-900 bg-[#eceff3] border-solid border-2 border-gray-900 hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                <div className="m-auto">
                    <Image
                    src="/../public/assets/KursUltima2.png"
                    width="100"
                    height="100"
                    alt="/"
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h3>KursUltima</h3>
                </div>
                </div>
            </div>

            <div className="p-4 shadow-xl rounded-xl shadow-gray-900 bg-[#eceff3] border-solid border-2 border-gray-900 hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                <div className="m-auto">
                    <Image
                    src="/../public/assets/visual.png"
                    width="100"
                    height="100"
                    alt="/"
                    />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h3>VisualMedium</h3>
                </div>
                </div>
            </div>




        </div>
      </div>
    </div>
  );
};

export default App;
