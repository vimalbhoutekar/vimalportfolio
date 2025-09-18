import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Application",
      institution: "Dr. Harisingh Gour Vishwavidyalaya (A Central University)",
      duration: "November 2022 - Sept 2024",
      location: "Sagar, MP",
      percentage: "83.58%",
      type: "master",
      description: "Comprehensive program covering advanced computer applications, software development, and modern technologies."
    },
    {
      degree: "Bachelor of Science (Computer Science)",
      institution: "Jatashankar Trivedi Government P.G. College",
      duration: "August 2018 - December 2021",
      location: "Balaghat, MP",
      percentage: "68.00%",
      type: "bachelor",
      description: "Foundation in computer science principles, programming languages, and software engineering concepts."
    },
    {
      degree: "Class XII (MP Board)",
      institution: "Govt. Tehlibai H S School Waraseoni",
      duration: "July 2017 - May 2018",
      location: "Balaghat, MP",
      percentage: "75.40%",
      type: "school",
      description: "Higher secondary education with focus on science and mathematics."
    }
  ];

  const getGradientColors = (type) => {
    switch (type) {
      case 'master':
        return 'from-purple-500 to-pink-600';
      case 'bachelor':
        return 'from-blue-500 to-indigo-600';
      case 'school':
        return 'from-green-500 to-teal-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case 'master':
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        );
      case 'bachelor':
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        );
      case 'school':
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Educational <span className="text-blue-600">Background</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My academic journey in computer science and technology
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 hidden md:block"></div>
            
            {/* Education Items */}
            <div className="space-y-12">
              {educationData.map((education, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${getGradientColors(education.type)} rounded-full flex items-center justify-center shadow-lg z-10`}>
                    {getIcon(education.type)}
                  </div>

                  {/* Education Content */}
                  <div className="ml-8 flex-1">
                    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{education.degree}</h3>
                          <h4 className="text-lg font-semibold text-blue-600 mb-2">{education.institution}</h4>
                          <p className="text-gray-600">{education.description}</p>
                        </div>
                        
                        {/* Percentage Badge */}
                        <div className="mt-4 lg:mt-0 lg:ml-6">
                          <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${getGradientColors(education.type)} text-white font-bold rounded-full shadow-lg`}>
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                            {education.percentage}
                          </div>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-200">
                        <div className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="font-medium">{education.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="font-medium">{education.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Academic Achievements Summary */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Excellence</h3>
              <p className="text-gray-700 mb-6">
                Consistently maintained high academic standards throughout my educational journey, 
                with a Master's degree achieving <span className="font-bold text-blue-600">83.58%</span> from a prestigious Central University.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">83.58%</div>
                  <div className="text-sm text-gray-600">Master's Degree</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">68.00%</div>
                  <div className="text-sm text-gray-600">Bachelor's Degree</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">75.40%</div>
                  <div className="text-sm text-gray-600">Higher Secondary</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;