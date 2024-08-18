import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="rounded-lg h-100 shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
                        <img src="/images/MyRupaya.png" className="w-full h-48 object-cover" alt="Project 1" />
                        <div className="p-6  bg-gray-900">
                            <h5 className="text-2xl font-bold mb-2 text-white">MyRupaya</h5>
                            <p className="text-gray-300 mb-4">Myrupaya is India's first unbiased financial product review and comparison platform. We undertake deep research in the terms and conditions of financial products.</p>
                            <a href="https://www.myrupaya.in/" className="inline-block px-6 py-2 mt-4 bg-yellow-300 text-black font-semibold rounded hover:bg-yellow-400 transition">
                                View Project
                            </a>
                        </div>
                    </div>
                    <div className="rounded-lg h-100 shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
                        <img src="https://via.placeholder.com/300x200" className="w-full h-48 object-cover" alt="Project 2" />
                        <div className="p-6 h-52 bg-gray-900">
                            <h5 className="text-2xl font-bold mb-2 text-white">NimboNexus Technologies</h5>
                            <p className="text-gray-300 mb-4">Our services include Salesforce deployment and customization, app development, data integration, and automation. We ensure your Salesforce implementation is perfectly suited to your business requirements</p>
                            <a href="https://nimbonexus.com/" className="inline-block px-6 py-2 mt-4 bg-yellow-300 text-black font-semibold rounded hover:bg-yellow-400 transition">
                                View Project
                            </a>
                        </div>
                    </div>
                    <div className="rounded-lg h-100 shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
                        <img src="/images/Logo.png" className="w-full h-48 object-cover" alt="Project 3" />
                        <div className="p-6 h-52 bg-gray-900">
                            <h5 className="text-2xl font-bold mb-2 text-white">D-Cart</h5>
                            <p className="text-gray-300 mb-4">Some quick example text to build on the project title and make up the bulk of the card's content.</p>
                            <a href="/" className="inline-block px-6 py-2 mt-4 bg-yellow-300 text-black font-semibold rounded hover:bg-yellow-400 transition">
                                View Project
                            </a>
                        </div>
                    </div>
                    <div className="rounded-lg h-100 shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
                        <img src="https://via.placeholder.com/300x200" className="w-full h-48 object-cover" alt="Project 4" />
                        <div className="p-6 h-52 bg-gray-900">
                            <h5 className="text-2xl font-bold mb-2 text-white">Project Title 4</h5>
                            <p className="text-gray-300 mb-4">Some quick example text to build on the project title and make up the bulk of the card's content.</p>
                            <a href="/" className="inline-block px-6 py-2 mt-4 bg-yellow-300 text-black font-semibold rounded hover:bg-yellow-400 transition">
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
