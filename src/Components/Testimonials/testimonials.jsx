import React from 'react';
import "./testimonials.css";

const testimonialsData = [
  {
    id: 1,
    text: "Working with Utsav was an absolute pleasure. His attention to detail and dedication to the project made a huge difference.",
    name: "Dr. Ajay Saini",
    designation: "CEO, Theta Systems",
    image: "/images/Ajay.jpeg"
  },
  {
    id: 2,
    text: "Utsav brought a unique blend of creativity and precision. He exceeded our expectations at every stage of development.",
    name: "Er. Harsh Raj",
    designation: "CTO, SingleTap",
    image: "/images/Harsh.jpeg"
  },
  {
    id: 4,
    text: "Utsav's technical acumen and collaborative spirit and determination played a key role in shaping our platform's core features.",
    name: "Mr. Akhlaq Ahmed",
    designation: "Founder, Programmates",
    image: "/images/akhlaq.jpg"
  },
  {
    id: 3,
    text: "From planning to deployment, Utsav was instrumental in building a stable and user-friendly product for our users.",
    name: "Mr. Abhijeet Saxena",
    designation: "CTO, MyRupaya ",
    image: "/images/Abhijeet.jpeg"
  }
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Testimonials</h2>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {testimonialsData.map(({ id, text, name, designation, image }) => (
            <div
              key={id}
              className="max-w-xs w-full bg-white/40 backdrop-blur-lg rounded-xl shadow-lg p-8 text-center transform transition-transform hover:scale-105 hover:shadow-2xl fadeInUp"
            >
              <img
                src={image}
                alt={name}
                className="w-48 h-64 object-cover mx-auto mb-6 rounded-[50%] border-4 border-white shadow-md"
              />
              <p className="text-gray-700 italic text-xl mb-6">"{text}"</p>
              <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
              <p className="text-md text-gray-600">{designation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
