import React from 'react';

const Projects = () => {
    return (
        <div id="projects" className="py-20">
            <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">

                    {/* Cards */}
                    <div className="rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col">
                        <img src="/images/MyRupaya.png" className="w-full h-24 sm:h-28 md:h-32 lg:h-40 object-cover" alt="MyRupaya" />
                        <div className="p-3 sm:p-4 flex flex-col flex-grow bg-gray-900">
                            <h5 className="text-lg sm:text-xl font-bold mb-1 text-white">MyRupaya</h5>
                            <p className="text-xs sm:text-sm text-gray-300 mb-3 flex-grow">Myrupaya is India's first unbiased financial product review and comparison platform. We undertake deep research in the terms and conditions of financial products.</p>
                            <a href="https://www.myrupaya.in/" className="inline-block px-3 py-2 sm:px-4 sm:py-2.5 mt-3 bg-yellow-300 text-black font-semibold rounded hover:bg-yellow-400 transition">
                                View Project
                            </a>
                        </div>
                    </div>

                    <div className="rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col">
                        <img src="/images/NimboNexus.png" className="w-full h-24 sm:h-28 md:h-32 lg:h-40 object-cover" alt="NimboNexus Technologies" />
                        <div className="p-3 sm:p-4 flex flex-col flex-grow bg-gray-900">
                            <h5 className="text-lg sm:text-xl font-bold mb-1 text-white">NimboNexus Technologies</h5>
                            <p className="text-xs sm:text-sm text-gray-300 mb-3 flex-grow">Our services include Salesforce deployment and customization, app development, data integration, and automation. We ensure your Salesforce implementation is perfectly suited to your business requirements.</p>
                            <a href="https://nimbonexus.com/" className="inline-block px-3 py-2 sm:px-4 sm:py-2.5 mt-3 bg-yellow-300 text-black font-semibold rounded hover:bg-yellow-400 transition">
                                View Project
                            </a>
                        </div>
                    </div>

                    <div className="rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col">
                        <img src="/images/Vdhur.png" className="w-full h-24 sm:h-28 md:h-32 lg:h-40 object-cover" alt="Vdhur" />
                        <div className="p-3 sm:p-4 flex flex-col flex-grow bg-gray-900">
                            <h5 className="text-lg sm:text-xl font-bold mb-1 text-white">Vdhur</h5>
                            <p className="text-xs sm:text-sm text-gray-300 mb-3 flex-grow">Developed a website to assist individuals experiencing mental health challenges through various therapeutic methods. Created an intuitive and responsive interface using HTML, CSS, JavaScript, and Bootstrap.</p>
                            <a href="https://vdhur.netlify.app/" className="inline-block px-3 py-2 sm:px-4 sm:py-2.5 mt-3 bg-yellow-300 text-black font-semibold rounded hover:bg-yellow-400 transition">
                                View Project
                            </a>
                        </div>
                    </div>

                    <div className="rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col">
                        <img src="/images/Logo.png" className="w-full h-24 sm:h-28 md:h-32 lg:h-40 object-cover" alt="D-Cart" />
                        <div className="p-3 sm:p-4 flex flex-col flex-grow bg-gray-900">
                            <h5 className="text-lg sm:text-xl font-bold mb-1 text-white">D-Cart</h5>
                            <p className="text-xs sm:text-sm text-gray-300 mb-3 flex-grow">Some quick example text to build on the project title and make up the bulk of the card's content.</p>
                            <a href="/" className="inline-block px-3 py-2 sm:px-4 sm:py-2.5 mt-3 bg-yellow-300 text-black font-semibold rounded hover:bg-yellow-400 transition">
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
