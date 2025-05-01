import React, { useState } from "react";

const ResumePage = () => {
  const [activeSection, setActiveSection] = useState("experience");

  const resumeData = {
    name: "Nikhil Tiwari",
    title: "Software Engineer",
    summary: "Sophomore at UW-Madison building software that makes an impact in people's lives.",
    contact: {
      email: "tiwarin9211@gmail.com",
      github: "github.com/nikhiltiwari0",
      linkedin: "linkedin.com/in/nikhil-tiwari-094b2231a/",
    },
    education: [
      {
        institution: "University of Wisconsin-Madison",
        degree: "B.S. Computer Science",
        period: "2024 - 2027",
        details: "Data Structures and Algorithms I, II, & III, Linear Algebra, " +
        "Intro to Computer Engineering, Discrete Mathematics, Calculus I & II"
      }
    ],
    experience: [
      {
        company: "Milliman",
        position: "Software Development Intern",
        period: "May 2025 - August 2025",
        details: [
          "Incoming SDE Intern for Summer 2025 at CMH Health. Will work on developing and testing healthcare software.",
        ]
      },
      {
        company: "Taro (YC S22)",
        position: "Software Engineer Intern",
        period: "May 2024 - August 2024",
        details: [
          "Spearheaded the UI/UX overhaul of the primary web application utilizing React and modern CSS techniques; implemented user-centric redesigns of key features based on feedback analysis, enhancing usability and achieving a 10% reduction in user drop-off and churn.",
          "Collaborated with backend engineering via REST APIs to design, develop, and integrate critical features into internal administrative tools, resulting in a 15% decrease in average task completion time.",
          "Executed data-driven SEO strategies, including keyword research and on-page optimization, and revamped content management system (CMS) processes; drove a measurable 10% increase in organic search traffic within 2 months by improving content discoverability and indexing."
        ]
      },
      {
        company: "BSNA",
        position: "Software Engineer Intern",
        period: "Jan 2022 - May 2024",
        details: [
          "Delivered a technical presentation on the practical applications of Artificial Intelligence to an audience of 100+ event attendees, fostering community engagement with emerging technologies.",
          "Led the end-to-end redevelopment of the community web platform using MERN, enhancing architecture and user experience; increased site traffic by 25% and streamlined the registration process for over 1,000 active members.",
          "Engineered and managed the technical infrastructure for a large-scale, 3-day event supporting 1,000+ attendees; ensured high-availability live streaming solutions, robust AV systems, and stable network infrastructure.",
          "Integrated third-party financial management APIs and custom membership engagement tools into the core platform; automated key administrative tasks, simplifying member tracking and enhancing operational efficiency."
        ]
      },
    ],
    // projects: [
    //   {
    //     name: "Geoguessr AI",
    //     details: "ML model that helps you guess where a photo was taken",
    //     technologies: ["Python", "TensorFlow", "OpenCV"]
    //   },
    //   {
    //     name: "Real Estate Scam Checker",
    //     details: "Helps those in the market dodge scams and find real listings",
    //     technologies: ["Python", "React", "Flask"]
    //   },
    //   {
    //     name: "DresserToGo",
    //     details: "Take a photo of yourself and scroll through your dresser online",
    //     technologies: ["Python", "React", "CV"]
    //   }
    // ],
    skills: {
      languages: ["Python", "JavaScript", "TypeScript", "Java", "C++", "HTML/CSS"],
      frameworks: ["React", "Node.js", "Express", "Flask", "TensorFlow"],
      tools: ["Git", "Docker", "AWS", "Firebase", "MongoDB"]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-8">
      <div className="max-w-5xl mx-auto bg-gray-800 rounded-xl shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="relative">
          <div className="absolute inset-0 bg-blue-600 opacity-10 animate-pulse"></div>
          <div className="relative p-8 text-center">
            {/* Print/Download Button - Positioned Absolutely */}
            <div className="absolute top-4 right-4">
              <a
                href="/nikhil_tiwari_resume.pdf"
                download
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 px-4 rounded-lg transition-colors flex items-center text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                PDF
              </a>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">{resumeData.name}</h1>
            <h2 className="text-xl sm:text-2xl text-blue-400 mb-4">{resumeData.title}</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">{resumeData.summary}</p>
            <div className="flex justify-center space-x-4 mt-6">
              <a href={`mailto:${resumeData.contact.email}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                {resumeData.contact.email}
              </a>
              <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                GitHub
              </a>
              <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex overflow-x-auto bg-gray-900 border-t border-b border-gray-700">
          <button 
            onClick={() => setActiveSection("experience")}
            className={`px-5 py-3 font-medium whitespace-nowrap ${activeSection === "experience" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400 hover:text-white"}`}
          >
            Experience
          </button>
          <button 
            onClick={() => setActiveSection("education")}
            className={`px-5 py-3 font-medium whitespace-nowrap ${activeSection === "education" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400 hover:text-white"}`}
          >
            Education
          </button>
          {/* <button 
            onClick={() => setActiveSection("projects")}
            className={`px-5 py-3 font-medium whitespace-nowrap ${activeSection === "projects" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400 hover:text-white"}`}
          >
            Projects
          </button> */}
          <button 
            onClick={() => setActiveSection("skills")}
            className={`px-5 py-3 font-medium whitespace-nowrap ${activeSection === "skills" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400 hover:text-white"}`}
          >
            Skills
          </button>
        </div>
        
        {/* Content */}
        <div className="p-8">
          {activeSection === "experience" && (
            <div className="animate__animated animate__fadeIn">
              <h3 className="text-2xl font-bold text-white mb-6">Work Experience</h3>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="mb-8 relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-blue-600 opacity-70"></div>
                  <div className="pl-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                      <h4 className="text-xl font-bold text-white">{exp.position}</h4>
                      <span className="text-blue-400 font-medium">{exp.period}</span>
                    </div>
                    <h5 className="text-gray-300 font-medium mb-3">{exp.company}</h5>
                    <ul className="list-disc list-inside text-gray-400">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="mb-1">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeSection === "education" && (
            <div className="animate__animated animate__fadeIn">
              <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="mb-8 relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-green-600 opacity-70"></div>
                  <div className="pl-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                      <h4 className="text-xl font-bold text-white">{edu.institution}</h4>
                      <span className="text-green-400 font-medium">{edu.period}</span>
                    </div>
                    <h5 className="text-gray-300 font-medium mb-3">{edu.degree}</h5>
                    <p className="text-gray-400">
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeSection === "projects" && (
            <div className="animate__animated animate__fadeIn">
              <h3 className="text-2xl font-bold text-white mb-6">Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resumeData.projects.map((project, index) => (
                  <div key={index} className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <h4 className="text-xl font-bold text-white mb-2">{project.name}</h4>
                    <p className="text-gray-400 mb-4">{project.details}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeSection === "skills" && (
            <div className="animate__animated animate__fadeIn">
              <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Programming Languages</h4>
                <div className="flex flex-wrap gap-3">
                  {resumeData.skills.languages.map((skill, index) => (
                    <span key={index} className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-green-400 mb-3">Frameworks & Libraries</h4>
                <div className="flex flex-wrap gap-3">
                  {resumeData.skills.frameworks.map((skill, index) => (
                    <span key={index} className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-purple-400 mb-3">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {resumeData.skills.tools.map((skill, index) => (
                    <span key={index} className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumePage;