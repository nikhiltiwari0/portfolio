import React from "react";

const SkillCards = (name) => { // just here so I dont have to do this each time, but try to figure out how to make so I can just do one by one? 
  return (
    <div className="skills-section mt-20 text-center px-6 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-semibold text-white text-center">
        Skills
      </h2>
      <div className="skills-grid mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex flex-1 gap-5 p-4 rounded-xl border border-[#FAFAFA] dark:border-gray-800 bg-[#FAFAFA] dark:bg-gray-800 hover:bg-[#F2F2F2] dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200">
          <div className="p-3 bg-transparent rounded-lg w-fit">
            <img
              alt="React logo"
              src="./react.svg"
              className="w-8 h-8"
            />
          </div>
          <div>
            <h4 className="text-lg font-medium">React</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              JavaScript Library
            </p>
          </div>
        </div>

        <div className="flex flex-1 gap-5 p-4 rounded-xl border border-[#FAFAFA] dark:border-gray-800 bg-[#FAFAFA] dark:bg-gray-800 hover:bg-[#F2F2F2] dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200">
      <div className="p-3 bg-transparent rounded-lg w-fit">
        <img
          alt="TypeScript logo"
          src="./typescript.svg"
          className="w-8 h-8"
        />
      </div>
      <div>
        <h4 className="text-lg font-medium">TypeScript</h4>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Programming Language</p>
      </div>
    </div>

    <div className="flex flex-1 gap-5 p-4 rounded-xl border border-[#FAFAFA] dark:border-gray-800 bg-[#FAFAFA] dark:bg-gray-800 hover:bg-[#F2F2F2] dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200">
      <div className="p-3 bg-transparent rounded-lg w-fit">
        <img
          alt="Python logo"
          src="./Python.png"
          className="w-8 h-8"
        />
      </div>
      <div>
        <h4 className="text-lg font-medium">Python</h4>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Programming Language</p>
      </div>
    </div>

    <div className="flex flex-1 gap-5 p-4 rounded-xl border border-[#FAFAFA] dark:border-gray-800 bg-[#FAFAFA] dark:bg-gray-800 hover:bg-[#F2F2F2] dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200">
      <div className="p-3 bg-transparent rounded-lg w-fit">
        <img
          alt="Firebase logo"
          src="./firebase.png"
          className="w-8 h-8"
        />
      </div>
      <div>
        <h4 className="text-lg font-medium">Firebase</h4>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Backend Database</p>
      </div>
    </div>

    <div className="flex flex-1 gap-5 p-4 rounded-xl border border-[#FAFAFA] dark:border-gray-800 bg-[#FAFAFA] dark:bg-gray-800 hover:bg-[#F2F2F2] dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200">
      <div className="p-3 bg-transparent rounded-lg w-fit">
        <img
          alt="Java logo"
          src="./java.png"
          className="w-8 h-8"
        />
      </div>
      <div>
        <h4 className="text-lg font-medium">Java</h4>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Programming Language</p>
      </div>
    </div>
    <div className="flex flex-1 gap-5 p-4 rounded-xl border border-[#FAFAFA] dark:border-gray-800 bg-[#FAFAFA] dark:bg-gray-800 hover:bg-[#F2F2F2] dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200">
      <div className="p-3 bg-transparent rounded-lg w-fit">
        <img
          alt="Nodejs logo"
          src="./nodejs.svg"
          className="w-8 h-8"
        />
      </div>
      <div>
        <h4 className="text-lg font-medium">Node.js</h4>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Runtime Environment</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default SkillCards;