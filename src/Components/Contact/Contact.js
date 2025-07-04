import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_sn9sbpf',    // EmailJS service ID
            'template_fzugrev',    // EmailJS template ID
            formData,
            '0P7AwPF4Gv7OQu2RB'    // EmailJS user ID
        ).then(() => {
            setShowModal(true);
        }).catch((error) => {
            console.error('Failed to send email:', error);
        });
    };

    const closeModal = () => {
        setShowModal(false);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div id="contact" className="py-20">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6">Contact Me</h2>
                
                {/* Form and Image in Two Columns */}
                <div className="flex flex-col lg:flex-row lg:items-center">
                    <div className="w-full lg:w-7/12 p-6">
                        <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
                            <div className="flex flex-wrap mb-6">
                                <div className="w-full">
                                    <input className="appearance-none block w-full bg-gray-100 text-gray-800 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="flex flex-wrap mb-6">
                                <div className="w-full">
                                    <input className="appearance-none block w-full bg-gray-100 text-gray-800 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="flex flex-wrap mb-6">
                                <div className="w-full">
                                    <textarea className="appearance-none block w-full bg-gray-100 text-gray-800 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" rows="4" placeholder="Your Message" name="message" value={formData.message} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button className="font-bold bg-yellow-300 text-black py-3 px-6 rounded-md hover:bg-yellow-400">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    
                    <div className="hidden lg:w-5/12 p-6 mb-20 lg:flex justify-center items-center">
                        <img src="/images/me.webp" alt="Utsav Singh" className="w-full max-w-xs h-auto rounded-lg" />
                    </div>
                </div>

                {/* Success Message Modal */}
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-lg p-8 shadow-lg text-center">
                            <h3 className="text-2xl text-black font-bold mb-4">Thank You!</h3>
                            <p className="text-black">Your message has been sent successfully.</p>
                            <button className="mt-6 font-bold bg-yellow-300 text-black py-2 px-4 rounded hover:bg-yellow-400" onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;
