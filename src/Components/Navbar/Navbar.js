import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for menu and close

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

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="fixed w-full top-0 z-50 shadow-md bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-white">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="/" className="text-2xl font-bold flex items-center">
                    <img src="/images/logo.png" alt="D-Cart" className="w-10 h-10 mr-2 rounded-lg" />
                </a>
                <div className="md:hidden" onClick={handleMenuToggle}>
                    {menuOpen ? (
                        <FaTimes className="text-3xl hover:cursor-pointer text-black" />
                    ) : (
                        <FaBars className="text-3xl hover:cursor-pointer text-black" />
                    )}
                </div>
                <div className="hidden md:flex md:items-center md:space-x-10">
                    <a href="#about" className={`px-4 py-2 text-lg font-bold hover:text-yellow-500 ${activeSection === 'about' ? 'text-white-200' : ''}`}>
                        About
                    </a>
                    <a href="#projects" className={`px-4 py-2 text-lg font-bold hover:text-yellow-500 ${activeSection === 'projects' ? 'text-white-200' : ''}`}>
                        Projects
                    </a>
                    <a href="#skills" className={`px-4 py-2 text-lg font-bold hover:text-yellow-500 ${activeSection === 'skills' ? 'text-white-200' : ''}`}>
                        Skills
                    </a>
                    <a href="#contact" className={`px-4 py-2 text-lg font-bold hover:text-yellow-500 ${activeSection === 'contact' ? 'text-white-200' : ''}`}>
                        Contact
                    </a>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-white">
                    <a href="#about" onClick={closeMenu} className="block px-4 py-2 text-lg font-bold hover:bg-gray-700">
                        About
                    </a>
                    <a href="#projects" onClick={closeMenu} className="block px-4 py-2 text-lg font-bold hover:bg-gray-700">
                        Projects
                    </a>
                    <a href="#skills" onClick={closeMenu} className="block px-4 py-2 text-lg font-bold hover:bg-gray-700">
                        Skills
                    </a>
                    <a href="#contact" onClick={closeMenu} className="block px-4 py-2 text-lg font-bold hover:bg-gray-700">
                        Contact
                    </a>
                </div>
            )}
        </div>
    );
};

export default Navbar;
