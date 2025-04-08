import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'; 

const About = () => {
    return (
        <div className="py-20" id="about">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center">
                <div className="md:w-7/12 w-full mb-8 md:mb-0 flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">About Me</h2>
                    <p className="text-lg md:text-xl leading-relaxed">
                        I’m Utsav Singh, a 3rd-year B.Tech student specializing in Computer Science. My journey in technology has been driven by an insatiable curiosity and a passion for coding. From a young age, I’ve been fascinated by how things work, leading me to explore various programming languages and technologies.
                        
                        Over the years, I’ve developed a keen interest in both front-end and back-end development, which has allowed me to work on a variety of projects. I thrive on the challenge of solving complex problems and take pride in delivering clean, efficient, and innovative solutions.
                        
                        Beyond coding, I enjoy staying updated with the latest trends in technology, participating in hackathons, and contributing to open-source projects. I’m always eager to learn new skills and take on new challenges that push the boundaries of what I can achieve.
                    </p>
                    <p className="text-lg md:text-xl mt-8">
                        Get in Touch :-
                    </p>
                    <div className="flex justify-center md:justify-start mt-4 space-x-4">
                        <a  href="https://github.com/utsav370singh"  target="_blank"  rel="noopener noreferrer"  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition ease-in-out duration-300" >
                            <FaGithub size={50} className="text-gray-900 dark:text-gray-100" />
                        </a>
                        <a  href="https://www.linkedin.com/in/utsav-singh-a5bb9823a/"  target="_blank"  rel="noopener noreferrer"  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition ease-in-out duration-300" >
                            <FaLinkedin size={50} className="text-blue-600 dark:text-blue-400" />
                        </a>
                        <a  href="https://x.com/UtsavSingh25"  target="_blank"  rel="noopener noreferrer"  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition ease-in-out duration-300" >
                            <FaTwitter size={50} className="text-blue-400 dark:text-blue-300" />
                        </a>
                        <a  href="https://www.instagram.com/utsav_xingh/"  target="_blank"  rel="noopener noreferrer"  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition ease-in-out duration-300" >
                            <FaInstagram size={50} className="text-red-400 dark:text-red-300" />
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
