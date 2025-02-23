import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <section className="pt-20 bg-gray-50 min-h-screen" id="home">
            <div className="max-w-screen-2xl h-screen bg-white container mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center justify-between">

                <div className="md:w-1/2 text-center md:text-left space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Hi, I'm <span className="text-green-500">Roshni Paudel</span>
                    </h2>
                    <p className="text-gray-700 text-lg">
                        I'm a passionate Web Developer crafting beautiful and functional web experiences.
                    </p>
                    <div className="space-x-4">
                        <button className="px-6 py-2 border-2 bg-green-500 text-white rounded-2xl shadow-md hover:bg-green-600 transition">
                            Get In Touch
                        </button>



                        <button className="px-6 py-2 border border-green-500 text-green-500 rounded-2xl shadow-md hover:bg-green-100 transition">
                            <Link to="/po">
                            View Portfolio
                            </Link>
                        </button>





                    </div>
                </div>

                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <img
                        src="/roshni.jpg"
                        alt="Roshni Paudel"
                        className="w-72 h-72 rounded-full border-4 border-green-500 shadow-lg object-cover"
                    />
                </div>
            </div>
            
        </section>


        
    );
}

