import React from 'react';
import './experience.css';

const experience = [
  {
    title: 'Web Developer Intern',
    organization: 'MyRupaya Contentedge Private Limited',
    duration: 'Jul. 24 - Current',
    certificateLink: 'https://drive.google.com/file/d/1QcMVfRtlPLWWqRGS6Cn5_o-AuaeF-_2A/view?usp=sharing',
    backgroundImage: '/images/MyRupaya.png',
  },
  {
    title: 'Web Developer Intern',
    organization: 'Programmates Pvt. Ltd.',
    duration: 'May 24 - Jul. 24',
    certificateLink: 'https://drive.google.com/file/d/1_1GMlrg8MmTO5E9W0tpo8EPuHzCUEPT7/view?usp=sharing',
    backgroundImage: '/images/Utsav-Programmates.png',
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
            <div key={index} className="relative card-container">
              <div className="card">
                <div className="card-image">
                  <img src={exp.backgroundImage} alt={exp.title} className="image-full" />
                </div>
                <div className="card-info">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p><strong>Organization:</strong> {exp.organization}</p>
                  <p><strong>Duration:</strong> {exp.duration}</p>
                  <a href={exp.certificateLink} target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-500">
                    <strong>View Certificate</strong>
                  </a>
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