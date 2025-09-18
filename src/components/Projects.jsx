import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "MERN Authentication System",
      duration: "June 2025 - August 2025",
      tools: ["React", "Node.js", "Express", "MongoDB", "JWT", "bcrypt", "Nodemailer", "Postman"],
      description: "A comprehensive authentication system built with the MERN stack featuring secure user registration, login, and password management.",
      features: [
        "Built comprehensive MERN authentication system with signup, email verification, and password reset",
        "Implemented secure backend with bcrypt password hashing and JWT token management",
        "Developed React frontend using Context API and integrated Nodemailer for email verification"
      ],
      category: "Full Stack",
      image: "🔐",
      techStack: {
        Frontend: ["React.js", "Context API", "CSS3"],
        Backend: ["Node.js", "Express.js", "JWT"],
        Database: ["MongoDB"],
        Security: ["bcrypt", "Nodemailer"]
      },
      projectLink: "https://mern-authentication-frontend-psns.onrender.com/",
      githubLink: "https://github.com/vimalbhoutekar/Mern-Authentication"
    },
    {
      id: 2,
      title: "React E-Commerce Store",
      duration: "2025",
      tools: ["React.js", "Redux Toolkit", "Tailwind CSS"],
      description: "Built a SPA e-commerce frontend with dynamic product listing, category filters, and search. Managed global cart state using Redux Toolkit and persisted data in LocalStorage.",
      features: [
        "Built dynamic product listing with category filters and search functionality",
        "Implemented global cart state management using Redux Toolkit",
        "Added cart operations: Add to Cart, Remove from Cart with real-time calculations",
        "Persisted cart data in LocalStorage for seamless user experience"
      ],
      category: "Frontend",
      image: "🛒",
      techStack: {
        Frontend: ["React.js", "Redux Toolkit", "Tailwind CSS"],
        "State Management": ["Redux Toolkit", "LocalStorage"],
        Features: ["Product Listing", "Cart Management", "Real-time Calculations"],
        Architecture: ["SPA", "Component-Based"]
      },
      projectLink: "https://react-ecommerce-three-mu.vercel.app/",
      githubLink: "https://github.com/vimalbhoutekar/react-ecommerce"
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      duration: "2025",
      tools: ["React.js", "React Router DOM", "Tailwind CSS"],
      description: "A responsive personal portfolio website showcasing projects, skills, and professional experience with modern design principles.",
      features: [
        "Developed responsive portfolio website showcasing projects and skills",
        "Implemented SPA architecture using React Router DOM with Tailwind CSS",
        "Created interactive components with mobile-first responsive design"
      ],
      category: "Frontend",
      image: "🌐",
      techStack: {
        Frontend: ["React.js", "React Router DOM", "Tailwind CSS"],
        Design: ["Responsive Design", "Mobile-First"],
        Architecture: ["SPA", "Component-Based"]
      },
      projectLink: "#",
      githubLink: "#"
    },
    {
      id: 4,
      title: "Content-Based Movie Recommendation Engine",
      duration: "2024",
      tools: ["Python", "Flask", "scikit-learn", "TMDB API"],
      description: "An AI-powered movie recommendation system using machine learning algorithms to suggest movies based on content similarity.",
      features: [
        "Developed ML-powered movie recommendation system using content-based filtering",
        "Applied NLP techniques including Bag of Words and Cosine Similarity",
        "Built Flask web application with TMDB API integration and deployed on Render"
      ],
      category: "Machine Learning",
      image: "🎬",
      techStack: {
        Backend: ["Python", "Flask"],
        "Machine Learning": ["scikit-learn", "NLP", "Cosine Similarity"],
        API: ["TMDB API"],
        Deployment: ["Render"]
      },
      projectLink: "https://vimalmovie.onrender.com/",
      githubLink: "https://github.com/vimalbhoutekar/Movie-Recommendation-System-Project"
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Machine Learning"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Full Stack':
        return 'from-blue-500 to-indigo-600';
      case 'Frontend':
        return 'from-green-500 to-teal-600';
      case 'Machine Learning':
        return 'from-purple-500 to-pink-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical expertise and problem-solving abilities through various projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${getCategoryColor(project.category)} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex items-center text-sm opacity-90">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {project.duration}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Preview */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.slice(0, 4).map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-xs font-medium rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        +{project.tools.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 px-3 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm"
                  >
                    View Details
                  </button>
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center"
                    title="View Live Project"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 border-2 border-gray-600 text-gray-600 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
                    title="View GitHub Repository"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className={`bg-gradient-to-r ${getCategoryColor(selectedProject.category)} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{selectedProject.image}</div>
                    <div>
                      <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                      <p className="opacity-90">{selectedProject.duration}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{selectedProject.description}</p>

                {/* All Features */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features & Achievements:</h4>
                  <ul className="space-y-3">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Detailed Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Technology Stack:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(selectedProject.techStack).map(([category, techs]) => (
                      <div key={category} className="bg-gray-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">{category}:</h5>
                        <div className="flex flex-wrap gap-2">
                          {techs.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-full shadow-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Action Buttons */}
                <div className="flex gap-4 justify-center pt-6 border-t border-gray-200">
                  <a
                    href={selectedProject.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Live Project
                  </a>
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;