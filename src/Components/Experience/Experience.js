import React from 'react';
import { FaAward } from 'react-icons/fa';

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
];

const Experience = () => {
  return (
    <div id="experience" className="py-20">
     <div className="container mx-auto text-center">
       <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14 mt-20">
        {experience.map((experience, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
            <img src={experience.backgroundImage} alt={experience.title} className="w-full h-64 object-cover transform transition-transform duration-500"/>
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100  transition-opacity duration-500 p-6 flex flex-col justify-center items-center text-center">
              <div className="flex items-center mb-4">
                <FaAward className="text-2xl text-yellow-500 mr-2" />
                <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
              </div>
              <p className="text-gray-200 mb-2"><strong>Organization :  {experience.organization}</strong></p>
              <p className="text-gray-200 mb-2"><strong>Duration :  {experience.duration}</strong></p>
              <a href={experience.certificateLink} target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-500">
              <strong>View</strong>
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Experience;
