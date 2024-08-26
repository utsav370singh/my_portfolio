import React from 'react';
import "./Skills.css";

const Skills = () => {
    return (
        <div id="skills" className="py-20 overflow-hidden">
            <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Skills</h2>
                <div className="relative flex items-center overflow-hidden">
                    <div className="marquee whitespace-nowrap flex animate-marquee mt-10">
                        <div className="skill-card bg-white p-4 md:p-6 shadow-md mx-4 transition-transform duration-300 ease-in-out hover:scale-110">
                            <img src="/images/HTML.png" className="skill-img" alt="HTML 5" />
                        </div>
                        <div className="skill-card bg-white p-4 md:p-6 shadow-md mx-4 transition-transform duration-300 ease-in-out hover:scale-110">
                            <img src="/images/CSS.png" className="skill-img" alt="CSS 3" />
                        </div>
                        <div className="skill-card bg-white p-4 md:p-6 shadow-md mx-4 transition-transform duration-300 ease-in-out hover:scale-110">
                            <img src="/images/JS.jpg" className="skill-img" alt="JavaScript" />
                        </div>
                        <div className="skill-card bg-white p-4 md:p-6 shadow-md mx-4 transition-transform duration-300 ease-in-out hover:scale-110">
                            <img src="/images/C.png" className="skill-img" alt="C" />
                        </div>
                        <div className="skill-card bg-white p-4 md:p-6 shadow-md mx-4 transition-transform duration-300 ease-in-out hover:scale-110">
                            <img src="/images/C++.png" className="skill-img" alt="C++" />
                        </div>
                        <div className="skill-card bg-white p-4 md:p-6 shadow-md mx-4 transition-transform duration-300 ease-in-out hover:scale-110">
                            <img src="/images/Bootstrap.jpeg" className="skill-img" alt="Bootstrap" />
                        </div>
                        <div className="skill-card bg-white p-4 md:p-6 shadow-md mx-4 transition-transform duration-300 ease-in-out hover:scale-110">
                            <img src="/images/UX-UI.png" className="skill-img" alt="UX/UI" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
