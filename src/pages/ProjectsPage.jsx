import React from "react";

const projects = [
    {
        name: "Portfolio",
        visibility: "Public",
        description: "This site!",
        language: "JavaScript",
        updated: "2025-02-28",
        type: "website",
        link: "https://github.com/nikhiltiwari0/portfolio"
    },
    {
        name: "Geoguessr AI",
        visibility: "Public",
        description: "ML model that helps you guess where a photo was taken.",
        language: "Python",
        updated: "2025-02-23",
        type: "backend",
        link: "https://github.com/nikhiltiwari0/geoguessr_ai"
    },
    {
        name: "Real Estate Scam Checker (WIP)",
        visibility: "Public",
        description: "Helps those in the market dodge scams and find real listings.",
        language: "Python",
        updated: "2025-02-18",
        type: "backend",
        link: "https://github.com/nikhiltiwari0/realestatescamcheck"
    },
    {
        name: "DresserToGo",
        visibility: "Public",
        description: "Take a photo of yourself and scroll through your dresser online.",
        language: "Python",
        updated: "2025-02-18",
        type: "backend",
        link: "https://github.com/nikhiltiwari0/DresserToGo"
    },
    {
        name: "Unique Sentence",
        visibility: "Public",
        description: "A fun interactive website that allows a user to input a sentence and check if it's unique.",
        language: "JavaScript",
        updated: "2025-02-16",
        type: "website",
        link: "https://github.com/nikhiltiwari0/uniquesentence"
    },
    {
        name: "OnThisDay",
        visibility: "Public",
        description: "A fun Raycast extension that shares cool historical events that happened on this day.",
        language: "TypeScript",
        updated: "2025-02-13",
        type: "backend",
        link: "https://github.com/nikhiltiwari0/OnThisDay"
    },
    {
        name: "IsItAScam",
        visibility: "Public",
        description: "This site helps you figure out if a message is a scam.",
        language: "TypeScript",
        updated: "2024-11-10",
        type: "backend",
        link: "https://github.com/nikhiltiwari0/IsItAScam"
    },
    {
        name: "Elder Tasks",
        visibility: "Public",
        description: "A simple task manager designed for families with elders.",
        language: "TypeScript",
        updated: "2024-10-29",
        type: "backend",
        link: "https://github.com/nikhiltiwari0/eldertasks"
    },
    {
        name: "InspiredTweet",
        visibility: "Private",
        description: "An Android app that sends you daily quotes to keep you inspired.",
        language: "Kotlin",
        updated: "2024-02-11",
        type: "android",
        link: "https://github.com/nikhiltiwari0/InspiredTweet"
    },
    {
        name: "TipMate",
        visibility: "Public",
        description: "My first Android app! It helps users manage their tips effectively.",
        language: "Kotlin",
        updated: "2023-07-08",
        type: "android",
        link: "https://github.com/nikhiltiwari0/tipmate"
    },
    {
        name: "Snake9211.github.io",
        visibility: "Public",
        description: "The first website I created, showing my crazy stats on phantom forces (below a 1 k/d).",
        language: "HTML",
        updated: "2018-12-27",
        type: "website",
        link: "https://github.com/nikhiltiwari0/Snake9211.github.io"
    },
];

const ProjectsPage = () => {
    return (
        <div className="p-4 flex justify-center">
            <div className="color-key ml-0">
                <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                        <div className="w-4 h-4 border-l-4 border-blue-500 mr-2"></div>
                        <span>Website</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 border-l-4 border-red-500 mr-2"></div>
                        <span>Backend</span>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 border-l-4 border-green-500 mr-2"></div>
                        <span>Android</span>
                    </div>
                </div>
            </div>
            <div className="projects-container relative flex">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold text-center mb-6">My Projects</h1>
                    <div className="timeline" style={{ display: 'flex', flexDirection: 'column' }}>
                        {projects.map((project, index) => (
                            <div key={index} className="timeline-item" style={{ display: 'flex', alignItems: 'center' }}>
                                <div className="timeline-date" style={{ marginRight: '20px' }}>{project.updated}</div>
                                <div className={`project-card ${project.type}`}>
                                    <div className="github-link">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-github">
                                            GitHub
                                        </a>
                                    </div>
                                    <h2 className="project-name">{project.name}</h2>
                                    <p className="project-details">
                                        {project.visibility} | {project.language}
                                    </p>
                                    {project.description && <p className="project-description">{project.description}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;