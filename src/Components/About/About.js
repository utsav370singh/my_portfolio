import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'; 

const About = () => {
    return (
        <div className="py-20" id="about">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">About Me</h2>
            <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center">
                <div className="md:w-7/12 w-full mb-8 md:mb-0 flex flex-col justify-center ml-4">
                    <p className="text-lg md:text-xl leading-relaxed">
                       I’m Utsav Singh, a final-year B.Tech Computer Science student with a passion for building functional, user-focused web applications. My journey into tech began with a simple curiosity for how software works, which soon turned into hands-on experience with full-stack development using the MERN stack, Wix Velo, and modern web tools. This curiosity has helped me transform ideas into real-world projects that are both interactive and performance-driven.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed mt-5">
                       I’m always learning—exploring new technologies, contributing to open-source, and staying updated with industry trends. I’m now seeking opportunities as a MERN Stack Developer, Full-Stack Developer, or Software Engineer, where I can collaborate with passionate teams, grow my skills, and contribute to meaningful projects that create real impact.
                    </p>
                    <p className="text-lg md:text-xl mt-8">
                        Get in Touch :-
                    </p>
                    <div className="flex justify-center md:justify-start mt-4 space-x-4">
                        <a  href="https://github.com/utsav370singh"  target="_blank"  rel="noopener noreferrer"  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition ease-in-out duration-300" >
                            <FaGithub size={60} className="text-gray-900 dark:text-gray-100" />
                        </a>
                        <a  href="https://www.linkedin.com/in/utsav-singh-a5bb9823a/"  target="_blank"  rel="noopener noreferrer"  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition ease-in-out duration-300" >
                            <FaLinkedin size={60} className="text-blue-600 dark:text-blue-400" />
                        </a>
                        <a  href="https://x.com/UtsavSingh25"  target="_blank"  rel="noopener noreferrer"  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition ease-in-out duration-300" >
                            <FaTwitter size={60} className="text-blue-400 dark:text-blue-300" />
                        </a>
                        <a  href="https://www.instagram.com/utsav_xingh/"  target="_blank"  rel="noopener noreferrer"  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition ease-in-out duration-300" >
                            <FaInstagram size={60} className="text-red-400 dark:text-red-300" />
                        </a>
                    </div>
                </div>
                <div className="hidden lg:flex lg:w-5/12 w-full justify-center md:justify-end items-center">
                    <img src="/images/utsav.png" alt="Utsav Singh" className="w-full max-w-lg h-auto rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default About;
