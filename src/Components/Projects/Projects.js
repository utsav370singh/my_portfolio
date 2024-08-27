import React, { useState } from 'react';

const Projects = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const projects = [
        {
            title: 'MyRupaya',
            technologies: 'HTML, CSS, JavaScript, Bootstrap, React, Wix',
            description: 'Built and optimized web pages using React and Wix, enhancing site performance and user experience. Contributed to key projects, including a responsive customer portal.',
            img: '/images/MyRupaya.png',
            link: 'https://www.myrupaya.in/',
        },
        {
            title: 'NimboNexus',
            description: 'Developed and optimized web components using React, improving site functionality and user experience. Assisted in creating a scalable and responsive UI for client projects.',
            technologies: 'React',
            img: '/images/NimboNexus.png',
            link: 'https://nimbonexus.com/',
        },
        {
            title: 'Vdhur',
            description: 'Built a responsive website using HTML, CSS, JavaScript, and Bootstrap to provide therapeutic resources and support for individuals with mental health challenges.',
            technologies: 'HTML, CSS, JavaScript, Bootstrap',
            img: '/images/Vdhur.png',
            link: 'https://vdhur.netlify.app/',
        },
        {
            title: 'D-Cart',
            description: 'Worked on web development projects using HTML, CSS, and JavaScript, and made a frontend project named D-Cart.',
            technologies: 'React',
            img: '/images/SingleTap.png',
            link: 'https://drive.google.com/file/d/1t_3F88Vry1ajANxi5FXa7L9DHRVmVGvl/view?usp=drivesdk',
        },
    ];

    return (
        <div id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">Projects</h2>
                <div className="flex flex-col lg:flex-row">
                    {/* Left Side */}
                    <div className="lg:w-1/3 w-full mb-8 lg:mb-0 lg:pr-6">
                        <div className="space-y-4">
                            {projects.map((exp, index) => (
                                <div
                                    key={index}
                                    className={`cursor-pointer p-4 rounded-lg transition-transform duration-300 hover:scale-105 ${selectedIndex === index ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
                                    onClick={() => setSelectedIndex(index)}
                                >
                                    <h5 className="text-xl md:text-2xl font-bold">{exp.title}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Right Side */}
                    <div className="lg:w-2/3 w-full p-6 lg:pl-12 border-t-4 lg:border-t-0 lg:border-l-4 border-black">
                        <div className="w-full">
                            <img 
                                src={projects[selectedIndex].img} 
                                className="w-full max-h-72 object-cover rounded-2xl mb-4 transition-all duration-300" 
                                alt={projects[selectedIndex].title} 
                            />
                            <h3 className="text-2xl md:text-4xl font-bold mb-2">{projects[selectedIndex].title}</h3>
                            <h2 className="text-sm md:text-lg mb-2 font-semibold">{projects[selectedIndex].technologies}</h2>
                            <p className="text-sm md:text-lg mb-4">{projects[selectedIndex].description}</p>
                            <a
                                href={projects[selectedIndex].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 bg-yellow-300 text-black font-semibold rounded hover:bg-yellow-400 transition"
                            >
                                View Certificate
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
