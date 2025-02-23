import React from 'react';



export default function About() {
  return (

    <section id='about' className="min-h-screen flex items-center justify-center bg-gray-50 py-10 px-4 md:px-20" >
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 h-screen">
        <img
          src="/roshni.jpg"
          alt="Roshni Paudel"
          className="h-40 w-40 rounded-full border-4 border-green-500 shadow-md"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">
            About <span className="text-green-500">Me</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Hello! I'm Roshni Paudel, a passionate web developer with experience in creating
            responsive and user-friendly web applications. I specialize in working with React and Tailwind CSS to build modern, performant websites.
            I enjoy turning complex problems into simple, beautiful designs and clean code.
          </p>
          <div className="mt-6">
            <a
              href="#portfolio"
              className="inline-block bg-green-500 text-white px-6 py-2 rounded-2xl shadow-md hover:bg-green-600 transition duration-300"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>

    </section>
   
  );
}
