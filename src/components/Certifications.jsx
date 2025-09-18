import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Python Programming",
      provider: "Udemy",
      year: "2025",
      icon: "🐍",
      description: "Comprehensive Python programming course covering fundamentals to advanced concepts including data structures, OOP, and web development.",
      skills: ["Python Fundamentals", "Data Structures", "Object-Oriented Programming", "Web Development", "API Development"],
      category: "Programming"
    },
    {
      id: 2,
      title: "Front-End Development",
      provider: "Udemy",
      year: "2025",
      icon: "🎨",
      description: "Complete front-end development certification covering HTML5, CSS3, JavaScript, React.js, and modern development practices.",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design", "Modern Development"],
      category: "Web Development"
    },
    {
      id: 3,
      title: "SQL Certificate",
      provider: "LinkedIn Learning",
      year: "2024",
      icon: "🗄️",
      description: "Advanced SQL certification covering database design, complex queries, optimization, and data management best practices.",
      skills: ["Database Design", "Complex Queries", "Data Optimization", "MySQL", "PostgreSQL"],
      category: "Database"
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Programming':
        return 'from-blue-500 to-indigo-600';
      case 'Web Development':
        return 'from-green-500 to-teal-600';
      case 'Database':
        return 'from-purple-500 to-pink-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getProviderLogo = (provider) => {
    switch (provider) {
      case 'Udemy':
        return '🎓';
      case 'LinkedIn Learning':
        return '💼';
      default:
        return '📜';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certifications & <span className="text-blue-600">Learning</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              {/* Certificate Header */}
              <div className={`bg-gradient-to-r ${getCategoryColor(cert.category)} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{cert.icon}</div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getProviderLogo(cert.provider)}</span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                      {cert.year}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm opacity-90">{cert.provider}</p>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                    {cert.category}
                  </span>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{cert.description}</p>

                {/* Skills Gained */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Skills Gained:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(cert.category)} bg-opacity-10 text-xs font-medium rounded-full border border-current`}
                        style={{ 
                          color: cert.category === 'Programming' ? '#3b82f6' : 
                                 cert.category === 'Web Development' ? '#059669' : '#9333ea' 
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certificate Actions */}
                <div className="flex gap-2 mt-6">
                  <button className={`flex-1 px-4 py-2 bg-gradient-to-r ${getCategoryColor(cert.category)} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm`}>
                    View Certificate
                  </button>
                  <button className="px-4 py-2 border-2 border-gray-300 text-gray-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Journey Summary */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning Journey</h3>
              <p className="text-gray-600 leading-relaxed">
                Committed to staying updated with the latest technologies and industry best practices through 
                continuous learning and professional development. These certifications represent my dedication 
                to excellence and continuous improvement in the field of web development and software engineering.
              </p>
            </div>

            {/* Learning Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-1">3</div>
                <div className="text-sm text-gray-600">Certifications</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-1">3</div>
                <div className="text-sm text-gray-600">Platforms</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">Skills Acquired</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-indigo-600 mb-1">2024-25</div>
                <div className="text-sm text-gray-600">Recent Years</div>
              </div>
            </div>

            {/* Learning Platforms */}
            <div className="border-t border-gray-200 pt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Learning Platforms</h4>
              <div className="flex justify-center items-center space-x-8">
                <div className="flex items-center space-x-2 text-gray-600">
                  <span className="text-2xl">🎓</span>
                  <span className="font-medium">Udemy</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <span className="text-2xl">💼</span>
                  <span className="font-medium">LinkedIn Learning</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-8">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;