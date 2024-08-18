import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'projects', 'skills', 'contact'];
            const scrollPosition = window.scrollY + 200;

            for (let i = 0; i < sections.length; i++) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="p-6 shadow-md fixed w-full top-0  z-50">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-2xl font-bold">My Portfolio</a>
                <div className="md:hidden" onClick={handleMenuToggle}>
                    <button className="text-3xl focus:outline-none">
                        &#9776;
                    </button>
                </div>
                <div className={`space-x-10 md:flex ${menuOpen ? 'block' : 'hidden'} md:block`}>
                    <a href="#about" className={`hover:text-blue-500 font-bold ${activeSection === 'about' ? 'text-blue-500' : ''}`}>About</a>
                    <a href="#projects" className={`hover:text-blue-500 font-bold ${activeSection === 'projects' ? 'text-blue-500' : ''}`}>Projects</a>
                    <a href="#skills" className={`hover:text-blue-500 font-bold ${activeSection === 'skills' ? 'text-blue-500' : ''}`}>Skills</a>
                    <a href="#contact" className={`hover:text-blue-500 font-bold ${activeSection === 'contact' ? 'text-blue-500' : ''}`}>Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
