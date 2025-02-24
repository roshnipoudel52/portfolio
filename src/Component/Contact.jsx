import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent!');
    };

    return (
        <section className="pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-20 bg-gray-50" id="contact">
            <div className="max-w-screen-2xl container mx-auto px-4 sm:px-8 md:px-20 flex flex-col items-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10">
                    Contact <span className="text-green-500">Me</span>
                </h2>

                <div className="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 space-y-6">
                    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-6">
                        <div>
                            <label htmlFor="name" className="text-gray-700 text-base sm:text-lg">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="text-gray-700 text-base sm:text-lg">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition"
                                placeholder="Your Email"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="text-gray-700 text-base sm:text-lg">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition"
                                rows="5"
                                placeholder="Your Message"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-green-500 text-black rounded-lg shadow-md hover:bg-green-600 focus:ring-2 focus:ring-green-400 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
