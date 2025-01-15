import React from "react";

const SkillCards = (name) => { 
  return (
    <div className="skills-section mt-0 text-center px-0 mx-auto">
      <h2 className="text-3xl font-semibold text-white text-center mb-2 w-full">
        Skills
      </h2>
      <div className="skills-grid grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="flex flex-1 gap-5 p-4 rounded-xl border">
          <div className="p-3 bg-opacity-90 rounded-lg w-fit">
            <img
              alt="React logo"
              src="./react.svg"
              className="w-8 h-8"
            />
          </div>
          <div>
            <h4 className="text-lg font-medium text-white">React</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">JavaScript Library</p>
          </div>
        </div>

        <div className="flex flex-1 gap-5 p-4 rounded-xl border">
          <div className="p-3 bg-opacity-90 rounded-lg w-fit">
            <img
              alt="TypeScript logo"
              src="./typescript.svg"
              className="w-8 h-8"
            />
          </div>
          <div>
            <h4 className="text-lg font-medium text-white">TypeScript</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Programming Language</p>
          </div>
        </div>

        <div className="flex flex-1 gap-5 p-4 rounded-xl border">
          <div className="p-3 bg-opacity-90 rounded-lg w-fit">
            <img
              alt="Python logo"
              src="./Python.png"
              className="w-8 h-8"
            />
          </div>
          <div>
            <h4 className="text-lg font-medium text-white">Python</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Programming Language</p>
          </div>
        </div>

        <div className="flex flex-1 gap-5 p-4 rounded-xl border ">
          <div className="p-3 bg-opacity-90 rounded-lg w-fit">
            <img
              alt="Firebase logo"
              src="./firebase.png"
              className="w-8 h-8"
            />
          </div>
          <div>
            <h4 className="text-lg font-medium text-white">Firebase</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Backend Database</p>
          </div>
        </div>

        <div className="flex flex-1 gap-5 p-4 rounded-xl border ">
          <div className="p-3 bg-opacity-90 rounded-lg w-fit">
            <img
              alt="Java logo"
              src="./java.png"
              className="w-8 h-8"
            />
          </div>
          <div>
            <h4 className="text-lg font-medium text-white">Java</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Programming Language</p>
          </div>
        </div>

        <div className="flex flex-1 gap-5 p-4 rounded-xl border ">
          <div className="p-3 bg-opacity-90 rounded-lg w-fit">
            <img
              alt="Nodejs logo"
              src="./nodejs.svg"
              className="w-8 h-8"
            />
          </div>
          <div>
            <h4 className="text-lg font-medium text-white">Node.js</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Runtime Environment</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillCards;