import React from 'react';
import Navbar from '../src/Components/Navbar/Navbar';
import Hero from '../src/Components/Hero/Hero'
import About from '../src/Components/About/About';
import Projects from '../src/Components/Projects/Projects';
import Skills from '../src/Components/Skills/Skills';
import Contact from '../src/Components/Contact/Contact';

function App() {
    return (
        <>
          <div className="min-h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-white">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
            </div>
        </>
    );
}

export default App;
