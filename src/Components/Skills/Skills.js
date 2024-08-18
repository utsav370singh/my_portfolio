import React from 'react';
import "./Skills.css"

const Skills = () => {
    return (
        <section id="skills" className="py-20 overflow-hidden">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Skills</h2>
                <div className="relative flex items-center overflow-hidden">
                    <div className="marquee whitespace-nowrap flex animate-marquee">
                        <div className="bg-white p-6 shadow-md mx-4">
                            <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s" 
                                className="w-30 h-24 object-contain" 
                                alt="HTML 5" 
                            />
                        </div>
                        <div className="bg-white p-6 shadow-md mx-4">
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/340px-CSS3_logo_and_wordmark.svg.png" 
                                className="w-24 h-24 object-contain" 
                                alt="CSS 3" 
                            />
                        </div>
                        <div className="bg-white p-6 shadow-md mx-4">
                            <img 
                                src="https://i.pinimg.com/736x/13/40/7c/13407c12f50f08d328800c3caef43f61.jpg" 
                                className="w-24 h-24 object-contain" 
                                alt="JavaScript" 
                            />
                        </div>
                        <div className="bg-white p-6 shadow-md mx-4">
                            <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25oYJlp2wL_GAT2FOKBaOlCt1fbn56-hXDg&s" 
                                className="w-24 h-24 object-contain" 
                                alt="C" 
                            />
                        </div>
                        <div className="bg-white p-6 shadow-md mx-4">
                            <img 
                                src="data:image/png;base64,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" 
                                className="w-24 h-24 object-contain" 
                                alt="C++" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
