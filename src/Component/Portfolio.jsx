import React from 'react';
import About from './About';

export default function Portfolio() {
    const projects = [
        {
            title: 'Project One',
            description: 'A web application built with React and Tailwind CSS to manage tasks.',
            link: 'https://example.com/project-one',
            image: '/project1.png'
        },
        {
            title: 'Project Two',
            description: 'A full-stack website built with Node.js and MongoDB for an e-commerce platform.',
            link: 'https://example.com/project-two',
            image: '/2.png'
        },
        {
            title: 'Project Three',
            description: 'A personal portfolio website to showcase my work and skills.',
            link: 'https://example.com/project-three',
            image: '/project3.jpg'
        }
    ];

    return (
        <section id="portfolio" className="pt-20 bg-gray-50 min-h-screen" >
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 text-center">
                <h2 className="text-4xl font-bold text-center mb-10">
                    My <span className="text-green-500">Portfolio</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                            <p className="text-gray-600 text-lg mt-2">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block text-green-500 hover:text-green-600 font-semibold"
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
         
        </section>
    );
}
