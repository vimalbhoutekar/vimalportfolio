import React from 'react';
import Resume from './Resume';

const Hero = () => {
  const contactInfo = [
    { icon: '📞', text: '+91 9977316685', link: 'tel:+919977316685' },
    { icon: '📧', text: 'vimalbhoutekar@gmail.com', link: 'mailto:vimalbhoutekar@gmail.com' },
    { icon: '📍', text: 'Indore, Madhya Pradesh - 452001, India', link: '#' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vimalbhoutekar', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com/vimalbhoutekar', icon: '🐙' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/vimalbhoutekar/', icon: '💻' },
    { name: 'HackerRank', url: '#', icon: '🏆' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image Placeholder */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              VB
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            VIMAL <span className="text-blue-600">BHOUTEKAR</span>
          </h1>
          
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-gray-600 font-medium mb-2">
              MERN Full Stack Developer
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                className="flex items-center justify-center space-x-2 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span className="text-2xl">{contact.icon}</span>
                <span className="text-gray-700 text-sm md:text-base">{contact.text}</span>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:bg-blue-50"
                title={social.name}
              >
                <span className="text-xl">{social.icon}</span>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View My Work
            </a>
            <Resume />
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-blue-600 hover:bg-blue-50"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;