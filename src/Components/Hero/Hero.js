import React from 'react';
import "./Hero.css"

const Hero = () => {
    return (
        <section id="about" className="py-20">
            <div className="absolute inset-0 mt bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?technology')" }}></div>
            <div className="container mx-auto relative z-10 text-center mt-6">
                <h1 className="text-6xl font-extrabold leading-tight mb-6 animate-fadeInUp">
                    Hi, I'm <span className="text-yellow-300">Utsav Singh</span>
                </h1>
                <p className="text-2xl font-light mb-12 animate-fadeInUp delay-2s">
                    A Passionate Computer Science Engineer & B.Tech Student
                </p>
                <div className="inline-block animate-bounce">
                    <a href="https://flowcv.com/resume/55skrus1gs" download className="px-8 py-4 bg-yellow-300 text-blue-900 rounded-full text-lg font-bold shadow-lg hover:bg-yellow-400 transition transform hover:scale-110" >
                        View My Resume
                    </a>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-wave-pattern bg-no-repeat bg-bottom"></div>
        </section>
    );
};

export default Hero;
