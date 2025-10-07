import React from 'react';

const Resume = () => {
  // Function to handle resume view/download
  const handleResumeView = () => {
    // Replace 'resume.pdf' with your actual resume file path
    // You can put your resume file in the public folder
    const resumeUrl = '/VimalResume.pdf'; // Put your resume.pdf file in public folder
    
    // Option 1: Open in new tab
    window.open(resumeUrl, '_blank');
    
    // Option 2: Direct download (uncomment below and comment above if you want direct download)
    // const link = document.createElement('a');
    // link.href = resumeUrl;
    // link.download = 'Vimal_Bhoutekar_Resume.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  const resumeData = {
    personalInfo: {
      name: "VIMAL BHOUTEKAR",
      title: "MERN Full Stack Developer",
      email: "vimalbhoutekar@gmail.com",
      phone: "+91 9977316685",
      location: "Indore, Madhya Pradesh - 452001, India",
      linkedin: "https://www.linkedin.com/in/vimalbhoutekar",
      github: "https://github.com/vimalbhoutekar",
      leetcode: "https://leetcode.com/u/vimalbhoutekar/"
    },
    
    objective: "Passionate MERN Full Stack Developer with hands-on experience in building scalable web applications. Seeking to leverage my technical skills and problem-solving abilities to contribute to innovative projects while continuously learning and growing in a dynamic development environment.",
    
    experience: [
      {
        company: "Codes For Tomorrow",
        position: "Node.js Developer Intern",
        duration: "September 2025 - Present",
        responsibilities: [
          "Developing robust backend APIs using Node.js and Express.js",
          "Working with MongoDB for database management and optimization",
          "Implementing RESTful API design patterns and best practices",
          "Collaborating with cross-functional teams on project development"
        ]
      },
      {
        company: "YogicCity.life",
        position: "React.js Developer Intern",
        duration: "March 2024 - August 2024",
        responsibilities: [
          "Developed and maintained React.js applications with modern hooks",
          "Implemented state management using Redux Toolkit",
          "Integrated REST APIs for dynamic data fetching",
          "Optimized application performance and SEO",
          "Enhanced user experience through responsive design"
        ]
      }
    ],
    
    education: [
      {
        degree: "Bachelor of Engineering (B.E.) in Computer Science",
        institution: "Acropolis Institute of Technology and Research, Indore",
        duration: "2022 - 2026",
        percentage: "8.32 CGPA"
      },
      {
        degree: "Higher Secondary School Certificate (12th)",
        institution: "Kendriya Vidyalaya",
        duration: "2021 - 2022",
        percentage: "86.8%"
      },
      {
        degree: "Secondary School Certificate (10th)",
        institution: "Kendriya Vidyalaya",
        duration: "2019 - 2020",
        percentage: "95.4%"
      }
    ],
    
    projects: [
      {
        name: "MERN Authentication System",
        technologies: "React.js, Node.js, Express.js, MongoDB, JWT",
        description: "Full-stack authentication system with secure login/register functionality",
        link: "https://mern-authentication-frontend-psns.onrender.com/"
      },
      {
        name: "E-commerce Platform",
        technologies: "React.js, Context API, Local Storage",
        description: "Complete e-commerce solution with cart management and product catalog",
        link: "https://react-ecommerce-three-mu.vercel.app/"
      },
      {
        name: "Movie Recommendation System",
        technologies: "React.js, TMDB API, Responsive Design",
        description: "Movie discovery platform with advanced filtering and recommendations",
        link: "https://vimalmovie.onrender.com/"
      }
    ],
    
    skills: {
      frontend: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Design"],
      backend: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
      database: ["MongoDB", "Mongoose"],
      tools: ["Git/GitHub", "VS Code", "Postman", "NPM/Yarn"],
      concepts: ["MERN Stack", "State Management", "API Integration", "Problem Solving"]
    },
    
    certifications: [
      "HackerRank JavaScript (Intermediate) Certificate",
      "HackerRank Problem Solving (Basic) Certificate",
      "HackerRank CSS Certificate",
      "GeeksforGeeks Master of Computer Application Programming"
    ]
  };

  return (
    <>
      {/* Resume Button */}
      <button
        onClick={handleResumeView}
        className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        View Resume
      </button>
    </>
  );
};

export default Resume;