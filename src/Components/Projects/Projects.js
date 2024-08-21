import React from 'react';

const Projects = () => {
    return (
        <div id="projects" className="py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Card 1 */}
                    <div className="rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col">
                        <img src="/images/MyRupaya.png" className="w-full h-40 object-cover sm:h-48 md:h-56 lg:h-64" alt="MyRupaya" />
                        <div className="p-4 sm:p-6 flex flex-col flex-grow bg-gray-900">
                            <h5 className="text-xl sm:text-2xl font-bold mb-2 text-white">MyRupaya</h5>
                            <p className="text-sm sm:text-base text-gray-300 mb-4 flex-grow">Myrupaya is India's first unbiased financial product review and comparison platform. We undertake deep research in the terms and conditions of financial products.</p>
                            <a href="https://www.myrupaya.in/" className="inline-block px-4 py-2 sm:px-6 sm:py-3 mt-4 bg-yellow-300 text-black font-semibold rounded hover:bg-yellow-400 transition">
                                View Project
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col">
                        <img src="/images/NimboNexus.png" className="w-full h-40 object-cover sm:h-48 md:h-56 lg:h-64" alt="NimboNexus Technologies" />
                        <div className="p-4 sm:p-6 flex flex-col flex-grow bg-gray-900">
                            <h5 className="text-xl sm:text-2xl font-bold mb-2 text-white">NimboNexus Technologies</h5>
                            <p className="text-sm sm:text-base text-gray-300 mb-4 flex-grow">Our services include Salesforce deployment and customization, app development, data integration, and automation. We ensure your Salesforce implementation is perfectly suited to your business requirements.</p>
                            <a href="https://nimbonexus.com/" className="inline-block px-4 py-2 sm:px-6 sm:py-3 mt-4 bg-yellow-300 text-black font-semibold rounded hover:bg-yellow-400 transition">
                                View Project
                            </a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col">
                        <img src="/images/Vdhur.png" className="w-full h-40 object-cover sm:h-48 md:h-56 lg:h-64" alt="D-Cart" />
                        <div className="p-4 sm:p-6 flex flex-col flex-grow bg-gray-900">
                            <h5 className="text-xl sm:text-2xl font-bold mb-2 text-white">Vdhur</h5>
                            <p className="text-sm sm:text-base text-gray-300 mb-4 flex-grow">Developed a website designed to assist individuals experiencing mental health challenges through various therapeutic methods. Created an intuitive and responsive interface using HTML, CSS, JavaScript, and Bootstrap.</p>
                            <a href="https://vdhur.netlify.app/" className="inline-block px-4 py-2 sm:px-6 sm:py-3 mt-4 bg-yellow-300 text-black font-semibold rounded hover:bg-yellow-400 transition">
                                View Project
                            </a>
                        </div>
                    </div>

                    <div className="rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col">
                        <img src="/images/Logo.png" className="w-full h-40 object-cover sm:h-48 md:h-56 lg:h-64" alt="D-Cart" />
                        <div className="p-4 sm:p-6 flex flex-col flex-grow bg-gray-900">
                            <h5 className="text-xl sm:text-2xl font-bold mb-2 text-white">D-Cart</h5>
                            <p className="text-sm sm:text-base text-gray-300 mb-4 flex-grow">Some quick example text to build on the project title and make up the bulk of the card's content.</p>
                            <a href="/" className="inline-block px-4 py-2 sm:px-6 sm:py-3 mt-4 bg-yellow-300 text-black font-semibold rounded hover:bg-yellow-400 transition">
                                View Project
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Projects;
