import React from 'react';
import { FaAward } from 'react-icons/fa';
import './experience.css';

const experience = [
  {
    title: 'Web Developer Intern',
    organization: 'MyRupaya Contentedge Private Limited',
    duration: 'Jul. 24 - Current',
    certificateLink: 'https://drive.google.com/file/d/1QcMVfRtlPLWWqRGS6Cn5_o-AuaeF-_2A/view?usp=drive_link',
    backgroundImage: '/images/MyRupaya.png',
  },
  {
    title: 'Web Developer Intern',
    organization: 'SingleTap',
    duration: 'Feb. 24 - May 24',
    certificateLink: 'https://drive.google.com/file/d/1RyCnxZqpMsUNAbEx_DsqtWNpE77Csx36/view',
    backgroundImage: '/images/SingleTap.png',
  },
  {
    title: 'Web Developer Intern',
    organization: 'Theta Electronics',
    duration: 'Aug. 23 - Aug. 23',
    certificateLink: 'https://drive.google.com/file/d/1Qhf04ZuPoww1m-WfCPwYC2i00yVMixbA/view?usp=drive_link',
    backgroundImage: '/images/Theta.png',
  },
  {
    title: 'Web Developer Intern',
    organization: 'TechnoHacks Edutech',
    duration: 'Jul 23 - Aug. 23',
    certificateLink: 'https://drive.google.com/file/d/1Mqwz76_L8exwzvfw07uP5V2TM5KzUVx5/view?usp=sharing',
    backgroundImage: '/images/Techno.jpeg',
  },
];

const Experience = () => {
  return (
    <div id="experience" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14 mt-20">
          {experience.map((exp, index) => (
            <div key={index} className="relative w-full h-64 perspective-1000 ">
              <div className="card w-full h-full transform-style-preserve-3d">
                {/* Front Side */}
                <div className="card-face front w-full h-full absolute top-0 left-0 bg-transparent">
                  <img src={exp.backgroundImage} alt={exp.title} className="w-full h-full object-cover rounded-xl" />
                </div>
                {/* Back Side */}
                <div className="card-face back w-full h-full absolute top-0 left-0 flex items-center justify-center p-6 text-white rotate-y-180 rounded-xl shadow-2xl">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-4">
                      <FaAward className="text-2xl text-yellow-500 mr-2" />
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                    </div>
                    <p className="text-gray-200 mb-2"><strong>Organization: {exp.organization}</strong></p>
                    <p className="text-gray-200 mb-2"><strong>Duration: {exp.duration}</strong></p>
                    <a href={exp.certificateLink} target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-500">
                      <strong>View Certificate</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
