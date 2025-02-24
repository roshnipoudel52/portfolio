import React from 'react';

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
        <section id="portfolio" className="pt-20 pb-16 bg-gray-50 min-h-screen">
            <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 text-center">
                <h2 className="text-4xl font-bold mb-10">
                    My <span className="text-green-500">Portfolio</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-52 object-cover rounded-t-lg transform hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                                <p className="text-gray-600 text-base mt-2">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block text-green-500 hover:text-green-600 font-semibold transition-colors"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
