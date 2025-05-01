import React, { useState } from "react";

const projects = [
    {
        name: "Shared-AI",
        visibility: "Public",
        description: "Group AI chat, allowing multiple users to talk to the same AI.",
        language: "TypeScript",
        updated: "2025-04-30",
        type: "website",
        link: "https://github.com/nikhiltiwari0/multiAI",
        image: "https://via.placeholder.com/500x300?text=Shared+AI"
    },
    {
        name: "Portfolio",
        visibility: "Public",
        description: "This site! A modern portfolio built with React and Tailwind CSS.",
        language: "JavaScript",
        updated: "2025-02-28",
        type: "website",
        link: "https://github.com/nikhiltiwari0/portfolio",
        image: "https://via.placeholder.com/500x300?text=Portfolio"
    },
    {
        name: "Geoguessr AI",
        visibility: "Public",
        description: "Machine learning model that helps you guess where a photo was taken using computer vision and geospatial data analysis.",
        language: "Python",
        updated: "2025-02-23",
        type: "backend",
        link: "https://github.com/nikhiltiwari0/geoguessr_ai",
        image: "https://via.placeholder.com/500x300?text=Geoguessr+AI"
    },
    {
        name: "Real Estate Scam Checker",
        visibility: "Public",
        description: "Helps those in the real estate market dodge scams and find real listings using NLP to analyze listing descriptions.",
        language: "Python",
        updated: "2025-02-18",
        type: "backend",
        link: "https://github.com/nikhiltiwari0/realestatescamcheck",
        image: "https://via.placeholder.com/500x300?text=Real+Estate+Scam+Checker"
    },
    {
        name: "DresserToGo",
        visibility: "Public",
        description: "Take a photo of yourself and scroll through your dresser online. Utilizes computer vision to create virtual try-on experiences.",
        language: "Python",
        updated: "2025-02-18",
        type: "backend",
        link: "https://github.com/nikhiltiwari0/DresserToGo",
        image: "https://via.placeholder.com/500x300?text=DresserToGo"
    },
    {
        name: "Unique Sentence",
        visibility: "Public",
        description: "A fun interactive website that allows users to input a sentence and check if it's unique using advanced NLP techniques.",
        language: "JavaScript",
        updated: "2025-02-16",
        type: "website",
        link: "https://github.com/nikhiltiwari0/uniquesentence",
        image: "https://via.placeholder.com/500x300?text=Unique+Sentence"
    },
    {
        name: "OnThisDay",
        visibility: "Public",
        description: "A fun Raycast extension that shares cool historical events that happened on this day using various historical APIs.",
        language: "TypeScript",
        updated: "2025-02-13",
        type: "backend",
        link: "https://github.com/nikhiltiwari0/OnThisDay",
        image: "https://via.placeholder.com/500x300?text=OnThisDay"
    },
    {
        name: "IsItAScam",
        visibility: "Public",
        description: "This site helps you figure out if a message is a scam using machine learning to identify patterns in potentially fraudulent messages.",
        language: "TypeScript",
        updated: "2024-11-10",
        type: "backend",
        link: "https://github.com/nikhiltiwari0/IsItAScam",
        image: "https://via.placeholder.com/500x300?text=IsItAScam"
    },
    {
        name: "Elder Tasks",
        visibility: "Public",
        description: "A simple task manager designed for families with elders, featuring an accessible interface and reminder system.",
        language: "TypeScript",
        updated: "2024-10-29",
        type: "backend",
        link: "https://github.com/nikhiltiwari0/eldertasks",
        image: "https://via.placeholder.com/500x300?text=Elder+Tasks"
    },
    {
        name: "InspiredTweet",
        visibility: "Private",
        description: "An Android app that sends you daily quotes to keep you inspired, with custom notification settings and quote categories.",
        language: "Kotlin",
        updated: "2024-02-11",
        type: "android",
        link: "https://github.com/nikhiltiwari0/InspiredTweet",
        image: "https://via.placeholder.com/500x300?text=InspiredTweet"
    },
    {
        name: "TipMate",
        visibility: "Public",
        description: "My first Android app! It helps users manage their tips effectively with calculation features and history tracking.",
        language: "Kotlin",
        updated: "2023-07-08",
        type: "android",
        link: "https://github.com/nikhiltiwari0/tipmate",
        image: "https://via.placeholder.com/500x300?text=TipMate"
    },
    {
        name: "Snake9211.github.io",
        visibility: "Public",
        description: "The first website I created, showing my stats on phantom forces (below a 1 k/d). A nostalgic piece showcasing my initial coding journey.",
        language: "HTML",
        updated: "2018-12-27",
        type: "website",
        link: "https://github.com/nikhiltiwari0/Snake9211.github.io",
        image: "https://via.placeholder.com/500x300?text=Snake9211"
    },
];

const ProjectsPage = () => {
    const [filter, setFilter] = useState("all");
    const [activeProject, setActiveProject] = useState(null);

    const filteredProjects = filter === "all" 
        ? projects 
        : projects.filter(project => project.type === filter);

    const typeColorMap = {
        website: "blue",
        backend: "red",
        android: "green"
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-2">My Projects</h1>
                <p className="text-gray-400 text-center mb-12">Check out what I've been building</p>
                
                {/* Filters */}
                <div className="flex justify-center flex-wrap gap-2 mb-12">
                    <button 
                        onClick={() => setFilter("all")} 
                        className={`px-5 py-2 rounded-full ${filter === "all" ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"} transition-colors`}
                    >
                        All Projects
                    </button>
                    <button 
                        onClick={() => setFilter("website")} 
                        className={`px-5 py-2 rounded-full ${filter === "website" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"} transition-colors`}
                    >
                        Websites
                    </button>
                    <button 
                        onClick={() => setFilter("backend")} 
                        className={`px-5 py-2 rounded-full ${filter === "backend" ? "bg-red-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"} transition-colors`}
                    >
                        Backend
                    </button>
                    <button 
                        onClick={() => setFilter("android")} 
                        className={`px-5 py-2 rounded-full ${filter === "android" ? "bg-green-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"} transition-colors`}
                    >
                        Android
                    </button>
                </div>
                
                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all cursor-pointer"
                            onClick={() => setActiveProject(project)}
                        >
                            <div className="relative">
                                <div className={`absolute top-0 left-0 w-full h-1 bg-${typeColorMap[project.type]}-500`}></div>
                                <img 
                                    src={project.image} 
                                    alt={project.name} 
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute top-3 right-3">
                                    <span className={`inline-block py-1 px-2 rounded-full text-xs font-medium bg-${typeColorMap[project.type]}-500 bg-opacity-90 text-white`}>
                                        {project.type}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                                    <span className="text-xs text-gray-400">{project.updated}</span>
                                </div>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-sm font-medium text-gray-300">{project.language}</span>
                                    <span className="text-xs text-gray-400">{project.visibility}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Project Modal */}
                {activeProject && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
                        <div className="bg-gray-800 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col">
                            <div className="relative">
                                <img 
                                    src={activeProject.image} 
                                    alt={activeProject.name} 
                                    className="w-full h-72 object-cover"
                                />
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveProject(null);
                                    }}
                                    className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <div className="absolute bottom-4 left-4">
                                    <span className={`inline-block py-1 px-3 rounded-full text-sm font-medium bg-${typeColorMap[activeProject.type]}-500 text-white`}>
                                        {activeProject.type}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-6 overflow-y-auto flex-grow">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                                    <h2 className="text-3xl font-bold text-white mb-2 md:mb-0">{activeProject.name}</h2>
                                    <div className="flex items-center">
                                        <span className="text-gray-400 mr-4">{activeProject.updated}</span>
                                        <span className="text-sm bg-gray-700 px-2 py-1 rounded-md text-gray-300">{activeProject.language}</span>
                                    </div>
                                </div>
                                
                                <p className="text-gray-300 mb-8">
                                    {activeProject.description}
                                </p>
                                
                                <div className="flex justify-center mt-8">
                                    <a 
                                        href={activeProject.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className={`inline-flex items-center bg-${typeColorMap[activeProject.type]}-600 text-white px-5 py-2 rounded-lg hover:bg-${typeColorMap[activeProject.type]}-700 transition-colors`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                        View on GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <h3 className="text-2xl text-gray-400 mb-4">No projects found</h3>
                        <p className="text-gray-500">Try changing the filter or check back later</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectsPage;