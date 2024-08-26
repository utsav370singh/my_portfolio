import React from 'react';
import "./Hero.css";

const Hero = () => {
  return (
      <div id="hero" className="py-20">
        <div className="absolute inset-0 mt-6 bg-cover bg-center opacity-30"></div>

        <div className="relative w-full flex justify-center items-center mb-10 mt-6">
          <img src="/images/me2.png" alt="Utsav Singh" className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 h-auto rounded-lg transition-transform duration-1000 ease-in-out transform translate-y-0"style={{ animation: 'slideUp 1s ease forwards' }} 
          />
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fadeInUp">
            Hi, I'm <span className="text-yellow-300">Utsav Singh</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-light mb-12 animate-fadeInUp delay-2s">
            A Passionate Web Developer & Web Designer.
          </p>
          <div className="inline-block animate-bounce">
            <a href="https://flowcv.com/resume/55skrus1gs" download className="px-6 sm:px-8 py-3 sm:py-4 bg-yellow-300 text-blue-900 rounded-full text-sm sm:text-lg md:text-xl font-bold shadow-lg hover:bg-yellow-400 transition transform hover:scale-110">
              View My Resume
            </a>
          </div>
        </div>
      </div>
  );
};

export default Hero;
