import React from 'react';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-white mb-6">About Me</h1>
                    <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="md:col-span-1">
                        <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
                            <img 
                                src="https://via.placeholder.com/300x300?text=Nikhil+Tiwari" 
                                alt="Nikhil Tiwari" 
                                className="w-full h-auto rounded-lg mb-6"
                            />
                            
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-400 mb-1">Location</h3>
                                    <p className="text-gray-300">Madison, Wisconsin</p>
                                </div>
                                
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-400 mb-1">Education</h3>
                                    <p className="text-gray-300">University of Wisconsin-Madison</p>
                                    <p className="text-gray-400 text-sm">Computer Science, 2024-2027</p>
                                </div>
                                
                                <div>
                                    <h3 className="text-lg font-semibold text-blue-400 mb-1">Connect</h3>
                                    <div className="flex space-x-4 mt-2">
                                        <a 
                                            href="https://github.com/nikhiltiwari0" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-gray-300 hover:text-white transition-colors"
                                        >
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                            </svg>
                                        </a>
                                        <a 
                                            href="https://www.linkedin.com/in/nikhil-tiwari-094b2231a/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-gray-300 hover:text-white transition-colors"
                                        >
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                            </svg>
                                        </a>
                                        <a 
                                            href="mailto:tiwarin9211@gmail.com" 
                                            className="text-gray-300 hover:text-white transition-colors"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="md:col-span-2">
                        <div className="bg-gray-800 p-8 rounded-xl shadow-xl h-full">
                            <h2 className="text-3xl font-bold text-white mb-6">Hello, I'm Nikhil!</h2>
                            
                            <div className="space-y-6 text-gray-300">
                            <p>
                                Hi! I'm Nikhil Tiwari, a sophomore at the University of Wisconsin–Madison, pursuing a Bachelor's degree in Computer Science. My journey has taken me across the Midwest, from being born in St. Louis, raised in Michigan, and now studying in Wisconsin.
                            </p>
                            <p>
                                I'm a passionate student developer driven by curiosity and a desire to build tools that make a meaningful impact. My technical interests lie at the intersection of artificial intelligence and user experience, where I enjoy crafting solutions that are both smart and intuitive. From building frontend heavy websites to developing ML-powered image recognition systems and full-stack web apps, I’m always experimenting with new ideas and technologies.
                            </p>   
                            <p>
                                I’ve worked with a variety of languages and frameworks (Python, JavaScript, React, Firebase, and more) and I enjoy applying these skills to side projects, hackathons, and school to continuously grow as a developer.
                            </p>
                            <p>
                                Outside of tech, I love mountain biking, gaming, and spending quality time with my family and friends. I also love watching and playing all sports, but I don't support any teams, so I tend to just root for the underdog. Apart from that, I also am really passionate about cars, and my dream car is a Mustang RTR (Fun Fact: I met Vaughn Gittin Jr before).
                            </p>
                                
                                <div className="pt-4">
                                    <h3 className="text-xl font-semibold text-blue-400 mb-4">Areas of Interest</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-blue-900 bg-opacity-50 text-blue-300 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                                        <span className="bg-blue-900 bg-opacity-50 text-blue-300 px-3 py-1 rounded-full text-sm">Web Development</span>
                                        <span className="bg-blue-900 bg-opacity-50 text-blue-300 px-3 py-1 rounded-full text-sm">Mobile Apps</span>
                                        <span className="bg-blue-900 bg-opacity-50 text-blue-300 px-3 py-1 rounded-full text-sm">Computer Vision</span>
                                        <span className="bg-blue-900 bg-opacity-50 text-blue-300 px-3 py-1 rounded-full text-sm">Natural Language Processing</span>
                                        <span className="bg-blue-900 bg-opacity-50 text-blue-300 px-3 py-1 rounded-full text-sm">UI/UX Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="bg-gray-800 rounded-xl shadow-xl p-8 mb-16">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">My Journey</h2>
                    
                    <div className="space-y-12">
                        <div className="relative pl-8 md:pl-0">
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-blue-500"></div>
                            
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                                    <h3 className="text-xl font-bold text-white">Started Coding</h3>
                                    <p className="text-blue-400">2018</p>
                                </div>
                                <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500"></div>
                                <div className="md:w-1/2 md:pl-12">
                                    <p className="text-gray-300">
                                        Created my first HTML website and discovered my passion for programming
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative pl-8 md:pl-0">
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-blue-500"></div>
                            
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                                    <h3 className="text-xl font-bold text-white">First Android App</h3>
                                    <p className="text-blue-400">2023</p>
                                </div>
                                <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500"></div>
                                <div className="md:w-1/2 md:pl-12">
                                    <p className="text-gray-300">
                                        Developed "TipMate", my first Android application to help users manage their tips
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative pl-8 md:pl-0">
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-blue-500"></div>
                            
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                                    <h3 className="text-xl font-bold text-white">UW-Madison</h3>
                                    <p className="text-blue-400">2024 - Present</p>
                                </div>
                                <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500"></div>
                                <div className="md:w-1/2 md:pl-12">
                                    <p className="text-gray-300">
                                        Started my Computer Science degree at the University of Wisconsin-Madison
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* <div className="relative pl-8 md:pl-0">
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-1/2 w-px bg-blue-500"></div>
                            
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                                    <h3 className="text-xl font-bold text-white">Research</h3>
                                    <p className="text-blue-400">2024 - Present</p>
                                </div>
                                <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500"></div>
                                <div className="md:w-1/2 md:pl-12">
                                    <p className="text-gray-300">
                                        Started undergraduate research in machine learning and computer vision
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
                    </p>
                    
                    <a 
                        href="mailto:ntiwari9@wisc.edu" 
                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        Send Email
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;