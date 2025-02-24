import React from 'react';

export default function Experience() {
    return (
        <section className="pt-12 sm:pt-16 md:pt-20 bg-gray-50 min-h-screen" id="experience">
            <div className="max-w-screen-2xl container mx-auto px-4 sm:px-8 md:px-20 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12">
                    My <span className="text-green-500">Experience</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="w-full sm:w-3/4 md:w-full lg:w-11/12 mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                            Frontend Developer at Intelzy
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base mt-2">January 2023 - Present</p>
                        <ul className="mt-4 space-y-2 text-left text-gray-700 list-disc list-inside">
                            <li>Developed and maintained responsive user interfaces using React and Tailwind CSS.</li>
                            <li>Collaborated with design and backend teams to implement new features.</li>
                            <li>Optimized web performance and ensured cross-browser compatibility.</li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-3/4 md:w-full lg:w-11/12 mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                            Web Developer Intern at Solutions Technology
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base mt-2">June 2022 - December 2022</p>
                        <ul className="mt-4 space-y-2 text-left text-gray-700 list-disc list-inside">
                            <li>Assisted in the development of web applications using HTML, CSS, and JavaScript.</li>
                            <li>Participated in code reviews and collaborated on fixing bugs and implementing features.</li>
                            <li>Gained hands-on experience with Git version control and Agile methodologies.</li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-3/4 md:w-full lg:w-11/12 mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-lg col-span-1 md:col-span-2">
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                            Freelance Web Developer
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base mt-2">2021 - 2022</p>
                        <ul className="mt-4 space-y-2 text-left text-gray-700 list-disc list-inside">
                            <li>Built custom websites for small businesses using WordPress and React.</li>
                            <li>Worked directly with clients to gather requirements and deliver tailored solutions.</li>
                            <li>Provided ongoing support and maintenance for client websites.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
