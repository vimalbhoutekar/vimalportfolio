import React, { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');

  const skillsData = {
    technical: {
      title: "Technical Skills",
      icon: "💻",
      categories: [
        {
          name: "Programming Languages",
          icon: "⚡",
          skills: [
            { name: "JavaScript (ES6+)", level: 90 },
            { name: "TypeScript", level: 75 },
            { name: "Python", level: 85 },
            { name: "HTML5", level: 95 },
            { name: "CSS3", level: 90 }
          ]
        },
        {
          name: "Libraries & Frameworks",
          icon: "🚀",
          skills: [
            { name: "React.js", level: 90 },
            { name: "Next.js", level: 80 },
            { name: "Node.js", level: 85 },
            { name: "Express.js", level: 85 },
            { name: "Flask", level: 75 },
            { name: "Tailwind CSS", level: 90 },
            { name: "Redux Toolkit", level: 80 }
          ]
        },
        {
          name: "Database Systems",
          icon: "🗄️",
          skills: [
            { name: "MySQL", level: 80 },
            { name: "PostgreSQL", level: 75 },
            { name: "MongoDB", level: 85 }
          ]
        }
      ]
    },
    tools: {
      title: "Development Tools & DevOps",
      icon: "🛠️",
      categories: [
        {
          name: "Development Tools",
          icon: "⚙️",
          skills: [
            { name: "VS Code", level: 95 },
            { name: "Git", level: 90 },
            { name: "GitHub", level: 90 },
            { name: "Postman", level: 85 },
            { name: "REST API", level: 85 }
          ]
        },
        {
          name: "DevOps & Deployment",
          icon: "☁️",
          skills: [
            { name: "Docker", level: 70 },
            { name: "Container Management", level: 65 },
            { name: "Vercel", level: 85 },
            { name: "Render", level: 80 }
          ]
        },
        {
          name: "API Integration",
          icon: "🔗",
          skills: [
            { name: "TMDB API", level: 85 },
            { name: "RESTful Services", level: 85 },
            { name: "Third-party API Integration", level: 80 }
          ]
        }
      ]
    }
  };

  const getLevelColor = (level) => {
    if (level >= 90) return 'from-green-400 to-green-600';
    if (level >= 80) return 'from-blue-400 to-blue-600';
    if (level >= 70) return 'from-yellow-400 to-yellow-600';
    return 'from-red-400 to-red-600';
  };

  const getLevelText = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-2xl p-2 flex">
            {Object.entries(skillsData).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === key
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <span className="text-xl">{data.icon}</span>
                <span>{data.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Content */}
        <div className="max-w-6xl mx-auto">
          {Object.entries(skillsData).map(([tabKey, tabData]) => (
            <div
              key={tabKey}
              className={`transition-all duration-500 ${
                activeTab === tabKey ? 'opacity-100 block' : 'opacity-0 hidden'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {tabData.categories.map((category, categoryIndex) => (
                  <div
                    key={categoryIndex}
                    className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                  >
                    {/* Category Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{category.icon}</span>
                        <h3 className="text-xl font-bold">{category.name}</h3>
                      </div>
                    </div>

                    {/* Skills List */}
                    <div className="p-6 space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-gray-900">{skill.name}</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-gray-500">{skill.level}%</span>
                              <span className={`px-2 py-1 text-xs font-medium rounded-full text-white bg-gradient-to-r ${getLevelColor(skill.level)}`}>
                                {getLevelText(skill.level)}
                              </span>
                            </div>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                              className={`h-3 bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full transition-all duration-1000 ease-out`}
                              style={{ 
                                width: `${skill.level}%`,
                                animation: activeTab === tabKey ? 'fillProgress 1.5s ease-out' : 'none'
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Skills Overview</h3>
              <p className="text-gray-700">
                Proficient in modern web technologies with a focus on MERN stack development, 
                DevOps practices, and machine learning applications.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-1">25+</div>
                <div className="text-sm text-gray-600">Technologies</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-1">5+</div>
                <div className="text-sm text-gray-600">Expert Level</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-3xl font-bold text-purple-600 mb-1">3</div>
                <div className="text-sm text-gray-600">Major Projects</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-3xl font-bold text-indigo-600 mb-1">2+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Let's Work Together
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fillProgress {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;